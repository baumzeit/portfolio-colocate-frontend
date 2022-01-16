import * as d3 from 'd3'
import React, {
  FC,
  FocusEvent,
  KeyboardEvent,
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import './voronoi.scss'

import { EnrichedDatum, initializeVoronoiActions, VoronoiDatum, VoronoiOptions } from './helpers'

const chartPadding = { top: 3.5 * 16, left: 1.5 * 16, right: 1.5 * 16, bottom: 1.5 * 16 }

export type VoronoiChartProps = {
  data: VoronoiDatum[]
  width: number
  height: number
  imageSize: number
  onClickCell: (id: string) => void
  highlightedFieldId?: string | null
  exposedProjectId?: string | null
}

export const VoronoiChart: FC<VoronoiChartProps> = memo(
  ({ data, width, height, imageSize, highlightedFieldId = null, exposedProjectId = null, onClickCell, children }) => {
    const [svgNode, setSvgNode] = useState<SVGSVGElement>()
    const [initialized, setInitialized] = useState(false)

    const onRefChange = useCallback((node) => {
      setSvgNode(node)
    }, [])

    const voronoiOptions = useMemo<VoronoiOptions | undefined>(() => {
      if (width && height) {
        const options = {
          width,
          height,
          imageSize,
          cellGap: 22,
          padding: chartPadding,
          exposeOffsetTop: 60,
          exposeCellHeight: Math.max(window.innerHeight * 0.4, 300)
        }
        console.log('voronoi | set options', options)
        return options
      }
    }, [height, imageSize, width])

    const voronoiActions = useMemo(() => {
      if (voronoiOptions && svgNode) {
        const initializedActions = initializeVoronoiActions(svgNode, data, voronoiOptions)
        console.log('voronoi | set actions', initializedActions)
        return initializedActions
      }
    }, [data, svgNode, voronoiOptions])

    useEffect(() => {
      if (svgNode && voronoiActions) {
        console.log('voronoi | initialize chart')
        const svg = d3
          .select(svgNode)
          .attr('fill', 'none')
          .attr('stroke-linejoin', 'round')
          .attr('stroke-linecap', 'round')
        drawVoronoi({
          svg,
          ...voronoiActions,
          onClick: onClickCell,
          onHover: voronoiActions.selectCell,
          onMouseLeave: voronoiActions.restore
        })
        setInitialized(true)
      }
    }, [initialized, onClickCell, svgNode, voronoiActions])

    useEffect(() => {
      if (voronoiActions && initialized) {
        console.log('voronoi | action expose', exposedProjectId)
        voronoiActions.exposeCell(exposedProjectId)
      }
    }, [exposedProjectId, initialized, voronoiActions])

    // useEffect(() => {
    //   if (voronoiActions && initialized) {
    //     console.log('action sequence')
    //     voronoiActions.sequenceCells(!!listView)
    //   }
    // }, [listView, initialized, voronoiActions])

    useEffect(() => {
      if (voronoiActions && initialized) {
        console.log('voronoi | action highlight', highlightedFieldId)
        voronoiActions.highlightCellsByFieldId(highlightedFieldId)
      }
    }, [highlightedFieldId, initialized, voronoiActions])

    return (
      <>
        <svg id="voronoiSvg" ref={onRefChange} width={width} height={height} className="cursor-pointer animate-fadeIn">
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
      </>
    )
  }
)

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
        return update
      }
    )

  const textOffsetY = -32

  function adjustLabelBox(d: EnrichedDatum, cell: SVGGElement) {
    const box = d3.select(cell).select<SVGTextElement>('.label')?.node()?.getBBox()
    if (box) {
      const labelWidth = box.width + 18
      const labelHeight = box.height + 10
      d3.select(cell)
        .select('.label-box')
        .attr('rx', 2)
        .attr('x', d.x - labelWidth / 2)
        .attr('y', d.y + textOffsetY - labelHeight / 2)
        .attr('width', labelWidth)
        .attr('height', labelHeight)
    }
  }
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

        cell.append('rect').classed('label-box', true)

        cell
          .append('text')
          .attr('dy', textOffsetY)
          .attr('x', (d) => d.x)
          .attr('y', (d) => d.y)
          .text((d) => d.title || '')
          .classed('label', true)

        cell.each(function (d) {
          adjustLabelBox(d, this)
        })

        return cell
      },
      (update) => {
        update
          .select('circle')
          .attr('cx', (d) => d.x)
          .attr('cy', (d) => d.y)
        update
          .select('.label')
          .attr('x', (d) => d.x)
          .attr('y', (d) => d.y)
        update.each(function (d) {
          adjustLabelBox(d, this)
        })
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
