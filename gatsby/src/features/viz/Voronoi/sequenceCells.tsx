import * as d3 from 'd3'

import { EnrichedDatum } from './helpers'

export const sequenceCells = (sequence: boolean) => {
  const svg = d3.select<SVGSVGElement, unknown>('#voronoiSvg')
  const svgNode = svg.node()
  const resizeSvg = (node: SVGSVGElement, reset?: boolean) => {
    const resize = () => {
      const bbox = node.getBBox()
      console.log(bbox)
      node.setAttribute('height', reset ? String(window.innerHeight) : String(bbox.y + bbox.height + bbox.y))
    }
    setTimeout(resize, 800)
  }
  console.log('sequence cells')
  if (svgNode) {
    const cells = d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)
    if (sequence) {
      cells.style('transform', function (d) {
        const cellHeight = this.getBoundingClientRect().height
        const scale = 290 / cellHeight
        return `translate(${200 - d.x}px, ${200 + d.index * 300 - d.y}px) scale(${scale})`
      })
      resizeSvg(svgNode)
    } else {
      cells.style('transform', 'translate(0) scale(1)')
      resizeSvg(svgNode)
    }
    svg.classed('expose-view', false)
    svg.classed('list-view', sequence)
  }
}
