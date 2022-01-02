import * as d3 from 'd3'

import { EnrichedDatum } from './helpers'

export const highlightCellsByFieldId = (highlightId: string | null) => {
  d3.selectAll<SVGGElement, EnrichedDatum>('g.cell').each(function (d) {
    const cellG = d3.select(this)
    const highlightPath = cellG.select('.highlight-pattern')

    const shouldHighlight = Boolean(d.fields.find((field) => highlightId && field.id === highlightId))

    if (highlightId) {
      highlightPath.style('fill', `url(#diagonalHatchHighlight-${highlightId})`)
    }

    cellG.classed('hover-selected field-highlight', shouldHighlight)
  })
}
