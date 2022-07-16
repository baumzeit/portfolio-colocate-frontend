import * as d3 from 'd3'
import { getSrcSet } from 'gatsby-plugin-image'
import React, { useCallback, useContext, useMemo } from 'react'
import { useWindowSize } from 'rooks'
import { StringParam, useQueryParams } from 'use-query-params'

import { NAVBAR_HEIGHT } from '../../common/components/Layout'
import { Modal } from '../../common/components/Modal'
import { useJitterGrid } from '../../common/hooks/useJitterGrid'
import { useProjectModalData } from '../../common/hooks/useProjectModalData'
import notEmpty from '../../common/utility/notEmpty'
import { ProjectsAreasContext } from '../../pages/projects/[...]'
import { ProjectDetail } from '../project/Detail'
import { VoronoiChart } from '../viz/Voronoi/VoronoiChart'

const jitter = d3.randomNormal(0, 0.05)

const findIdBySlug = (data: { slug?: string | null; id?: string | number | null }[], searchSlug?: string) =>
  searchSlug ? data.find((entity) => entity.slug === searchSlug)?.id?.toString() || null : null

export type SetModalProps = {
  data: null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export type SetModalFn = ({ onClose, onNext, onPrev, data }: SetModalProps) => void

type ProjectsMapProps = {
  minTilePixels?: number
}
export const ProjectsMap = ({ minTilePixels = 50000 }: ProjectsMapProps) => {
  const { projects, areas } = useContext(ProjectsAreasContext)

  const { innerWidth: width, innerHeight } = useWindowSize()
  const [{ area: highlightedAreaSlug, project: exposedSlug }, setQuery] = useQueryParams({
    project: StringParam,
    area: StringParam
  })

  const { getGridPosition, numCols, numRows, height } = useJitterGrid({
    minItems: projects.length,
    width,
    minHeight: innerHeight ? innerHeight - NAVBAR_HEIGHT : innerHeight,
    relMargin: { top: 0.18, right: 0.14, bottom: 0.15, left: 0.14 },
    minTilePixels,
    jitter
  })

  const highlightedAreaId = useMemo(
    () => findIdBySlug(areas, highlightedAreaSlug || undefined),
    [areas, highlightedAreaSlug]
  )

  const exposedProjectId = useMemo(() => findIdBySlug(projects, exposedSlug || undefined), [projects, exposedSlug])

  const onClickCell = useCallback(
    (id: string) => {
      setQuery({ project: projects.find((project) => project.id === id)?.slug || undefined })
    },
    [projects, setQuery]
  )

  const modalData = useProjectModalData(projects)

  const chartData = useMemo(
    () =>
      getGridPosition
        ? projects.map(({ coverImage, id, areas, title, slug }, idx) => {
            const imageData = coverImage?.localFile?.childImageSharp?.gatsbyImageData
            return {
              x: getGridPosition(idx)[0],
              y: getGridPosition(idx)[1],
              imageSrcSet: imageData
                ? getSrcSet(imageData) || 'https://picsum.photos/600/300'
                : 'https://picsum.photos/600/' + (idx % 3 ? (idx % 2 ? '500' : '600') : '400'),
              id: id,
              title: String(title),
              slug: String(slug),
              areas:
                areas?.filter(notEmpty).map((d) => ({
                  color: String(d.color),
                  name: String(d.name),
                  id: d.id
                })) || []
            }
          })
        : null,
    [getGridPosition, projects]
  )

  return (
    <>
      <div id="voronoiContainer overflow-hidden">
        {width && height && chartData ? (
          <VoronoiChart
            data={chartData}
            highlightPatternData={areas}
            width={width}
            height={height}
            imageSize={Math.max(width / numCols, height / numRows) * 1.2}
            highlightedAreaId={highlightedAreaId}
            exposedProjectId={exposedProjectId}
            onClickCell={onClickCell}
          />
        ) : (
          'Loading ...'
        )}
      </div>
      <Modal show={!!exposedSlug} containerClassName="absolute top-0 left-0 w-full h-full">
        {modalData && <ProjectDetail {...modalData} />}
      </Modal>
    </>
  )
}
