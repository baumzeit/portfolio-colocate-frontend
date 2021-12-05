import * as d3 from 'd3'

import { EnrichedDatum } from './helpers'

export const highlightCellsByFieldId = (highlightId: number | null) => {
  d3.selectAll<SVGGElement, EnrichedDatum>('g.cell').each(function (d) {
    const cellG = d3.select(this)
    const highlightPath = cellG.select('path.highlight-pattern')

    const isHighlight = cellG.classed('field-highlight')
    // const isSelected = cellG.classed('hover-selected')

    const shouldHighlight = Boolean(d.fields.find((field) => highlightId && field.id === highlightId))

    if (highlightId) {
      highlightPath.style('fill', `url(#diagonalHatchHighlight-${highlightId})`)
    }
    highlightPath
      .style('fill-opacity', isHighlight ? 1 : 0)
      .transition()
      .duration(350)
      .style('fill-opacity', shouldHighlight ? 1 : 0)

    cellG.classed('field-highlight', shouldHighlight)
  })
}
