import * as d3 from 'd3'

export type VoronoiDatum = {
  x: number
  y: number
  imageUrl: string
  id: string
  title: string
  description: string
  slug: string
  fields: {
    color?: string
    name?: string
    id?: string
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
  transitionDuration: number
  cellGap: number
  imageSize: number
  padding: Padding
}

export type SetModalProps = {
  data: EnrichedDatum | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export type SetModalFn = ({ data, onClose, onNext, onPrev }: SetModalProps) => void
export type SetExposedCellFn = (id: string | null) => void

export const initializeVoronoiActions = (originalData: VoronoiDatum[], opts: VoronoiOptions) => {
  const bounds = [
    Number(opts.padding.left) - opts.cellGap / 2,
    Number(opts.padding.top) - opts.cellGap / 2,
    opts.width - Number(opts.padding.left) + opts.cellGap / 2,
    opts.height - Number(opts.padding.left) + opts.cellGap / 2
  ]

  const { voronoi, delaunay } = calculateModel(originalData, bounds)

  const data: EnrichedDatum[] = originalData.map((d, idx) => ({
    ...d,
    path: voronoi.renderCell(idx),
    id: String(d.id),
    index: idx
  }))

  const restore = () => {
    if (!d3.select('svg').classed('expose-view')) {
      d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`).classed('hover-selected exposed', false)
    }
  }

  const selectCell = (selectedId: string) => {
    d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`).classed('hover-selected', (d) => d.id === selectedId)
  }

  const exposeCell = (exposedId: string | null) => {
    const isExposed = (d: EnrichedDatum) => exposedId !== null && d.id === exposedId
    const isClear = exposedId === null

    const scaleTransform = `scale(${Math.sqrt(data.length)})`
    const translateTransform = (d: EnrichedDatum) => `translate(${opts.width / 2 - d.x}px, ${opts.height / 2 - d.y}px)`
    const scaleTranslateExposed = (d: EnrichedDatum) =>
      isExposed(d) ? scaleTransform + translateTransform(d) : 'scale(1) translate(0, 0)'

    const cells = d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)

    // cells.style(
    //   'transform',
    //   scaleTranslateExposed
    // )

    d3.select('svg').classed('expose-view', !isClear)
    cells.classed('exposed', isExposed)
  }

  return { selectCell, exposeCell, restore, data, options: opts, voronoi, delaunay }
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
