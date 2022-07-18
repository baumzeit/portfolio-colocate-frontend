import { Delaunay } from 'd3-delaunay'
import { useMemo } from 'react'

import { EnrichedDatum, VoronoiDatum } from './helpers/voronoiActions'

const padding = { top: 0, left: 1.5 * 16, right: 1.5 * 16, bottom: 1.5 * 16 }
const cellGap = 22

type UseVoronoiModelProps = {
  width: number
  height: number
  data: VoronoiDatum[]
}
export const useVoronoiModel = ({ width, height, data }: UseVoronoiModelProps) => {
  const delaunay = useMemo(() => {
    return Delaunay.from(
      data,
      (d) => d.x,
      (d) => d.y
    )
  }, [data])

  const voronoi = useMemo(() => {
    const bounds: [number, number, number, number] = [
      Number(padding.left) - cellGap / 2,
      Number(padding.top) - cellGap / 2,
      width - cellGap / 2,
      height - cellGap / 2
    ]
    return delaunay.voronoi(bounds)
  }, [delaunay, height, width])

  const enrichedData: EnrichedDatum[] = useMemo(
    () =>
      data.map((d, idx) => ({
        ...d,
        path: voronoi.renderCell(idx),
        id: String(d.id),
        index: idx
      })),
    [data, voronoi]
  )

  return { delaunay, voronoi, enrichedData }
}
