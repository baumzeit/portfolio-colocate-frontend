import { Voronoi } from 'd3-delaunay'
import { select, Selection, BaseType } from 'd3-selection'
import { FocusEvent } from 'react'

import { drawCell, updateCell } from './drawCell'
import { EnrichedDatum, VoronoiOptions } from './voronoiActions'

export type VoronoiDrawProps = {
  svg: Selection<SVGSVGElement, unknown, null, undefined>
  data: EnrichedDatum[]
  options: VoronoiOptions
  voronoi: Voronoi<EnrichedDatum>
  onHover: (id: string) => void
  onClick: (id: string) => void
  onMouseLeave: () => void
}

export function drawVoronoi({ svg, data, options: opts, voronoi, onHover, onClick, onMouseLeave }: VoronoiDrawProps) {
  svg
    .select('defs')
    .selectAll<d3.BaseType, EnrichedDatum>('clipPath')
    .data(data, (d) => String(d.id))
    .join(
      (enter) => {
        const defG = enter.append('g').each(function (d) {
          select(this).classed(`defs-cell`, true)
        })
        defG
          .append('clipPath')
          .attr('id', (d) => `clip-${d.id}`)
          .attr('fill', 'white')
          .append('path')
          .classed('defs-path', true)
          .attr('d', (d) => d.path)
        return defG
      },
      (update) => update.select('clipPath path').attr('d', (d) => d.path)
    )

  drawContentLayer(svg, data, opts)

  svg
    .selectAll('.bounds')
    .data([voronoi.renderBounds()])
    .join('path')
    .attr('d', (d) => d)
    .classed('bounds', true)

  svg
    .selectAll<SVGGElement, EnrichedDatum>('.hover-cell')
    .data(data, (d) => String(d.id))
    .join(
      (enter) => {
        const cell = enter.append('g').each(function (d) {
          select(this).classed(`hover-cell`, true)
        })
        cell
          .append('path')
          .attr('d', (d) => d.path)
          .attr('fill', 'transparent')
          .classed('hover-border', true)

        return cell
      },
      (update) => {
        update.select('.hover-border').attr('d', (d) => d.path)
        return update
      }
    )

  svg.on('keyup', (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      const activeElement = select<BaseType, EnrichedDatum | null>(document.activeElement)
      const activeElementId = activeElement?.datum()?.id
      if (activeElementId) {
        onClick(activeElementId)
      }
    }
  })

  svg.selectAll<SVGPathElement, EnrichedDatum>('.hover-border').on('mouseenter', function (e: MouseEvent, d) {
    if (svg.selectAll('.cell.exposed').empty() && !svg.node()!.contains(document.activeElement)) {
      onHover(d.id)
    }
  })

  svg.selectAll('.label-box').on('focus', function (e: FocusEvent<SVGElement>) {
    const datum = select<SVGElement, EnrichedDatum>(e.target).datum()
    if (!svg.selectAll('.exposed').empty()) {
      onClick(datum.id)
    } else {
      onHover(datum.id)
    }
  })

  svg.selectAll<SVGGElement, EnrichedDatum>('.hover-cell').on('click', function (e: MouseEvent, d) {
    e.stopPropagation()
    const isExposed = select(this).classed('exposed')
    if (d.id && !isExposed) {
      onClick(d.id)
    }
  })

  svg.on('mouseleave', onMouseLeave)
}

export function drawContentLayer(
  sel: Selection<SVGSVGElement, unknown, any, undefined>,
  data: EnrichedDatum[],
  options: Pick<VoronoiOptions, 'imageSize' | 'width'>
) {
  sel
    .selectAll<SVGGElement, EnrichedDatum>('.cell')
    .data(data)
    .join(
      (enter) => drawCell(enter, options.imageSize),
      (update) => updateCell(update, options.imageSize, options.width)
    )
}
