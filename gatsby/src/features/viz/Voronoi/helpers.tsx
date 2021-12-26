import * as d3 from 'd3'

export type VoronoiDatum = {
  x: number
  y: number
  imageUrl: string
  id: string
  title: string
  description: string
  fields: {
    color?: string
    name?: string
    id?: string
  }[]
}

export type EnrichedDatum = VoronoiDatum & {
  path: string
  id: string
}

export type Dimensions = { width: number; height: number }
export type Padding = {
  top: number
  right: number
  bottom: number
  left: number
}

export type VoronoiOptions = {
  offset: number
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

export const initializeVoronoiActions = (
  originalData: VoronoiDatum[],
  { width, height }: Dimensions,
  opts: VoronoiOptions,
  setModal: SetModalFn
) => {
  const bounds = [
    Number(opts.padding.left) - opts.cellGap / 2,
    Number(opts.padding.top) - opts.cellGap / 2,
    width - Number(opts.padding.left) + opts.cellGap / 2,
    height - Number(opts.padding.left) + opts.cellGap / 2
  ]
  const { voronoi } = calculateModel(originalData, bounds)

  const data: EnrichedDatum[] = originalData.map((d, idx) => ({
    ...d,
    path: voronoi.renderCell(idx),
    id: String(d.id)
  }))

  const restore = () => {
    d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)
      .classed('hover-selected', false)
      .selectAll('.pattern')
      .transition('restore')
      .duration(opts.transitionDuration)
      .style('fill-opacity', 0.9)
  }

  const selectCell = (selectedId: string) => {
    console.log('select cell')

    d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)
      .classed('hover-selected', (d) => d.id === selectedId)
      .transition('select-pattern-selected')
      .duration(opts.transitionDuration)
      .select('.pattern')
      .style('fill-opacity', (d) => (d.id === selectedId ? 0 : 0.9))
  }

  const exposeCell = (exposedId: string | null) => {
    const cells = d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)

    cells
      .classed('hover-selected', (d) => exposedId !== null && d.id === exposedId)
      .select('.pattern')
      .transition()
      .duration(opts.transitionDuration)
      .style('fill-opacity', (d) => exposedId !== null && (d.id === exposedId ? 0 : 0.9))

    const defsCell = d3.selectAll<SVGGElement, EnrichedDatum>('.defs-cell')
    const imageCell = d3.selectAll<SVGGElement, EnrichedDatum>('.image-cell')
    const baseCell = d3.selectAll<SVGGElement, EnrichedDatum>('.base-cell')
    const definitionCell = d3.selectAll<SVGGElement, EnrichedDatum>('.definition-cell')
    const contentCell = d3.selectAll<SVGGElement, EnrichedDatum>('.content-cell')

    cells
      .classed('exposed', (d) => exposedId !== null && d.id === exposedId)
      .attr('transform-origin', '50% 50%')
      .style('pointer-events')

    const scaleTransform = `scale(${Math.sqrt(data.length)})`
    const translateTransform = (x: number, y: number) => `translate(${width / 2 - x}, ${height / 2 - y})`

    defsCell
      .selectAll<SVGPathElement, EnrichedDatum>('clipPath.path')
      .transition()
      .duration(opts.transitionDuration)
      .attr('transform', (d) => scaleTransform + translateTransform(d.x, d.y))

    d3.selectAll<SVGGElement, EnrichedDatum>([...baseCell, ...definitionCell, ...contentCell, ...imageCell])
      .call((sel) =>
        sel
          .transition('fade-out-others')
          .duration(opts.transitionDuration * 0.6)
          .style('opacity', (d) => (exposedId === null || exposedId === d.id ? 1 : 0))
      )
      .transition()
      .duration(opts.transitionDuration)
      .attr('transform', (d) =>
        d.id === exposedId ? scaleTransform + translateTransform(d.x, d.y) : 'scale(1) translate(0, 0)'
      )

    contentCell
      .transition()
      .duration(opts.transitionDuration)
      .attr('transform', (d) =>
        exposedId !== null && d.id === exposedId ? translateTransform(d.x, d.y) : 'translate(0,0)'
      )

    const exposeIndex = data.findIndex((d) => d.id === exposedId)
    const nextIndex = (exposeIndex % (data.length - 1)) + 1
    const prevIndex = exposeIndex > 0 ? exposeIndex - 1 : data.length - 1

    setModal({
      data: exposeIndex >= 0 ? data[exposeIndex] : null,
      onClose: () => (exposedId ? exposeCell(null) : () => {}),
      onNext: () => (exposedId ? exposeCell(data[nextIndex].id) : () => {}),
      onPrev: () => (exposedId ? exposeCell(data[prevIndex].id) : () => {})
    })
  }

  return { selectCell, exposeCell, restore, data, options: opts, voronoi, width, height }
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
