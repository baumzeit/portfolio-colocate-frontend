import * as d3 from 'd3'

export type VoronoiDatum = {
  x: number
  y: number
  imageUrl: string
  id: string
  title: string
  slug: string
  fields: {
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
  width: number
  height: number
  cellGap: number
  imageSize: number
  exposeCellHeight: number
  exposeOffsetTop: number
  padding: Padding
}

export type SetExposedCellFn = (id: string | null) => void

export const initializeVoronoiActions = (svg: SVGSVGElement, originalData: VoronoiDatum[], opts: VoronoiOptions) => {
  const bounds = [
    Number(opts.padding.left) - opts.cellGap / 2,
    Number(opts.padding.top) - opts.cellGap / 2,
    opts.width - opts.cellGap / 2,
    opts.height - opts.cellGap / 2
  ]

  const { voronoi, delaunay } = calculateModel(originalData, bounds)

  const data: EnrichedDatum[] = originalData.map((d, idx) => ({
    ...d,
    path: voronoi.renderCell(idx),
    id: String(d.id),
    index: idx
  }))

  const restore = () => {
    if (!d3.select(svg).classed('expose-view') && !d3.select(svg).classed('list-view')) {
      d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`).classed('hover-selected exposed', false)
    }
  }

  const selectCell = (selectedId: string) => {
    d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`).classed('hover-selected', (d) => d.id === selectedId)
  }

  const highlightCellsByFieldId = (highlightId: string | null) => {
    d3.selectAll<SVGGElement, EnrichedDatum>('g.cell').each(function (d) {
      const cellG = d3.select(this)
      const highlightPath = cellG.select('.highlight-pattern')

      const shouldHighlight = Boolean(d.fields.find((field) => highlightId && field.id === highlightId))

      if (highlightId) {
        highlightPath.style('fill', `url(#diagonalHatchHighlight-${highlightId})`)
      }

      cellG.classed('field-highlight', shouldHighlight)
    })
    d3.select(svg).classed('highlight-view', !!highlightId)
  }

  const exposeCell = (exposedId: string | null) => {
    const isExposed = (d: EnrichedDatum) => exposedId !== null && d.id === exposedId
    const isClear = exposedId === null

    const baseLayerCells = d3.selectAll<SVGPathElement, EnrichedDatum>(`.base-layer .cell`)
    d3.selectAll<SVGCircleElement, EnrichedDatum>(`.focus-dot`).attr('tabindex', (d) => (isClear ? 10 + d.index : -1))

    baseLayerCells.style('transform', function (d) {
      // const cellRect = d3
      //   .select<SVGGElement, EnrichedDatum>(this)
      //   ?.select<SVGPathElement>('.cell-border')
      //   ?.node()
      //   ?.getBBox()

      // const imageCutoffY = Math.max(
      //   Math.max(opts.imageSize / 2 - (d.y - cellRect.y), opts.imageSize / 2 - (cellRect.y + cellRect?.height - d.y)),
      //   0
      // )
      // const imageCutoffX = Math.max(
      //   Math.max(opts.imageSize / 2 - (d.x - cellRect.x), opts.imageSize / 2 - (cellRect.x + cellRect?.width - d.x)),
      //   0
      // )
      // const imageCellScaleY = (opts.imageSize - imageCutoffY) / cellRect?.height
      // const imageCellScaleX = (opts.imageSize - imageCutoffX) / cellRect?.width

      // const centerOffsetY = imageCutoffY //* imageCellScaleY
      // const centerOffsetX = imageCutoffX //* imageCellScaleX

      const scale = opts.exposeCellHeight / opts.imageSize

      const navbarAndScaledImageCenter = opts.exposeOffsetTop + opts.exposeCellHeight / 2
      const transform = isExposed(d)
        ? `translate(${opts.width / 2 - d.x}px, ${navbarAndScaledImageCenter - d.y}px) scale(${scale})`
        : 'translate(0, 0) scale(1) '
      return transform
    })

    d3.select(svg).classed('expose-view', !isClear)
    baseLayerCells.classed('exposed', isExposed)
  }

  return {
    selectCell,
    exposeCell,
    highlightCellsByFieldId,
    restore,
    data,
    options: opts,
    voronoi,
    delaunay
  }
}

export function calculateModel<T extends { x: number; y: number }>(data: T[], bounds: number[]) {
  const delaunay = d3.Delaunay.from(
    data,
    (d) => d.x,
    (d) => d.y
  )

  const voronoi = delaunay.voronoi(bounds)
  return { voronoi, delaunay }
}
