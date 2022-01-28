import * as d3 from 'd3'
import React, {
  FocusEvent,
  KeyboardEvent,
  memo,
  MouseEvent,
  SVGProps,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import './voronoi.scss'

import { EnrichedDatum, initializeVoronoiActions, VoronoiDatum, VoronoiOptions } from './helpers'

type HighlightPatternDatum = { color?: string | null; id: string | number }

export type VoronoiChartProps = {
  data: VoronoiDatum[]
  highlightPatternData: HighlightPatternDatum[]
  width: number
  height: number
  imageSize: number
  onClickCell: (id: string) => void
  highlightedFieldId?: string | null
  exposedProjectId?: string | null
}

export const VoronoiChart = memo(
  ({
    data,
    highlightPatternData,
    width,
    height,
    imageSize,
    highlightedFieldId = null,
    exposedProjectId = null,
    onClickCell
  }: VoronoiChartProps) => {
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
          padding: { top: 0, left: 1.5 * 16, right: 1.5 * 16, bottom: 1.5 * 16 },
          exposeOffsetTop: 56,
          exposeCellHeight: Math.max(window.innerHeight * 0.3, 250)
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
        console.log('voronoi | draw chart')
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
            <HatchPattern id="diagonalHatch" className="stroke-bg-secondary" />
            {highlightPatternData.map(({ color, id }) => (
              <HatchPattern key={id} stroke={color || 'black'} id={'diagonalHatchHighlight-' + id} opacity={0.4} />
            ))}
          </defs>
          <g className="base-layer"></g>
          <g className="content-layer"></g>
          <g className="hover-layer"></g>
        </svg>
      </>
    )
  }
)

const HatchPattern = ({ id, ...rest }: Pick<HighlightPatternDatum, 'id'> & SVGProps<SVGPathElement>) => {
  return (
    <pattern key={id} id={String(id)} patternUnits="userSpaceOnUse" width="4" height="4">
      <path
        d="M-1,1 l2,-2
          M0,4 l4,-4
          M3,5 l2,-2"
        strokeWidth="1"
        opacity={0.8}
        {...rest}
      />
    </pattern>
  )
}

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
    .style('transform-origin', function (d) {
      const cellRect = d3
        .select<SVGGElement, EnrichedDatum>(this)
        ?.select<SVGPathElement>('.cell-border')
        ?.node()
        ?.getBBox()
      if (cellRect) {
        const originX = (100 * (d.x - cellRect.x)) / cellRect.width // adjust for point offset from cell center
        const originY = (100 * (d.y - cellRect.y)) / cellRect.height
        return `${originX}% ${originY}%`
      }
      return 'center'
    })

  svg
    .selectAll('path.bounds')
    .data([voronoi.renderBounds()])
    .join('path')
    .attr('d', (d) => d)
    .classed('bounds', true)

  const textOffsetY = -32

  function adjustLabelBox(d: EnrichedDatum, cell: SVGGElement) {
    const box = d3.select(cell).select<SVGTextElement>('.label')?.node()?.getBBox()
    if (box) {
      const boxStart = box.x - 8
      const boxWidth = box.width + 16
      const boxHeight = box.height + 10
      d3.select(cell)
        .select('.label-box')
        .attr('rx', 2)
        .attr('x', boxStart)
        .attr('y', d.y + textOffsetY - boxHeight / 2)
        .attr('width', boxWidth)
        .attr('height', boxHeight)
    }
  }

  function adjustLabels(d: EnrichedDatum, cell: SVGGElement) {
    const label = d3.select<SVGGElement, EnrichedDatum>(cell).select('.label')
    label
      .attr('x', (d) => {
        const titleSpace = (d.title.length / 2) * 7 + 22

        const min = titleSpace
        const max = opts.width - titleSpace
        return Math.min(Math.max(d.x, min), max)
      })
      .attr('y', (d) => d.y)
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
          .attr('r', 7)
          .attr('tabindex', (d) => 10 + d.index)
          .classed('focus-dot', true)

        cell.append('rect').classed('label-box', true)

        cell
          .append('text')
          .attr('dy', textOffsetY)
          .text((d) => d.title || '')
          .classed('label', true)

        return cell
      },
      (update) => {
        update
          .select('circle')
          .attr('cx', (d) => d.x)
          .attr('cy', (d) => d.y)
          .attr('y', (d) => d.y)

        return update
      }
    )
    .each(function (d) {
      adjustLabels(d, this)
      adjustLabelBox(d, this)
    })

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
    // console.log('enter cell')
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

  svg.on('keyup', (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      const activeElement = d3.select<d3.BaseType, EnrichedDatum | null>(document.activeElement)
      const activeElementId = activeElement?.datum()?.id
      if (activeElementId) {
        onClick(activeElementId)
      }
    }
  })
  svg.on('mouseleave', onMouseLeave)

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
