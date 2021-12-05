import { useDebounceCallback } from '@react-hook/debounce'
import * as d3 from 'd3'
import React, { FC, FocusEvent, MouseEvent, useEffect, useRef } from 'react'

import {
  Dimensions,
  EnrichedDatum,
  initializeVoronoiHelpers,
  VoronoiContext,
  VoronoiDatum,
  VoronoiOptions
} from './helpers'

export type VoronoiChartProps = {
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
        <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
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

type VoronoiDrawFn = (
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  data: VoronoiDatum[],
  { width, height }: Dimensions,
  options?: Partial<VoronoiOptions>
) => any

const drawVoronoi: VoronoiDrawFn = (svg, originalData, { width = 0, height = 0 }, options = {}) => {
  const mergedPadding = { padding: { ...DEFAULT_PADDING, ...options.padding } }
  const opts = { offset: 50, transitionDuration: 550, cellGap: 32, ...options, ...mergedPadding }
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

    const { restore, selectCell, zoomCell, exposeCell } = initializeVoronoiHelpers(
      currentData,
      originalData,
      { width, height },
      opts,
      ctx,
      update
    )

    svg.on('mouseleave', () => restore())

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

    const baseLayerCell = baseLayer.selectAll('g.cell').data(currentData).join('g').classed('cell', true)

    const definitionLayerCell = definitionLayer.selectAll('g.cell').data(currentData).join('g').classed('cell', true)

    const contentLayerCell = contentLayer
      .selectAll('g.cell')
      .data(currentData)
      .join('g')
      .classed('cell', true)
      .on('click', function (e: MouseEvent, d) {
        if (ctx.transitioning === 'select') {
          return
        }
        console.log('click')
        if (typeof d.index === 'number') {
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
      .attr('preserveAspectRatio', 'xMidYMid meet')
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

    baseLayerCell
      .selectAll('path.highlight-pattern')
      .data((d) => [d])
      .join('path')
      .attr('d', (d) => d.path)
      .classed('highlight-pattern stroke-current text-bg-primary', true)
      .attr('stroke-width', opts.cellGap)
      .attr('fill-opacity', 0)

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
          ctx.locked ||
          ctx.transitioning === 'expose' ||
          ctx.transitioning === 'zoom' ||
          svg.node()?.contains(document.activeElement)
        ) {
          return
        }
        if (typeof d.index === 'number' && d.index !== ctx.selectedIndex) {
          console.log(ctx.locked, 'mouseenter')
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

  update(originalData, { selectedIndex: null, delta: [], transitioning: null, locked: false })
}
