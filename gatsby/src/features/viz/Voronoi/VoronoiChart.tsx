import * as d3 from 'd3'
import React, { FC, FocusEvent, KeyboardEvent, memo, MouseEvent, useEffect, useMemo, useRef, useState } from 'react'
import './voronoi.scss'
import ReactDOM from 'react-dom'
import { useQueryParam } from 'use-query-params'

import { ProjectsPageDataQuery } from '../../../../graphql-types'
import { ProjectDetail } from '../../project/Detail'
import { EnrichedDatum, initializeVoronoiActions, SetModalProps, VoronoiDatum, VoronoiOptions } from './helpers'

const findIdBySlug = (data: { slug?: string | null; id?: string | number | null }[], searchSlug?: string) =>
  searchSlug ? data.find((entity) => entity.slug === searchSlug)?.id?.toString() || null : null

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
    <div className="h-full">{children}</div>,
    // </Transition>,
    document.body
  )
}

const chartPadding = { top: 3.5 * 16, left: 1.5 * 16, right: 1.5 * 16, bottom: 1.5 * 16 }

export type VoronoiViewOptions = {
  exposedId: string | null
  fieldId: string | null
}

export type VoronoiChartProps = {
  data: VoronoiDatum[]
  fields: ProjectsPageDataQuery['allStrapiField']['edges'][number]['node'][]
  width: number
  height: number
  imageSize: number
} & VoronoiViewOptions

export const VoronoiChart: FC<VoronoiChartProps> = memo(({ data, width, height, imageSize, fields, children }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [initialized, setInitialized] = useState(false)
  const [modalData, setModalData] = useState<SetModalProps>()

  const [fieldSlug] = useQueryParam<string | null>('field')
  const [exposeSlug, setExposeSlug] = useQueryParam<string | undefined>('project')

  const voronoiOptions = useMemo<VoronoiOptions | undefined>(() => {
    if (width && height) {
      console.log('set options', {
        width,
        height,
        imageSize,
        cellGap: 28,
        padding: chartPadding,
        exposeOffsetTop: 90,
        exposeCellHeight: 400
      })
      return {
        width,
        height,
        imageSize,
        cellGap: 28,
        padding: chartPadding,
        exposeOffsetTop: 90,
        exposeCellHeight: 400
      }
    }
  }, [height, imageSize, width])

  const voronoiActions = useMemo(() => {
    const svg = svgRef.current
    if (voronoiOptions && svg) {
      console.log('set actions')
      return initializeVoronoiActions(svg, data, voronoiOptions)
    }
  }, [data, voronoiOptions])

  useEffect(() => {
    if (svgRef.current && voronoiActions) {
      console.log('initialize voronoi chart')
      const svg = d3
        .select(svgRef.current)
        .attr('fill', 'none')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
      drawVoronoi({
        svg,
        ...voronoiActions,
        onClick: (id) => setExposeSlug(voronoiActions.data.find((d) => d.id === id)?.slug),
        onHover: voronoiActions.selectCell,
        onMouseLeave: voronoiActions.restore
      })
      setInitialized(true)
    }
  }, [initialized, setExposeSlug, voronoiActions])

  useEffect(() => {
    if (voronoiActions && initialized) {
      const { data } = voronoiActions
      const exposedId = findIdBySlug(data, exposeSlug)
      const isExposed = (d: EnrichedDatum) => exposedId !== null && d.id === exposedId
      const exposeIndex = data.findIndex(isExposed)
      const nextIndex = (exposeIndex % (data.length - 1)) + 1
      const prevIndex = exposeIndex > 0 ? exposeIndex - 1 : data.length - 1

      const exposedData = data[exposeIndex]

      setModalData({
        data: exposeIndex >= 0 ? exposedData : null,
        onClose: () => (exposedId ? setExposeSlug(undefined) : () => {}),
        onNext: () => (exposedId ? setExposeSlug(data[nextIndex].slug) : () => {}),
        onPrev: () => (exposedId ? setExposeSlug(data[prevIndex].slug) : () => {})
      })
    }
  }, [exposeSlug, initialized, setExposeSlug, voronoiActions])

  useEffect(() => {
    if (voronoiActions && initialized) {
      console.log('action expose', exposeSlug, findIdBySlug(voronoiActions.data, exposeSlug))
      voronoiActions.exposeCell(findIdBySlug(voronoiActions.data, exposeSlug))
    }
  }, [exposeSlug, initialized, voronoiActions])

  // useEffect(() => {
  //   if (voronoiActions && initialized) {
  //     console.log('action sequence')
  //     voronoiActions.sequenceCells(!!listView)
  //   }
  // }, [listView, initialized, voronoiActions])

  useEffect(() => {
    if (voronoiActions && initialized) {
      console.log('action highlight field', fieldSlug, findIdBySlug(fields, fieldSlug))
      voronoiActions.highlightCellsByFieldId(findIdBySlug(fields, fieldSlug))
    }
  }, [fieldSlug, fields, initialized, voronoiActions])

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
        <g className="base-layer"></g>
        <g className="content-layer"></g>
        <g className="hover-layer"></g>
      </svg>
      <Modal show={!!modalData?.data}>{modalData && <ProjectDetail {...modalData} />}</Modal>
    </>
  )
})

type VoronoiDrawProps = {
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>
  data: EnrichedDatum[]
  options: VoronoiOptions
  voronoi: d3.Voronoi<VoronoiDatum>
  delaunay: d3.Delaunay<VoronoiDatum>
  onHover: (id: string) => void
  onClick: (id: string) => void
  onMouseLeave: () => void
}

const drawVoronoi = ({ svg, data, options: opts, voronoi, onHover, onClick, onMouseLeave }: VoronoiDrawProps) => {
  svg
    .select('defs')
    .selectAll<d3.BaseType, EnrichedDatum>('mask')
    .data(data, (d) => String(d.id))
    .join(
      (enter) => {
        const defG = enter.append('g').classed('cell defs-cell', true)
        defG
          .append('mask')
          .attr('id', (d) => `clip-${d.id}`)
          .attr('fill', 'white')
          .append('path')
          .classed('defs-path', true)
          .attr('d', (d) => d.path)
        return defG
      },
      (update) => update.select('mask path').attr('d', (d) => d.path)
    )

  const baseLayer = svg.select('g.base-layer')
  const contentLayer = svg.select('g.content-layer')
  const hoverLayer = svg.select('g.hover-layer')

  baseLayer
    .selectAll<SVGGElement, EnrichedDatum>('.cell')
    .data(data, (d) => String(d.id))
    .join(
      (enter) => {
        const cell = enter
          .append('g')
          .classed('cell', true)
          .attr('mask', (d) => `url(#clip-${d.id})`)

        cell
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

        cell
          .append('path')
          .attr('d', (d) => d.path)
          .classed('pattern', true)
          .attr('fill', 'url(#diagonalHatch)')
        cell
          .append('path')
          .attr('d', (d) => d.path)
          .classed('highlight-pattern', true)
        cell
          .append('path')
          .attr('d', (d) => d.path)
          .classed('cell-gap', true)
        cell
          .append('path')
          .attr('d', (d) => d.path)
          .classed('cell-border', true)

        return cell
      },
      (update) => {
        update
          .select('.image-fo')
          .attr('x', (d) => d.x - opts.imageSize / 2)
          .attr('y', (d) => d.y - opts.imageSize / 2)
          .attr('width', opts.imageSize)
          .attr('height', opts.imageSize)
        update.select('path.cell-gap').attr('d', (d) => d.path)
        update.select('path.pattern').attr('d', (d) => d.path)
        update.select('path.highlight-pattern').attr('d', (d) => d.path)
        update.select('path.cell-border').attr('d', (d) => d.path)
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
  contentLayer
    .selectAll<SVGGElement, EnrichedDatum>('.cell')
    .data(data, (d) => String(d.id))
    .join(
      (enter) => {
        const cell = enter.append('g').classed('cell', true)
        cell
          .append('circle')
          .attr('cx', (d) => d.x)
          .attr('cy', (d) => d.y)
          .attr('r', 8)
          .attr('tabindex', (d) => 10 + d.index)
          .classed('focus-dot', true)

        cell
          .append('text')
          .attr('x', (d) => d.x)
          .attr('y', (d) => d.y - 18)
          .text((d) => d.title || '')
          .classed('label', true)
        return cell
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
  hoverLayer
    .selectAll<SVGGElement, EnrichedDatum>('.hover-cell')
    .data(data, (d) => String(d.id))
    .join(
      (enter) => {
        const cell = enter.append('g').classed('cell hover-cell', true)
        cell
          .append('path')
          .attr('d', (d) => d.path)
          .classed('hover-border', true)
        return cell
      },
      (update) => {
        update.select('path.hover-border').attr('d', (d) => d.path)
        return update
      }
    )

  hoverLayer.selectAll<SVGPathElement, EnrichedDatum>('.hover-border').on('mouseenter', function (e: MouseEvent, d) {
    console.log('enter cell')
    if (d3.selectAll('.cell.exposed').empty() && !svg.node()!.contains(document.activeElement)) {
      onHover(d.id)
    }
  })

  // d3.selectAll<SVGPathElement, EnrichedDatum>(`.base-layer .cell`).style('transform-origin', function (d) {
  //   const cellRect = this.getBoundingClientRect()
  //   const originX = (100 * (d.x - cellRect.x)) / cellRect.width
  //   const originY = (100 * (d.y - cellRect.y)) / cellRect.height
  //   return `${originX}% ${originY}%`
  // })

  svg
    .selectAll('path.bounds')
    .data([voronoi.renderBounds()])
    .join('path')
    .attr('d', (d) => d)
    .classed('bounds', true)

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

  d3.selectAll('.cell circle').on('focus', function (e: FocusEvent<SVGElement>) {
    const datum = d3.select<SVGElement, EnrichedDatum>(e.target).datum()
    if (!baseLayer.selectAll('.exposed').empty()) {
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
