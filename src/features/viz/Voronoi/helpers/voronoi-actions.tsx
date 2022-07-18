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
  exposeCellHeight: number
  exposeOffsetTop: number
}

export type SetExposedCellFn = (id: string | null) => void

export const initializeVoronoiActions = (svgNode: SVGSVGElement, opts: VoronoiOptions) => {
  const svg = d3.select(svgNode)

  const restore = () => {
    if (!svg.classed('expose-view')) {
      svg.selectAll<SVGPathElement, EnrichedDatum>(`.cell`).classed('hover-selected exposed', false)
    }
  }

  const hoverCell = (selectedId: string) => {
    svg.selectAll<SVGPathElement, EnrichedDatum>(`.cell`).classed('hover-selected', (d) => d.id === selectedId)
  }

  const highlightCellsByAreaId = (highlightId: string | null) => {
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

  const exposeCell = (exposedId: string | null) => {
    const isClear = exposedId === null
    // const isExposed = (d: EnrichedDatum) => exposedId !== null && d.id === exposedId

    // svg.selectAll<SVGCircleElement, EnrichedDatum>(`.focus-dot`).attr('tabindex', (d) => (isClear ? 10 + d.index : -1))

    // const cells = svg.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)

    // svg.classed('expose-view', !isClear)
    // cells.classed('exposed', isExposed)

    // cells.style('transform', function (d) {
    //   const scale = opts.exposeCellHeight / opts.imageSize
    //   const cellRect = d3
    //     .select<SVGGElement, EnrichedDatum>(this)
    //     ?.select<SVGPathElement>('.cell-border')
    //     ?.node()
    //     ?.getBBox()
    //   const ratio = cellRect?.width && cellRect?.height ? cellRect.width / cellRect.height : 1
    //   const relOffsetX = cellRect ? 0.5 - (d.x - cellRect.x) / cellRect.width : 0
    //   const relOffsetY = cellRect ? 0.5 - (d.y - cellRect.y) / cellRect.height : 0
    //   const exposeCellWidth = opts.exposeCellHeight * ratio
    //   const navbarAndHeightCenter = opts.exposeOffsetTop + opts.exposeCellHeight / 2
    //   const transform = isExposed(d)
    //     ? `translate(${opts.width / 2 - d.x - (relOffsetX * exposeCellWidth) / 2}px, ${
    //         navbarAndHeightCenter - d.y - (relOffsetY * opts.exposeCellHeight) / 2
    //       }px) scale(${scale})`
    //     : 'translate(0, 0) scale(1) '
    //   return transform
    // })
  }

  return {
    hoverCell,
    exposeCell,
    restore,
    highlightCellsByAreaId,
    options: opts
  }
}

export function calculateModel<T extends { x: number; y: number }>(data: T[], bounds: Delaunay.Bounds) {
  const delaunay = Delaunay.from(
    data,
    (d) => d.x,
    (d) => d.y
  )

  const voronoi = delaunay.voronoi(bounds)
  return { voronoi, delaunay }
}
