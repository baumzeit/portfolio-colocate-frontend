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
          offset: Math.min(width, height) * 0.1,
          padding: { ...DEFAULT_PADDING, ...padding },
          transitionDuration: 450,
          cellGap: 32,
          imageSize: 600
        }
      )
    }
  }, [updateGraphDebounce, data, width, height, padding])

  return (
    <svg id="voronoiSvg" ref={svgRef} width={width} height={height} className="cursor-pointer">
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
  options: VoronoiOptions
) => any

const drawVoronoi: VoronoiDrawFn = (svg, originalData, { width = 0, height = 0 }, opts) => {
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

    // svg.on('mouseleave', () => restore())

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
      .classed('cell', true)
      .attr('clip-path', (d) => `url(#clip-${d.index})`)

    const definitionLayerCell = definitionLayer.selectAll('g.cell').data(currentData).join('g').classed('cell', true)

    const contentLayerCell = contentLayer.selectAll('g.cell').data(currentData).join('g').classed('cell', true)

    baseLayerCell
      .selectAll('foreignObject.image')
      .data((d) => [d])
      .join('foreignObject')
      .classed('image', true)
      .attr('x', (d) => d.x - opts.imageSize / 2)
      .attr('y', (d) => d.y - opts.imageSize / 2)
      .attr('width', opts.imageSize)
      .attr('height', opts.imageSize)
      .attr('transform-origin', 'right')
      .style('transform-box', 'fill-box')
      .selectAll('img')
      .data((d) => [d])
      .join('xhtml:img')
      .attr('xmlns', 'http://www.w3.org/1999/xhtml')
      .attr('srcSet', (d) => d.imageUrl)
      .style('width', '100%')
      .style('height', '100%')
      .style('object-fit', 'contain')
      .style('object-position', 'center')

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
          (ctx.viewState === 'hover' || !ctx.viewState) &&
          ctx.transitioning !== 'expose' &&
          ctx.transitioning !== 'zoom' &&
          d.index !== ctx.selectedIndex &&
          !svg.node()!.contains(document.activeElement)
        ) {
          console.log('mouseenter')
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

    if (ctx.transitioning !== 'hover') {
      circles.on('focus', function (e: FocusEvent<SVGElement>) {
        const datum = d3.select<SVGElement, EnrichedDatum>(e.target).datum()
        if (ctx.viewState === 'expose') {
          exposeCell(datum.index)
        } else {
          selectCell(datum.index)
        }
      })
    }

    // if (ctx.transitioning !== 'hover') {
    //   svg.on('wheel', (e) => {
    //     const index = e?.target ? d3.select<SVGElement, EnrichedDatum>(e.target).datum()?.index : null
    //     const deltaY = e?.deltaY
    //     // console.log('wheel', index, 'deltaY', deltaY)
    //     if (typeof index === 'number' && typeof deltaY === 'number') {
    //       zoomCell(index, deltaY)
    //     }
    //   })
    // }

    svg.on('click', function (e: MouseEvent) {
      console.log('click')
      if (!(ctx.viewState !== 'expose' && ctx.transitioning === 'expose')) {
        const index = d3.select<any, EnrichedDatum>(e.target).datum().index
        if (typeof index === 'number') {
          console.log('expose')
          exposeCell(index)
        }
      }
    })

    contentLayerCell
      .selectAll('text.label')
      .data((d) => [d])
      .join('text')
      .attr('x', (d) => d.x + 16)
      .attr('y', (d) => d.y - 18)
      .text((d) => d.title || '')
      .style('text-anchor', 'middle')
      .classed('label fill-current text-xl xl:text-2xl text-primary font-semibold', true)

    d3.selectAll('.cell foreignObject.description').remove()
    d3.selectAll('.cell foreignObject.image').style('transform', null)
    d3.selectAll('.cell .label').style('transform', null)
    if (
      (ctx.transitioning === 'zoom' || !ctx.transitioning) &&
      ctx.viewState === 'expose' &&
      typeof ctx.selectedIndex === 'number'
    ) {
      const index = ctx.selectedIndex
      const contentCell = contentLayerCell.filter((d) => d.index === index)
      const baseCell = baseLayerCell.filter((d) => d.index === index)
      const definitionCell = definitionLayerCell.filter((d) => d.index === index)

      const columnGap = 30

      baseCell
        .select('foreignObject.image')
        .transition()
        .style('transform', `translate(-${opts.imageSize / 2 + columnGap}px, -${opts.imageSize / 6}px) scale(0.75)`)

      contentCell
        .select('text.label')
        .transition()
        .style('transform', function () {
          const textWidth = d3.select(this).node()?.getBoundingClientRect().width
          return `translate(${textWidth / 2 - 16}px, ${-opts.imageSize / 3}px)`
        })

      const fo = contentCell
        .selectAll('foreignObject.description')
        .data((d) => [d])
        .join('foreignObject')
        .attr('x', (d) => d.x)
        .attr('y', (d) => d.y - opts.imageSize / 3)
        .attr('width', width / 5)
        .classed('description', true)

      const div = fo
        .selectAll('.content')
        .data((d) => [d])
        .join('xhtml:div')
        .classed('content rounded text-highlight shadow-xl animate-fadeIn', true)
        .html((d) => d.description || '')

      const foHeight = div.node()?.getBoundingClientRect().height

      fo.attr('height', foHeight)
    }
  }

  update(originalData, { selectedIndex: null, delta: [], transitioning: null, locked: false, viewState: null })
}
