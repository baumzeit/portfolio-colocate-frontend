import * as d3 from 'd3'
import { useDebounceCallback } from '@react-hook/debounce'
import React, { FocusEvent, MouseEvent, useEffect, useMemo, useRef } from 'react'
import useSize from '@react-hook/size'

type VoronoiDatum = { x: number; y: number; title: string; imageUrl: string; id: string | number }
type VoronoiChartSvgProps = {
  data: VoronoiDatum[]
  padding?: {
    top?: number
    right?: number
    bottom?: number
    left?: number
  }
}

export const VoronoiChartSvg = ({ data: unscaledData, padding }: VoronoiChartSvgProps) => {
  const chartRef = useRef(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [width, height] = useSize(chartRef)

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
    <div ref={chartRef} className="h-full w-full">
      <svg ref={svgRef} width={width} height={height}>
        <defs>
          <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)" width="4" height="4">
            <path
              d="M-1,1 l2,-2
           M0,4 l4,-4
           M3,5 l2,-2"
              className="stroke-current text-bg-secondary stroke-1"
            />
          </pattern>
        </defs>
        <g className="base-layer"></g>
        <g className="definition-layer"></g>
        <g className="content-layer"></g>
      </svg>
    </div>
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

type EnrichedDatum = VoronoiDatum & {
  path: string
  index: number
}

type Dimensions = { width: number; height: number }
type VoronoiOptions = {
  offset?: number
  transitionDuration?: number
  cellGap?: number
  padding?: VoronoiChartSvgProps['padding']
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

  const update = (data: VoronoiDatum[], ctx: VoronoiContext) => {
    const currentData = ctx.delta
      ? d3
          .zip<VoronoiDatum>(data, ctx.delta as VoronoiDatum[])
          .map(([d, delta]) => ({ ...d, x: d.x + delta.x, y: d.y + delta.y }))
      : data

    const animate = (name: string, animateContext: VoronoiContext) => {
      if (animateContext.delta) {
        d3.transition()
          .duration(opts.transitionDuration)
          .tween(name, (d) => {
            return (tweenValue) => {
              const tweenDelta = animateContext.delta.map((d) => ({ x: d.x * tweenValue, y: d.y * tweenValue }))
              update(currentData, { ...animateContext, delta: tweenDelta, transitioning: tweenValue < 1 ? name : null })
            }
          })
      }
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

    const zoomCell = (index: number, deltaY: number) => {
      const newDelta = createDelta(index, currentData, (scalar) => scalar * zoomScale(deltaY))
      animate('zoom', { ...ctx, delta: newDelta, selectedIndex: index })
    }

    svg.on('wheel', (e) => {
      const index = e?.target ? d3.select<SVGElement, EnrichedDatum>(e.target).datum()?.index : null
      const deltaY = e?.deltaY
      // console.log('wheel', index, 'deltaY', deltaY)
      if (typeof index === 'number' && typeof deltaY === 'number') {
        zoomCell(index, deltaY)
      }
    })

    const highlightCell = (index: number) => {
      console.log('highlight', index)

      d3.selectAll('.base-layer .cell').each(function (d, idx) {
        d3.select(this)
          .attr('fill', `url(#diagonalHatch)`)
          .transition()
          .duration(450)
          .attr('fill-opacity', idx === index ? 0 : 0.5)
      })

      const newDelta = createDelta(index, currentData, pushScale)
      const restoreDelta = d3
        .zip(currentData, originalData)
        .map(([curr, original]) => ({ x: curr.x - original.x, y: curr.y - original.y }))

      const delta = d3
        .zip(newDelta, restoreDelta)
        .map(([fresh, restore]) => ({ x: fresh.x - restore.x, y: fresh.y - restore.y }))

      animate('highlight', { ...ctx, delta, selectedIndex: index })
    }

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

    definitionLayerCell
      .selectAll('path.definition')
      .data((d) => [d])
      .join('path')
      .attr('d', (d) => d.path)
      .attr('stroke-width', '1')
      .attr('stroke-opacity', 0.1)
      .classed('definition stroke-current text-brand', true)
      .attr('fill', 'transparent')
      .on('mousemove', function (e: MouseEvent) {
        if (svg.node()?.contains(document.activeElement) || ctx.transitioning === 'zoom') {
          return
        }
        const index = d3.select<any, EnrichedDatum>(e.target).datum()?.index

        if (index !== ctx.selectedIndex && typeof index === 'number') {
          console.log('mousemove', ctx.selectedIndex, '-->', index)
          highlightCell(index)
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
      .attr('stroke', '#aaa')
      .attr('stroke-width', 0.5)
      .classed('fill-current text-brand opacity-90', true)
      .attr('tabindex', (d) => 10 + d.index)

    circles.on('focus', function (e: FocusEvent<SVGElement>) {
      const datum = d3.select<SVGElement, EnrichedDatum>(e.target).datum()
      console.log('focus', datum.index)
      highlightCell(datum.index)
    })

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
