import { Delaunay } from 'd3-delaunay'
import * as d3 from 'd3-selection'

export type VoronoiDatum = {
  x: number
  y: number
  imageSrcSet: string
  id: string
  title: string
  slug: string
  areas: {
    color: string
    name: string
    id: string
  }[]
}

export type EnrichedDatum = VoronoiDatum & {
  path: string
  id: string
  index: number
}

export type Dimensions = { width: number; height: number }
export type Padding = {
  top: number
  right: number
  bottom: number
  left: number
}

export type VoronoiOptions = {
  height: number
  width: number
  imageSize: number
}

export type SetExposedCellFn = (id: string | null) => void

export function calculateModel<T extends { x: number; y: number }>(data: T[], bounds: Delaunay.Bounds) {
  const delaunay = Delaunay.from(
    data,
    (d) => d.x,
    (d) => d.y
  )

  const voronoi = delaunay.voronoi(bounds)
  return { voronoi, delaunay }
}

export const restore = (svgNode: SVGSVGElement) => () => {
  const svg = d3.select(svgNode)
  if (!svg.classed('expose-view')) {
    svg.selectAll<SVGPathElement, EnrichedDatum>(`.cell`).classed('hover-selected exposed', false)
  }
}

export const hoverCell = (svgNode: SVGSVGElement) => (selectedId: string) => {
  const svg = d3.select(svgNode)
  svg.selectAll<SVGPathElement, EnrichedDatum>(`.cell`).classed('hover-selected', (d) => d.id === selectedId)
}

export const highlightCellsByAreaId = (svgNode: SVGSVGElement) => (highlightId: string | null) => {
  const svg = d3.select(svgNode)
  svg.selectAll<SVGGElement, EnrichedDatum>('.cell').each(function (d) {
    const cellG = d3.select(this)
    const highlightPath = cellG.select('.highlight-pattern')
    const shouldHighlight = Boolean(d.areas.find((area) => highlightId && area.id === highlightId))

    if (highlightId) {
      highlightPath.style('fill', `url(#diagonalHatchHighlight-${highlightId})`)
    }

    cellG.classed('area-highlight', shouldHighlight)
  })
  svg.classed('highlight-view', !!highlightId)
}
