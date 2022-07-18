import { Voronoi } from 'd3-delaunay'
import * as d3 from 'd3-selection'
import React, { SVGProps, useCallback, useEffect, useMemo, useState } from 'react'

import './voronoi.scss'
import { drawVoronoi } from './helpers/drawVoronoi'
import { EnrichedDatum, initializeVoronoiActions, VoronoiOptions } from './helpers/voronoiActions'

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
  exposedProjectId?: string | null
  onInitialized?: () => void
}

export const VoronoiChart = ({
  enrichedData,
  highlightPatternData,
  width,
  height,
  voronoi,
  imageSize,
  highlightedAreaId = null,
  exposedProjectId = null,
  onClickCell,
  onInitialized
}: VoronoiChartProps) => {
  const [svgNode, setSvgNode] = useState<SVGSVGElement | null>(null)
  const [initialized, setInitialized] = useState(false)

  const onRefChange = useCallback((node: SVGSVGElement | null) => {
    setSvgNode(node)
  }, [])

  const voronoiOptions = useMemo<VoronoiOptions | undefined>(() => {
    if (width && height) {
      const options = {
        width,
        height,
        imageSize,
        exposeOffsetTop: 56,
        exposeCellHeight: Math.max(window.innerHeight * 0.3, 250)
      }
      // console.log('voronoi | set options', options)
      return options
    }
  }, [height, imageSize, width])

  const voronoiActions = useMemo(() => {
    if (voronoiOptions && svgNode) {
      return initializeVoronoiActions(svgNode, voronoiOptions)
    }
  }, [svgNode, voronoiOptions])

  useEffect(() => {
    if (svgNode && voronoiActions) {
      const svg = d3
        .select(svgNode)
        .attr('id', 'voronoi-projects')
        .attr('fill', 'none')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')

      drawVoronoi({
        svg,
        ...voronoiActions,
        data: enrichedData,
        voronoi,
        onClick: onClickCell,
        onHover: voronoiActions.hoverCell,
        onMouseLeave: voronoiActions.restore
      })
      setInitialized(true)
      if (onInitialized) {
        onInitialized()
      }
    }
  }, [enrichedData, initialized, onClickCell, onInitialized, svgNode, voronoi, voronoiActions])

  useEffect(() => {
    if (voronoiActions && initialized) {
      voronoiActions.exposeCell(exposedProjectId)
    }
  }, [exposedProjectId, initialized, voronoiActions])

  useEffect(() => {
    if (voronoiActions && initialized) {
      voronoiActions.highlightCellsByAreaId(highlightedAreaId)
    }
  }, [highlightedAreaId, initialized, voronoiActions])

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
