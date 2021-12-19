import { useDebounceCallback } from '@react-hook/debounce'
import * as d3 from 'd3'
import React, { FC, FocusEvent, KeyboardEvent, MouseEvent, useEffect, useRef } from 'react'

import {
  calculateModel,
  Dimensions,
  EnrichedDatum,
  initializeVoronoiActions,
  SetModalFn as SetModalData,
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
  options?: Partial<VoronoiOptions>
  setModalData: SetModalData
  modalData: EnrichedDatum
}

export const VoronoiChart: FC<VoronoiChartProps> = ({
  data,
  padding,
  width,
  height,
  options,
  setModalData,
  modalData,
  children
}) => {
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
          imageSize: 500,
          ...options
        },
        setModalData,
        modalData
      )
    }
  }, [updateGraphDebounce, data, width, height, padding, options, modalData, setModalData])

  return (
    <svg id="voronoiSvg" ref={svgRef} width={width} height={height} className="cursor-pointer">
      <defs>
        <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
          <path
            d="M-1,1 l2,-2
           M0,4 l4,-4
           M3,5 l2,-2"
            className="stroke-current stroke-1 opacity-80 text-bg-secondary"
          />
        </pattern>
        {children}
      </defs>
      <g className="image-layer"></g>
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
  options: VoronoiOptions,
  setModal: SetModalData,
  modalData: EnrichedDatum
) => any

const drawVoronoi: VoronoiDrawFn = (svg, originalData, { width = 0, height = 0 }, opts, setModalData, modalData) => {
  console.log('originalData', originalData)

  const bounds = [
    Number(opts.padding.left) - opts.cellGap / 2,
    Number(opts.padding.top) - opts.cellGap / 2,
    width - Number(opts.padding.left) + opts.cellGap / 2,
    height - Number(opts.padding.left) + opts.cellGap / 2
  ]
  const enterDuration = 250
  const updateDuration = 250
  const exitDuration = 250
  const fadeIn = (sel: d3.Selection<SVGGElement, EnrichedDatum, any, unknown>) =>
    sel.style('opacity', 0).transition().duration(enterDuration).style('opacity', 1)
  const fadeOut = (sel: d3.Selection<SVGGElement, EnrichedDatum, any, unknown>) =>
    sel.transition().duration(exitDuration).style('opacity', 0).remove()

  const update = (data: VoronoiDatum[], { initial = false } = {}) => {
    const { voronoi } = calculateModel(data, bounds)

    const currentData: EnrichedDatum[] = data.map((d, idx) => ({
      ...d,
      path: voronoi.renderCell(idx),
      id: String(d.id)
    }))

    const { restore, selectCell, exposeCell } = initializeVoronoiActions(
      currentData,
      originalData,
      { width, height },
      opts,
      update,
      setModalData
    )

    if (!initial && !modalData) {
      exposeCell(null)
      return
    }

    svg
      .select('defs')
      .selectAll<d3.BaseType, EnrichedDatum>('clipPath')
      .data(currentData, (d) => String(d.id))
      .join(
        (enter) => {
          const defG = enter.append('g').classed('cell defs-cell', true)
          defG
            .append('clipPath')
            .attr('id', (d) => `clip-${d.id}`)
            .append('path')
            .attr('d', (d) => d.path)
            .style('transform-origin', 'center')
            .style('transform-box', 'fill-box')
          return defG
        },
        (update) => update.select('clipPath path').attr('d', (d) => d.path),
        (exit) => exit.transition().delay(exitDuration)
      )

    const baseLayer = svg.select('g.base-layer')
    const imageLayer = svg.select('g.image-layer')
    const definitionLayer = svg.select('g.definition-layer')
    const contentLayer = svg.select('g.content-layer')

    const imageLayerCell = imageLayer
      .selectAll<SVGGElement, EnrichedDatum>('.cell')
      .data(currentData, (d) => String(d.id))
      .join(
        (enter) => {
          const imageG = enter
            .append('g')
            .classed('cell image-cell', true)
            .call(fadeIn)
            .attr('clip-path', (d) => `url(#clip-${d.id})`)

          imageG
            .append('foreignObject')
            .classed('image', true)
            .attr('x', (d) => d.x - opts.imageSize / 2)
            .attr('y', (d) => d.y - opts.imageSize / 2)
            .attr('width', opts.imageSize)
            .attr('height', opts.imageSize)
            .attr('transform-origin', 'right')
            .style('transform-box', 'fill-box')
            .append('xhtml:img')
            .attr('xmlns', 'http://www.w3.org/1999/xhtml')
            .attr('srcSet', (d) => d.imageUrl)
            .style('width', '100%')
            .style('height', '100%')
            .style('object-fit', 'contain')
            .style('object-position', 'center')
          // .attr('fill', (d) => `url(#diagonalHatchHighlight-${d.fields[0].id})`)
          return imageG
        },
        (update) => {
          const transition = update.transition().duration(updateDuration)
          transition
            .select('foreignObject.image')
            .attr('x', (d) => d.x - opts.imageSize / 2)
            .attr('y', (d) => d.y - opts.imageSize / 2)
            .attr('width', opts.imageSize)
            .attr('height', opts.imageSize)
          return update
        },
        fadeOut
      )

    const baseLayerCell = baseLayer
      .selectAll<SVGGElement, EnrichedDatum>('.cell')
      .data(currentData, (d) => String(d.id))
      .join(
        (enter) => {
          const baseG = enter.append('g').classed('cell base-cell', true).call(fadeIn)
          baseG
            .append('path')
            .attr('d', (d) => d.path)
            .classed('cell-gap pattern stroke-current text-bg-primary', true)
            .attr('stroke-width', opts.cellGap)
            .attr('fill', 'url(#diagonalHatch)')
            .attr('fill-opacity', 0.9)
          baseG
            .append('path')
            .attr('d', (d) => d.path)
            .classed('highlight-pattern stroke-current text-bg-primary', true)
            .attr('stroke-width', opts.cellGap)
            .attr('fill-opacity', 0)
          // .attr('fill', (d) => `url(#diagonalHatchHighlight-${d.fields[0].id})`)
          return baseG
        },
        (update) => {
          const transition = update.transition().duration(updateDuration)
          transition.select('path.cell-gap').attr('d', (d) => d.path)
          transition.select('path.highlight-pattern').attr('d', (d) => d.path)

          return update
        },
        fadeOut
      )

    const definitionLayerCell = definitionLayer
      .selectAll<SVGGElement, EnrichedDatum>('.cell')
      .data(currentData, (d) => String(d.id))
      .join(
        (enter) => {
          const definitionG = enter.append('g').classed('cell definition-cell', true).call(fadeIn)

          definitionG
            .append('path')
            .attr('d', (d) => d.path)
            .attr('stroke-width', '1')
            .attr('stroke-opacity', 0.1)
            .attr('fill', 'transparent')
            .classed('cell-border stroke-current text-brand', true)

          return definitionG
        },
        (update) => {
          const transition = update.transition().duration(updateDuration)
          transition.select('path.cell-border').attr('d', (d) => d.path)
          return update
        },
        fadeOut
      )

    definitionLayer
      .selectAll<SVGPathElement, EnrichedDatum>('path.cell-border')
      .on('mouseenter', function (e: MouseEvent, d) {
        if (d3.selectAll('.cell.exposed').empty() && !svg.node()!.contains(document.activeElement)) {
          selectCell(d.id)
        }
      })

    svg
      .selectAll('path.bounds')
      .data([voronoi.renderBounds()])
      .join('path')
      .attr('d', (d) => d)
      .attr('stroke-width', '2')
      .classed('bounds stroke-current text-bg-primary', true)

    const contentLayerCell = contentLayer
      .selectAll<SVGGElement, EnrichedDatum>('.cell')
      .data(currentData, (d) => String(d.id))
      .join(
        (enter) => {
          const contentG = enter.append('g').classed('cell content-cell', true).call(fadeIn)

          contentG
            .append('circle')
            .attr('cx', (d) => d.x)
            .attr('cy', (d) => d.y)
            .attr('r', 8)
            .classed('fill-current text-brand', true)
            .attr('tabindex', (d) => 10 + d.id)

          contentG
            .append('text')
            .attr('x', (d) => d.x)
            .attr('y', (d) => d.y - 18)
            .text((d) => d.title || '')
            .style('text-anchor', 'middle')
            .classed('label fill-current text-xl xl:text-2xl text-primary font-semibold', true)
          return contentG
        },
        (update) => {
          const transition = update.transition().duration(updateDuration)
          transition
            .select('circle')
            .attr('cx', (d) => d.x)
            .attr('cy', (d) => d.y)
          transition
            .select('text.label')
            .attr('x', (d) => d.x + 16)
            .attr('y', (d) => d.y - 18)
          return transition
        },
        fadeOut
      )

    svg.on('mouseleave', () => {
      // restore()
      // exposeCell(null)
    })
    svg.on('keyup', (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        const activeElement = d3.select(document.activeElement)
        const activeElementId = activeElement?.datum()?.id
        if (activeElementId) {
          exposeCell(activeElementId)
        }
      }
    })

    contentLayerCell.selectAll('circle').on('focus', function (e: FocusEvent<SVGElement>) {
      const datum = d3.select<SVGElement, EnrichedDatum>(e.target).datum()
      if (!contentLayer.selectAll('.exposed').empty()) {
        exposeCell(datum.id)
      } else {
        console.log('focus select')
        selectCell(datum.id)
      }
    })

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

    d3.selectAll<SVGGElement, EnrichedDatum>('.cell').on('click', function (e: MouseEvent, d) {
      e.stopPropagation()
      const isExposed = d3.select(this).classed('exposed')
      if (d.id && !isExposed) {
        console.log('expose')
        exposeCell(d.id)
      }
    })
  }

  update(originalData, { initial: true })
}
