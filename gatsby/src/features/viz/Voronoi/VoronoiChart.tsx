import { useDebounceCallback } from '@react-hook/debounce'
import * as d3 from 'd3'
import { rest } from 'lodash'
import React, { FC, FocusEvent, MouseEvent, MouseEventHandler, useEffect, useRef } from 'react'

type VoronoiDatum = {
  x: number
  y: number
  imageUrl: string
  id: number | null | undefined
  title: string | null | undefined
  fields: {
    color?: string | null | undefined
    name?: string | null | undefined
    id?: number | null | undefined
  }[]
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

export const VoronoiChart: FC<VoronoiChartProps> = ({ data, padding, width, height, children }) => {
  const svgRef = useRef<SVGSVGElement>(null)

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
          offset: Math.min(width, height) * 0.25,
          padding
        }
      )
    }
  }, [updateGraphDebounce, data, width, height, padding])

  return (
    <svg id="voronoiSvg" ref={svgRef} width={width} height={height}>
      <defs>
        <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" patternTransform="scale(1)" width="4" height="4">
          <path
            d="M-1,1 l2,-2
           M0,4 l4,-4
           M3,5 l2,-2"
            className="stroke-current stroke-1 text-bg-secondary"
          />
        </pattern>
        {children}
      </defs>
      <g className="base-layer"></g>
      <g className="definition-layer"></g>
      <g className="content-layer"></g>
    </svg>
  )
}

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
  delta: Delta
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

  const zoomScale = d3.scaleLinear().domain([-20, 40]).clamp(true).range([-0.6, 1.2])
  const pushScale = d3
    .scalePow()
    .domain([0, Math.hypot(width, height)])
    .clamp(true)
    .range([opts.offset, 0])
  const exposePushScale = d3
    .scalePow()
    .domain([0, Math.hypot(width, height) / 2])
    .range([Math.min(width, height) / 2, 0])

  console.log('originalData', originalData)

  const update = (data: VoronoiDatum[], ctx: VoronoiContext) => {
    const delaunay = d3.Delaunay.from(
      data,
      (d) => d.x,
      (d) => d.y
    )

    const voronoi = delaunay.voronoi([
      Number(opts.padding.left) - opts.cellGap / 2,
      Number(opts.padding.top) - opts.cellGap / 2,
      width - Number(opts.padding.left) + opts.cellGap / 2,
      height - Number(opts.padding.left) + opts.cellGap / 2
    ])

    const currentData: EnrichedDatum[] = data.map((d, idx) => ({
      ...d,
      path: voronoi.renderCell(idx),
      index: idx
    }))

    const animate = (name: string, animateContext: VoronoiContext) => {
      const { delta } = animateContext
      const transition = d3
        .transition(name)
        .duration(opts.transitionDuration)
        .tween('tween-' + name, function (d) {
          return (tweenValue) => {
            const tweenDelta = delta.map((d) => ({ x: d.x * tweenValue, y: d.y * tweenValue }))
            const tweenData = d3
              .zip<EnrichedDatum>(currentData, tweenDelta as EnrichedDatum[])
              .map(([d, delta]) => ({ ...d, x: d.x + delta.x, y: d.y + delta.y }))
            update(tweenData, {
              ...animateContext,
              delta: tweenDelta,
              transitioning: tweenValue < 1 ? name : null
            })
          }
        })
      return {
        finalState: d3
          .zip<EnrichedDatum>(currentData, delta)
          .map(([d, delta]) => ({ ...d, x: d.x + delta.x, y: d.y + delta.y })),
        transition
      }
    }

    const zoomCell = (index: number, deltaY: number) => {
      const newDelta = createDeltaPush(index, currentData, (scalar) => scalar * zoomScale(deltaY))
      animate('zoom', { ...ctx, delta: newDelta, selectedIndex: index })
    }

    const selectCell = (
      index: number,
      options: { scale?: (val: any) => number; restoreData?: EnrichedDatum[] } = {}
    ) => {
      console.log('select cell')
      const { scale = pushScale, restoreData = [...originalData] } = options
      d3.selectAll<SVGPathElement, EnrichedDatum>(`.pattern`)
        .classed('hover-selected', (d) => d.index === index)
        .transition()
        .duration(450)
        .style('fill-opacity', (d) => (d.index === index ? 0 : 0.9))

      const newDelta = createDeltaPush(index, currentData, scale)
      const restoreDelta = d3
        .zip(currentData, restoreData)
        .map(([curr, original]) => ({ x: curr.x - original.x, y: curr.y - original.y }))

      const delta = d3
        .zip(newDelta, restoreDelta)
        .map(([fresh, restore]) => ({ x: fresh.x - restore.x, y: fresh.y - restore.y }))
      return animate('select', { ...ctx, delta, selectedIndex: index })
    }

    const exposeCell = (index: number) => {
      d3.selectAll<SVGPathElement, EnrichedDatum>(`.pattern`)
        .classed('hover-selected', (d) => d.index === index)
        .transition()
        .duration(450)
        .style('fill-opacity', (d) => (d.index === index ? 0 : 0.9))

      // console.log('simulate')
      // d3.forceSimulation().nodes(
      //   currentData.map((d) => (d.index === index ? { ...d, fx: width / 2, fy: height / 2 } : d))
      // )

      // const unitAngle = (2 * Math.PI) / (currentData.length - 1)
      // const center = { x: width / 2, y: height / 2 }
      // const exposeDelta = currentData.map((point, idx) => {
      //   return idx === index
      //     ? { x: center.x - point.x, y: center.y - point.y }
      //     : {
      //         x: (Math.cos(unitAngle * idx) * width) / 3 + center.x - point.x,
      //         y: (Math.sin(unitAngle * idx) * height) / 3 + center.y - point.y
      //       }
      // })
      const exposeDelta = currentData.map((point, idx) => {
        return idx === index ? { x: width / 2 - point.x, y: height / 2 - point.y } : { x: 0, y: 0 }
      })

      const { finalState } = animate('expose', { ...ctx, delta: exposeDelta, selectedIndex: index })
      selectCell(index, { restoreData: finalState, scale: exposePushScale })
    }

    const defs = svg
      .select('defs')
      .selectAll('clipPath')
      .data(currentData)
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
      .data(currentData)
      .join('g')
      .attr('class', (d, idx) => `cell cell-${idx}`)

    const definitionLayerCell = definitionLayer
      .selectAll('g.cell')
      .data(currentData)
      .join('g')
      .attr('class', (d, idx) => 'cell cell-' + idx)

    const contentLayerCell = contentLayer
      .selectAll('g.cell')
      .data(currentData)
      .join('g')
      .attr('class', (d, idx) => 'cell cell-' + idx)
      .on('click', function (e: MouseEvent, d) {
        if (ctx.transitioning === 'select') {
          return
        }
        console.log('click')
        if (typeof d.index === 'number' && d.index === ctx.selectedIndex) {
          console.log('expose')
          exposeCell(d.index)
        }
      })

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
      .classed('cell-gap pattern stroke-current text-bg-primary', true)
      .attr('stroke-width', opts.cellGap)
      .attr('fill', (d) => 'url(#diagonalHatch)')
      .attr('fill-opacity', 0.9)

    definitionLayerCell
      .selectAll('path.definition')
      .data((d) => [d])
      .join('path')
      .attr('d', (d) => d.path)
      .attr('stroke-width', '1')
      .attr('stroke-opacity', 0.1)
      .attr('fill', 'transparent')
      .classed('definition stroke-current text-brand', true)
      .on('mouseenter', function (e: MouseEvent, d) {
        if (
          ctx.transitioning === 'expose' ||
          ctx.transitioning === 'zoom' ||
          svg.node()?.contains(document.activeElement)
        ) {
          return
        }
        if (typeof d.index === 'number' && d.index !== ctx.selectedIndex) {
          selectCell(d.index)
        }
      })

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

    if (ctx.transitioning !== 'select') {
      circles.on('focus', function (e: FocusEvent<SVGElement>) {
        const datum = d3.select<SVGElement, EnrichedDatum>(e.target).datum()
        // console.log('focus', datum.index)
        selectCell(datum.index)
      })
    }

    if (ctx.transitioning !== 'select') {
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
      .text((d) => d.title || '')
      .style('text-anchor', 'middle')
      .classed('fill-current text-xl xl:text-2xl text-primary font-semibold', true)
  }

  update(originalData, { selectedIndex: null, delta: [], transitioning: null })
}

const createDeltaPush = (index: number, data: Position[], transformScalar: (scalar: number) => number): Delta => {
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

export const highlightCellsByFieldId = (highlightFieldId: number | null | undefined) => {
  d3.selectAll<SVGGElement, EnrichedDatum>('.pattern').each(function (d) {
    const group = d3.select(this.parentElement)
    const cellPath = group.select('.pattern')
    const shouldHighlight = Boolean(d.fields.find((field) => field.id === highlightFieldId))
    cellPath
      .transition()
      .duration(450)
      .style('fill-opacity', 0)
      .on('end', () => cellPath.remove())

    cellPath
      .clone()
      .style('fill', shouldHighlight ? `url(#diagonalHatchHighlight-${highlightFieldId})` : 'url(#diagonalHatch)')
      .style('fill-opacity', 0)
      .classed('field-highlight', shouldHighlight)
      .transition()
      .duration(450)
      .style('fill-opacity', function (d) {
        return d3.select(this).classed('hover-selected') ? 0 : 1
      })
  })
}