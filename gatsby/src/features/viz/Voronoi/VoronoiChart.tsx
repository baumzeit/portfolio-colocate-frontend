import { Transition } from '@headlessui/react'
import { useDebounceCallback } from '@react-hook/debounce'
import * as d3 from 'd3'
import React, { FC, FocusEvent, KeyboardEvent, memo, MouseEvent, useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import './voronoi.scss'

import { ProjectDetail } from '../../project/Detail'
import {
  Dimensions,
  EnrichedDatum,
  initializeVoronoiActions,
  SetModalProps,
  VoronoiDatum,
  VoronoiOptions
} from './helpers'

const Modal: FC<{ show: boolean }> = ({ show, children }) => {
  if (!show) return null
  return ReactDOM.createPortal(
    // <Transition
    //   appear={true}
    //   show={show}
    //   enter="transition-opacity duration-600"
    //   enterFrom="opacity-0"
    //   enterTo="opacity-100"
    //   leave="transition-opacity duration-600"
    //   leaveFrom="opacity-100"
    //   leaveTo="opacity-0"
    // >
    <div>{children}</div>,
    // </Transition>,
    document.body
  )
}

const chartPadding = { top: 3.5 * 16, left: 1.5 * 16, right: 1.5 * 16, bottom: 1.5 * 16 }

export type VoronoiChartProps = {
  data: VoronoiDatum[]
  width: number
  height: number
  list: boolean
  imageSize: number
  initialExposedId: string | null
}

export const VoronoiChart: FC<VoronoiChartProps> = memo(
  ({ data, width, height, imageSize, initialExposedId, list, children }) => {
    const svgRef = useRef<SVGSVGElement>(null)
    const [initialized, setInitialized] = useState(false)
    const [exposedCell, setExposedCell] = useState<string | null>(initialExposedId)
    const [modalData, setModalData] = useState<SetModalProps>()

    const voronoiOptions = useMemo(() => {
      if (width && height) {
        console.log('set options')
        return {
          padding: chartPadding,
          transitionDuration: 200,
          cellGap: 28,
          imageSize,
          width,
          height
        }
      }
    }, [height, imageSize, width])

    const voronoiActions = useMemo(() => {
      if (voronoiOptions) {
        console.log('set actions', voronoiOptions)
        return initializeVoronoiActions(data, voronoiOptions)
      }
    }, [data, voronoiOptions])

    const updateGraphDebounce = useDebounceCallback(drawVoronoi, 300, true)

    useEffect(() => {
      if (svgRef.current && voronoiActions) {
        console.log('initialize voronoi chart', voronoiActions)
        const svg = d3
          .select(svgRef.current)
          .attr('fill', 'none')
          .attr('stroke-linejoin', 'round')
          .attr('stroke-linecap', 'round')
        updateGraphDebounce({
          svg,
          ...voronoiActions,
          onClick: setExposedCell,
          onHover: voronoiActions.selectCell,
          onMouseLeave: voronoiActions.restore
        })
        setInitialized(true)
      }
    }, [updateGraphDebounce, voronoiActions])

    useEffect(() => {
      if (voronoiActions && initialized) {
        const { data } = voronoiActions
        const isExposed = (d: EnrichedDatum) => exposedCell !== null && d.id === exposedCell
        const exposeIndex = data.findIndex(isExposed)
        const nextIndex = (exposeIndex % (data.length - 1)) + 1
        const prevIndex = exposeIndex > 0 ? exposeIndex - 1 : data.length - 1

        setModalData({
          data: exposeIndex >= 0 ? data[exposeIndex] : null,
          onClose: () => (exposedCell ? setExposedCell(null) : () => {}),
          onNext: () => (exposedCell ? setExposedCell(data[nextIndex].id) : () => {}),
          onPrev: () => (exposedCell ? setExposedCell(data[prevIndex].id) : () => {})
        })
      }
    }, [exposedCell, initialized, voronoiActions])

    useEffect(() => {
      if (voronoiActions && initialized) {
        console.log('action expose', exposedCell)
        voronoiActions.exposeCell(exposedCell)
      }
    }, [exposedCell, initialized, voronoiActions])

    useEffect(() => {
      if (voronoiActions && initialized && list) {
        console.log('action list')
        voronoiActions.sequenceCells()
      }
    }, [initialized, voronoiActions])

    return (
      <>
        <svg id="voronoiSvg" ref={svgRef} width={width} height={height} className="cursor-pointer animate-fadeIn">
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
          <g className="image-layer layer"></g>
          <g className="base-layer layer"></g>
          <g className="definition-layer layer"></g>
          <g className="content-layer layer"></g>
        </svg>
        <Modal show={!!modalData?.data}>{modalData && <ProjectDetail {...modalData} />}</Modal>
      </>
    )
  }
)

type VoronoiDrawProps = {
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>
  data: EnrichedDatum[]
  options: VoronoiOptions
  voronoi: d3.Voronoi<VoronoiDatum>
  onHover: (id: string) => void
  onClick: (id: string) => void
  onMouseLeave: () => void
}

const drawVoronoi = ({ svg, data, options: opts, voronoi, onHover, onClick, onMouseLeave }: VoronoiDrawProps) => {
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
          .classed('defs-path', true)
          .attr('d', (d) => d.path)
        return defG
      },
      (update) => update.select('clipPath path').attr('d', (d) => d.path)
    )

  const baseLayer = svg.select('g.base-layer')
  const imageLayer = svg.select('g.image-layer')
  const definitionLayer = svg.select('g.definition-layer')
  const contentLayer = svg.select('g.content-layer')

  imageLayer
    .selectAll<SVGGElement, EnrichedDatum>('.cell')
    .data(data, (d) => String(d.id))
    .join(
      (enter) => {
        const imageG = enter
          .append('g')
          .classed('cell image-cell', true)
          .attr('clip-path', (d) => `url(#clip-${d.id})`)

        imageG
          .append('foreignObject')
          .classed('image-fo', true)
          .attr('x', (d) => d.x - opts.imageSize / 2)
          .attr('y', (d) => d.y - opts.imageSize / 2)
          .attr('width', opts.imageSize)
          .attr('height', opts.imageSize)
          .append('xhtml:img')
          .classed('image', true)
          .attr('xmlns', 'http://www.w3.org/1999/xhtml')
          .attr('srcSet', (d) => d.imageUrl)

        imageG
          .append('path')
          .attr('d', (d) => d.path)
          .classed('cell-gap', true)
        return imageG
      },
      (update) => {
        update
          .select('.image-fo')
          .attr('x', (d) => d.x - opts.imageSize / 2)
          .attr('y', (d) => d.y - opts.imageSize / 2)
          .attr('width', opts.imageSize)
          .attr('height', opts.imageSize)
        return update
      }
    )

  baseLayer
    .selectAll<SVGGElement, EnrichedDatum>('.cell')
    .data(data, (d) => String(d.id))
    .join(
      (enter) => {
        const baseG = enter
          .append('g')
          .classed('cell base-cell', true)
          .attr('clip-path', (d) => `url(#clip-${d.id})`)
        baseG
          .append('path')
          .attr('d', (d) => d.path)
          .classed('cell-gap pattern', true)
          .attr('fill', 'url(#diagonalHatch)')
        baseG
          .append('path')
          .attr('d', (d) => d.path)
          .classed('cell-gap highlight-pattern', true)
        return baseG
      },
      (update) => {
        update.select('path.cell-gap').attr('d', (d) => d.path)
        update.select('path.highlight-pattern').attr('d', (d) => d.path)

        return update
      }
    )

  definitionLayer
    .selectAll<SVGGElement, EnrichedDatum>('.cell')
    .data(data, (d) => String(d.id))
    .join(
      (enter) => {
        const definitionG = enter.append('g').classed('cell definition-cell', true)

        definitionG
          .append('path')
          .attr('d', (d) => d.path)
          .classed('cell-border', true)

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
    .classed('bounds', true)

  const contentLayerCell = contentLayer
    .selectAll<SVGGElement, EnrichedDatum>('.cell')
    .data(data, (d) => String(d.id))
    .join(
      (enter) => {
        const contentG = enter.append('g').classed('cell content-cell', true)

        contentG
          .append('circle')
          .attr('cx', (d) => d.x)
          .attr('cy', (d) => d.y)
          .attr('r', 8)
          .attr('tabindex', (d) => 10 + d.id)

        contentG
          .append('text')
          .attr('x', (d) => d.x)
          .attr('y', (d) => d.y - 18)
          .text((d) => d.title || '')
          .classed('label', true)
        return contentG
      },
      (update) => {
        update
          .select('circle')
          .attr('cx', (d) => d.x)
          .attr('cy', (d) => d.y)
        update
          .select('text.label')
          .attr('x', (d) => d.x)
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
  svg.on('mouseleave', () => onMouseLeave())

  contentLayerCell.selectAll('circle').on('focus', function (e: FocusEvent<SVGElement>) {
    const datum = d3.select<SVGElement, EnrichedDatum>(e.target).datum()
    if (!contentLayer.selectAll('.exposed').empty()) {
      onClick(datum.id)
    } else {
      onHover(datum.id)
    }
  })

  d3.selectAll<SVGGElement, EnrichedDatum>('.cell').on('click', function (e: MouseEvent, d) {
    e.stopPropagation()
    const isExposed = d3.select(this).classed('exposed')
    if (d.id && !isExposed) {
      onClick(d.id)
    }
  })
}
