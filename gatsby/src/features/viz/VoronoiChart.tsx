import { useDebounceCallback } from '@react-hook/debounce'
import useSize from '@react-hook/size'
import * as d3 from 'd3'
import React, { FocusEvent, memo, MouseEvent, MouseEventHandler, useEffect, useMemo, useRef } from 'react'

import { StrapiProject } from '../../../graphql-types'

type VoronoiDatum = {
  x: number
  y: number
  title: string
  imageUrl: string
  id: string | number
  color: string | undefined
}
type VoronoiChartProps = {
  data: VoronoiDatum[]
  padding?: {
    top?: number
    right?: number
    bottom?: number
    left?: number
  }
  width: number
  height: number
}

export const VoronoiChart = memo(({ data: unscaledData, padding, width, height }: VoronoiChartProps) => {
  const svgRef = useRef<SVGSVGElement>(null)

  const data = useMemo(
    () => unscaledData.map((datum) => ({ ...datum, x: datum.x * width, y: datum.y * height })),
    [height, unscaledData, width]
  )

  const updateGraphDebounce = useDebounceCallback(drawVoronoi, 300)

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3
        .select(svgRef.current)
        .attr('fill', 'none')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')

      updateGraphDebounce(
        svg,
        data,
        { width, height },
        {
          offset: Math.min(width, height) / Math.sqrt(data.length),
          padding
        }
      )
    }
  }, [updateGraphDebounce, data, width, height, padding])

  return (
    <svg ref={svgRef} width={width} height={height}>
      <defs>
        <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" patternTransform="scale(1)" width="4" height="4">
          <path
            d="M-1,1 l2,-2
           M0,4 l4,-4
           M3,5 l2,-2"
            className="stroke-current text-bg-secondary stroke-1"
          />
        </pattern>
        {Array.from(new Set(data.map((p) => p.color))).map((color) => (
          <pattern
            key={color}
            id={'diagonalHatchHighlight-' + color}
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1)"
            width="4"
            height="4"
          >
            <path
              d="M-1,1 l2,-2
           M0,4 l4,-4
           M3,5 l2,-2"
              strokeWidth="1"
              stroke={color}
            />
          </pattern>
        ))}
      </defs>
      <g className="base-layer"></g>
      <g className="definition-layer"></g>
      <g className="content-layer"></g>
    </svg>
  )
})

const DEFAULT_PADDING = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}

type Position = { x: number; y: number }

type Delta = Position[]

export type EnrichedDatum = VoronoiDatum & {
  path: string
  index: number
}

type Dimensions = { width: number; height: number }
type VoronoiOptions = {
  offset?: number
  transitionDuration?: number
  cellGap?: number
  padding?: VoronoiChartProps['padding']
}
type VoronoiContext = {
  delta: Delta | null
  transitioning: string | null
  selectedIndex: number | null
}
type VoronoiDrawFn = (
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  data: VoronoiDatum[],
  { width, height }: Dimensions,
  options?: VoronoiOptions
) => any

const drawVoronoi: VoronoiDrawFn = (svg, originalData, { width = 0, height = 0 }, options = {}) => {
  const mergedPadding = { padding: { ...DEFAULT_PADDING, ...options.padding } }
  const opts = { offset: 50, transitionDuration: 550, cellGap: 32, ...options, ...mergedPadding }

  const zoomScale = d3.scaleLinear().domain([-30, 60]).clamp(true).range([-0.6, 1.2])
  const pushScale = d3
    .scalePow()
    .domain([0, Math.hypot(width, height)])
    .range([opts.offset, 0])

  const update = (currentData: VoronoiDatum[], ctx: VoronoiContext) => {
    const animate = (name: string, animateContext: VoronoiContext) => {
      const { delta } = animateContext
      if (delta) {
        d3.transition(name)
          .duration(opts.transitionDuration)
          .tween('tween-' + name, (d) => {
            return (tweenValue) => {
              const tweenDelta = delta.map((d) => ({ x: d.x * tweenValue, y: d.y * tweenValue }))
              const tweenData = d3
                .zip<VoronoiDatum>(currentData, tweenDelta as VoronoiDatum[])
                .map(([d, delta]) => ({ ...d, x: d.x + delta.x, y: d.y + delta.y }))

              update(tweenData, { ...animateContext, delta: tweenDelta, transitioning: tweenValue < 1 ? name : null })
            }
          })
      }
    }

    const zoomCell = (index: number, deltaY: number) => {
      const newDelta = createDelta(index, currentData, (scalar) => scalar * zoomScale(deltaY))
      animate('zoom', { ...ctx, delta: newDelta, selectedIndex: index })
    }

    const highlightCell = (index: number) => {
      // console.log('highlight', index)
      d3.selectAll(`.base-layer path.cell-gap`)
        .transition('highlight-fill-opacity')
        .duration(450)
        .style('fill-opacity', (d: any) => (d?.index === index ? 0 : 0.9))

      const newDelta = createDelta(index, currentData, pushScale)
      const restoreDelta = d3
        .zip(currentData, originalData)
        .map(([curr, original]) => ({ x: curr.x - original.x, y: curr.y - original.y }))

      const delta = d3
        .zip(newDelta, restoreDelta)
        .map(([fresh, restore]) => ({ x: fresh.x - restore.x, y: fresh.y - restore.y }))

      animate('highlight', { ...ctx, delta, selectedIndex: index })
    }

    const delaunay = d3.Delaunay.from(
      currentData,
      (d) => d.x,
      (d) => d.y
    )

    const voronoi = delaunay.voronoi([
      Number(opts.padding.left) - opts.cellGap / 2,
      Number(opts.padding.top) - opts.cellGap / 2,
      width - Number(opts.padding.left) + opts.cellGap / 2,
      height - Number(opts.padding.left) + opts.cellGap / 2
    ])

    const currentDataWithPaths: EnrichedDatum[] = currentData.map((d, idx) => ({
      ...d,
      path: voronoi.renderCell(idx),
      index: idx
    }))

    const defs = svg
      .select('defs')
      .selectAll('clipPath')
      .data(currentDataWithPaths)
      .join('clipPath')
      .attr('id', (d) => `clip-${d.index}`)

    defs
      .selectAll('path')
      .data((d) => [d])
      .join('path')
      .attr('fill', 'none')
      .attr('d', (d) => d.path)
      .attr('stroke-linejoin', 'round')

    const baseLayer = svg.select('g.base-layer')
    const definitionLayer = svg.select('g.definition-layer')
    const contentLayer = svg.select('g.content-layer')

    const baseLayerCell = baseLayer
      .selectAll('g.cell')
      .data(currentDataWithPaths)
      .join('g')
      .attr('class', (d, idx) => 'cell cell-' + idx)

    const definitionLayerCell = definitionLayer
      .selectAll('g.cell')
      .data(currentDataWithPaths)
      .join('g')
      .attr('class', (d, idx) => 'cell cell-' + idx)

    const contentLayerCell = contentLayer
      .selectAll('g.cell')
      .data(currentDataWithPaths)
      .join('g')
      .attr('class', (d, idx) => 'cell cell-' + idx)

    baseLayerCell
      .selectAll('image')
      .data((d) => [d])
      .join('image')
      .attr('xlink:href', (d) => d.imageUrl)
      .attr('x', (d) => d.x - 300)
      .attr('y', (d) => d.y - 300)
      .attr('width', 600)
      .attr('height', 600)
      .attr('preserveAspectRatio', 'xMidYMid slice')
      .attr('clip-path', (d) => `url(#clip-${d.index})`)

    baseLayerCell
      .selectAll('path.cell-gap')
      .data((d) => [d])
      .join('path')
      .attr('d', (d) => d.path)
      .classed('cell-gap stroke-current text-bg-primary', true)
      .attr('stroke-width', opts.cellGap)
      .attr('fill', (d) => 'url(#diagonalHatch)')
      .attr('fill-opacity', 0.9)
      .on('mouseenter', function (e: MouseEvent, d) {
        if (ctx.transitioning === 'zoom' || svg.node()?.contains(document.activeElement)) {
          return
        }
        if (typeof d.index === 'number' && d.index !== ctx.selectedIndex) {
          // console.log('mousemove', ctx.selectedIndex, '-->', index)
          highlightCell(d.index)
        }
      })

    definitionLayerCell
      .selectAll('path.definition')
      .data((d) => [d])
      .join('path')
      .attr('d', (d) => d.path)
      .attr('stroke-width', '1')
      .attr('stroke-opacity', 0.1)
      .classed('definition stroke-current text-brand', true)

    definitionLayer
      .selectAll('path.bounds')
      .data([voronoi.renderBounds()])
      .join('path')
      .attr('d', (d) => d)
      .attr('stroke-width', '2')
      .classed('bounds stroke-current text-bg-primary', true)

    const circles = contentLayerCell
      .selectAll('circle')
      .data((d) => [d])
      .join('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', 8)
      .classed('fill-current text-brand', true)
      .attr('tabindex', (d) => 10 + d.index)

    if (ctx.transitioning !== 'highlight') {
      circles.on('focus', function (e: FocusEvent<SVGElement>) {
        const datum = d3.select<SVGElement, EnrichedDatum>(e.target).datum()
        // console.log('focus', datum.index)
        highlightCell(datum.index)
      })
    }

    if (ctx.transitioning !== 'highlight') {
      svg.on('wheel', (e) => {
        const index = e?.target ? d3.select<SVGElement, EnrichedDatum>(e.target).datum()?.index : null
        const deltaY = e?.deltaY
        // console.log('wheel', index, 'deltaY', deltaY)
        if (typeof index === 'number' && typeof deltaY === 'number') {
          zoomCell(index, deltaY)
        }
      })
    }

    contentLayerCell
      .selectAll('text')
      .data((d) => [d])
      .join('text')
      .attr('x', (d) => d.x + 16)
      .attr('y', (d) => d.y - 18)
      .text((d) => d.title)
      .style('text-anchor', 'middle')
      .classed('fill-current text-xl xl:text-2xl text-primary font-semibold', true)
  }

  update(originalData, { selectedIndex: null, delta: null, transitioning: null })
}

const createDelta = (index: number, data: Position[], transformScalar: (scalar: number) => number): Delta => {
  const { x, y } = data[index]
  return data.map((point, idx) => {
    const alpha = Math.atan2(point.y - y, point.x - x)
    const hyp = transformScalar(Math.hypot(point.y - y, point.x - x))
    return idx !== index
      ? {
          x: Math.cos(alpha) * hyp,
          y: Math.sin(alpha) * hyp
        }
      : { x: 0, y: 0 }
  })
}

export const highlightCells = (projects: StrapiProject[]): MouseEventHandler => {
  return () => {
    const projectIds = projects?.map((p) => p?.id)
    const cells = d3.selectAll<SVGGElement, EnrichedDatum>('.base-layer .cell')

    cells.each(function (d) {
      const group = d3.select(this)
      const cellPath = group.select('.cell-gap')

      const shouldHighlight = !!projectIds?.includes(d.id)
      const highlightChanged = group.classed('highlighted') !== shouldHighlight
      if (highlightChanged) {
        cellPath
          .transition()
          .duration(450)
          .style('fill-opacity', 0)
          .on('end', () => cellPath.remove())
        console.log.apply(`url(#diagonalHatchHighlight-${d.color})`)
        const cloneCell = cellPath
          .clone()
          .style('fill', shouldHighlight ? `url(#diagonalHatchHighlight-${d.color})` : 'url(#diagonalHatch)')
          .style('fill-opacity', 0)
          .transition()
          .duration(450)
          .style('fill-opacity', 1)

        group.append(() => cloneCell.node())
      }
      group.classed('highlighted', shouldHighlight)
    })
  }
}
