import { Voronoi } from 'd3-delaunay'
import * as d3 from 'd3-selection'
import React, { memo, SVGProps, useCallback, useEffect, useMemo, useState } from 'react'

import './voronoi.scss'
import { drawVoronoi } from './helpers/draw-voronoi'
import { EnrichedDatum, highlightCellsByAreaId, hoverCell, restore, VoronoiOptions } from './helpers/voronoi-actions'

type HighlightPatternDatum = { color?: string | null; id: string | number }

export type VoronoiChartProps = {
  enrichedData: EnrichedDatum[]
  voronoi: Voronoi<EnrichedDatum>
  highlightPatternData: HighlightPatternDatum[]
  width: number
  height: number
  imageSize: number
  onClickCell: (id: string) => void
  highlightedAreaId?: string | null
}

export const VoronoiChart = memo(
  ({
    enrichedData,
    highlightPatternData,
    width,
    height,
    voronoi,
    imageSize,
    highlightedAreaId = null,
    onClickCell
  }: VoronoiChartProps) => {
    const [svgNode, setSvgNode] = useState<SVGSVGElement | null>(null)
    const [initialized, setInitialized] = useState(false)

    const onRefChange = useCallback((node: SVGSVGElement | null) => {
      setSvgNode(node)
    }, [])

    const voronoiOptions = useMemo<VoronoiOptions | undefined>(() => {
      if (width && height) {
        return {
          width,
          height,
          imageSize
        }
      }
    }, [height, imageSize, width])

    useEffect(() => {
      if (svgNode && voronoiOptions) {
        const svg = d3
          .select(svgNode)
          .attr('id', 'voronoi-projects')
          .attr('fill', 'none')
          .attr('stroke-linejoin', 'round')
          .attr('stroke-linecap', 'round')

        drawVoronoi({
          svg,
          voronoi,
          data: enrichedData,
          options: voronoiOptions,
          onClick: onClickCell,
          onHover: hoverCell(svgNode),
          onMouseLeave: restore(svgNode)
        })
        setInitialized(true)
      }
    }, [enrichedData, initialized, onClickCell, svgNode, voronoi, voronoiOptions])

    useEffect(() => {
      if (initialized && svgNode) {
        highlightCellsByAreaId(svgNode)(highlightedAreaId)
      }
    }, [highlightedAreaId, initialized, svgNode])

    return (
      <>
        <svg ref={onRefChange} width={width} height={height} className="voronoi cursor-pointer animate-fadeIn">
          <defs>
            <HatchPattern id="diagonalHatch" className="stroke-bg-secondary" />
            {highlightPatternData.map(({ color, id }) => (
              <HatchPattern key={id} stroke={color || 'black'} id={'diagonalHatchHighlight-' + id} />
            ))}
          </defs>
        </svg>
      </>
    )
  }
)

const HatchPattern = ({ id, ...rest }: Pick<HighlightPatternDatum, 'id'> & SVGProps<SVGPathElement>) => {
  return (
    <pattern key={id} id={String(id)} patternUnits="userSpaceOnUse" width="4" height="4">
      <path
        d="M-1,1 l2,-2
          M0,4 l4,-4
          M3,5 l2,-2"
        strokeWidth="1"
        opacity={0.8}
        {...rest}
      />
    </pattern>
  )
}
