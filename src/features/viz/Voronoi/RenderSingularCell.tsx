import * as d3 from 'd3-selection'
import React, { useRef, useEffect, useMemo } from 'react'

import { drawContentLayer } from './helpers/drawVoronoi'
import { EnrichedDatum } from './helpers/voronoiActions'
import { VoronoiChartProps } from './VoronoiChart'

type RenderSingularCellProps = {
  enrichedDatum: EnrichedDatum
} & Pick<VoronoiChartProps, 'width' | 'height' | 'imageSize'>

export const RenderSingularCell = ({ width, enrichedDatum, imageSize }: RenderSingularCellProps) => {
  const container = useRef<HTMLDivElement>(null)

  const svg = useMemo(() => getIsolatedCellSvg(enrichedDatum.id), [enrichedDatum.id])

  useEffect(() => {
    if (svg) {
      drawContentLayer(svg as any, [enrichedDatum], { imageSize, width })
      d3.select(container.current).append(() => svg.node())
    }
    return () => {
      if (svg) {
        svg.remove()
      }
    }
  }, [enrichedDatum, imageSize, svg, width])

  return <div ref={container} />
}

function getIsolatedCellSvg(id?: string) {
  const cellClass = `.id-${id}`
  const originalSvg = d3.select<SVGSVGElement, unknown>(`#voronoi-projects`)

  if (!originalSvg.empty()) {
    const svg = originalSvg.clone(true)
    const cell = svg.select(cellClass)

    svg
      .selectAll('.cell')
      .filter(function () {
        const cell = d3.select(this)
        return !cell.classed(`id-${id}`)
      })
      .remove()
    svg
      .selectAll('.hover-cell')
      .filter(function () {
        const cell = d3.select(this)
        return !cell.classed(`id-${id}`)
      })
      .remove()

    const getViewBox = () => {
      const cellRect = cell?.select<SVGPathElement>('.cell-border')?.node()?.getBBox()
      return `${cellRect?.x} ${cellRect?.y} ${cellRect?.width} ${cellRect?.height}`
    }

    cell.classed('exposed', true)

    svg.attr('class', 'voronoi expose-view').attr('viewBox', getViewBox()).attr('width', '100%').attr('height', '35vh')

    return svg
  }

  return null
}
