import { useDebounceCallback } from '@react-hook/debounce'
import usePrevious from '@react-hook/previous'
import * as d3 from 'd3'
import React, {
  FC,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import {
  calculateModel,
  Dimensions,
  EnrichedDatum,
  initializeVoronoiActions,
  SetExposedCellFn,
  SetModalFn,
  VoronoiDatum,
  VoronoiOptions
} from './helpers'

const chartPadding = { top: 3.5 * 16, left: 1.5 * 16, right: 1.5 * 16, bottom: 1.5 }

export type VoronoiChartProps = {
  data: VoronoiDatum[]
  width: number
  height: number
  imageSize: number
  setModal: SetModalFn
  initialExposedId: string | null
}

export const VoronoiChart: FC<VoronoiChartProps> = ({
  data,
  width,
  height,
  imageSize,
  setModal,
  initialExposedId,
  children
}) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [initialized, setInitialized] = useState(false)
  const [exposedCell, setExposedCell] = useState<string | null>(initialExposedId)
  const prevExposedCell = usePrevious<string | null>(exposedCell, null)

  const voronoiOptions = useMemo(() => {
    console.log('set options', width && height)
    return width && height
      ? {
          offset: Math.min(width, height) * 0.1,
          padding: chartPadding,
          transitionDuration: 450,
          cellGap: 32,
          imageSize
        }
      : null
  }, [height, imageSize, width])

  const voronoiActions = useMemo(() => {
    console.log('set actions', voronoiOptions)
    if (voronoiOptions) {
      return initializeVoronoiActions(data, { width, height }, voronoiOptions, setModal)
    }
  }, [data, height, setModal, voronoiOptions, width])

  const updateGraphDebounce = useDebounceCallback(drawVoronoi, 300)

  useEffect(() => {
    console.log('initialize', svgRef.current && voronoiActions && voronoiOptions)
    if (svgRef.current && voronoiActions) {
      const svg = d3
        .select(svgRef.current)
        .attr('fill', 'none')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
      updateGraphDebounce({
        svg,
        ...voronoiActions,
        onClick: setExposedCell,
        onHover: voronoiActions.selectCell
      })
      setInitialized(true)
    }
  }, [updateGraphDebounce, voronoiActions, voronoiOptions])

  useEffect(() => {
    console.log('expose cell', { prevExposedCell, exposedCell })
    if (voronoiActions && initialized && prevExposedCell !== exposedCell) {
      console.log('action expose', exposedCell)
      voronoiActions.exposeCell(exposedCell)
    }
  }, [exposedCell, initialized, prevExposedCell, voronoiActions])

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

const enterDuration = 250
const exitDuration = 250
const fadeIn = (sel: d3.Selection<SVGGElement, EnrichedDatum, any, unknown>) =>
  sel.style('opacity', 0).transition().duration(enterDuration).style('opacity', 1)

type VoronoiDrawProps = {
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>
  data: EnrichedDatum[]
  options: VoronoiOptions
  voronoi: d3.Voronoi<VoronoiDatum>
  onHover: (id: string) => void
  onClick: (id: string) => void
} & Dimensions

const drawVoronoi = ({
  svg,
  data,
  width = 0,
  height = 0,
  options: opts,
  voronoi,
  onHover,
  onClick
}: VoronoiDrawProps) => {
  svg
    .select('defs')
    .selectAll<d3.BaseType, EnrichedDatum>('clipPath')
    .data(data, (d) => String(d.id))
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
    .data(data, (d) => String(d.id))
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
        return imageG
      },
      (update) => {
        update
          .select('foreignObject.image')
          .attr('x', (d) => d.x - opts.imageSize / 2)
          .attr('y', (d) => d.y - opts.imageSize / 2)
          .attr('width', opts.imageSize)
          .attr('height', opts.imageSize)
        return update
      }
    )

  const baseLayerCell = baseLayer
    .selectAll<SVGGElement, EnrichedDatum>('.cell')
    .data(data, (d) => String(d.id))
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
        return baseG
      },
      (update) => {
        update.select('path.cell-gap').attr('d', (d) => d.path)
        update.select('path.highlight-pattern').attr('d', (d) => d.path)

        return update
      }
    )

  const definitionLayerCell = definitionLayer
    .selectAll<SVGGElement, EnrichedDatum>('.cell')
    .data(data, (d) => String(d.id))
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
        update.select('path.cell-border').attr('d', (d) => d.path)
        return update
      }
    )

  definitionLayer
    .selectAll<SVGPathElement, EnrichedDatum>('path.cell-border')
    .on('mouseenter', function (e: MouseEvent, d) {
      if (d3.selectAll('.cell.exposed').empty() && !svg.node()!.contains(document.activeElement)) {
        onHover(d.id)
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
    .data(data, (d) => String(d.id))
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
        update
          .select('circle')
          .attr('cx', (d) => d.x)
          .attr('cy', (d) => d.y)
        update
          .select('text.label')
          .attr('x', (d) => d.x + 16)
          .attr('y', (d) => d.y - 18)
        return update
      }
    )

  svg.on('keyup', (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      const activeElement = d3.select<d3.BaseType, EnrichedDatum | null>(document.activeElement)
      const activeElementId = activeElement?.datum()?.id
      if (activeElementId) {
        onClick(activeElementId)
      }
    }
  })

  contentLayerCell.selectAll('circle').on('focus', function (e: FocusEvent<SVGElement>) {
    const datum = d3.select<SVGElement, EnrichedDatum>(e.target).datum()
    if (!contentLayer.selectAll('.exposed').empty()) {
      onClick(datum.id)
    } else {
      console.log('focus select')
      onHover(datum.id)
    }
  })

  d3.selectAll<SVGGElement, EnrichedDatum>('.cell').on('click', function (e: MouseEvent, d) {
    e.stopPropagation()
    const isExposed = d3.select(this).classed('exposed')
    if (d.id && !isExposed) {
      console.log('expose', d.id)
      onClick(d.id)
    }
  })
}
