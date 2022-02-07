import * as d3 from 'd3'
import { getSrcSet } from 'gatsby-plugin-image'
import React, { useCallback, useContext, useMemo } from 'react'
import { useWindowSize } from 'rooks'
import { StringParam, useQueryParams } from 'use-query-params'

import { AreaBaseFragment, ProjectDetailFragment } from '../../../graphql-types'
import { NAVBAR_HEIGHT } from '../../common/components/Layout'
import { Modal } from '../../common/components/Modal'
import { useJitterGrid } from '../../common/hooks/useJitterGrid'
import { useProjectModalData } from '../../common/hooks/useProjectModalData'
import notEmpty from '../../common/utility/notEmpty'
import { ProjectsAreasContext } from '../../pages/projects'
import { ProjectDetail } from '../project/Detail'
import { VoronoiChart } from '../viz/Voronoi/VoronoiChart'

const jitter = d3.randomNormal(0, 0.05)

const findIdBySlug = (data: { slug?: string | null; id?: string | number | null }[], searchSlug?: string) =>
  searchSlug ? data.find((entity) => entity.slug === searchSlug)?.id?.toString() || null : null

export type SetModalProps = {
  data: ProjectDetailFragment | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export type SetModalFn = ({ onClose, onNext, onPrev, data }: SetModalProps) => void

export const ProjectsMap = () => {
  const { projects, areas } = useContext(ProjectsAreasContext)

  const { innerWidth: width, innerHeight: height } = useWindowSize()
  const [{ area: highlightedAreaSlug, project: exposedSlug }, setQuery] = useQueryParams({
    project: StringParam,
    area: StringParam
  })

  const { getGridPosition, numCols, numRows } = useJitterGrid({
    minItems: projects.length,
    width,
    height: height ? height - NAVBAR_HEIGHT : height,
    relMargin: { top: 0.18, right: 0.14, bottom: 0.15, left: 0.14 },
    jitter
  })

  const highlightedAreaId = useMemo(
    () => findIdBySlug(areas, highlightedAreaSlug || undefined),
    [areas, highlightedAreaSlug]
  )

  const exposedProjectId = useMemo(() => findIdBySlug(projects, exposedSlug || undefined), [projects, exposedSlug])

  const onClickCell = useCallback(
    (id) => {
      setQuery({ project: projects.find((project) => project.id === id)?.slug || undefined, area: undefined })
    },
    [projects, setQuery]
  )

  const modalData = useProjectModalData(projects)

  const chartData = useMemo(
    () =>
      getGridPosition
        ? projects.map(({ coverImage, id, areas, title, slug }, idx) => ({
            x: getGridPosition(idx)[0],
            y: getGridPosition(idx)[1],
            imageSrcSet: coverImage
              ? getSrcSet(coverImage?.file?.childImageSharp?.gatsbyImageData) || 'https://picsum.photos/600/300'
              : 'https://picsum.photos/600/' + (idx % 3 ? (idx % 2 ? '500' : '600') : '400'),
            // ? images?.[0]?.file?.childImageSharp?.fixed?.srcSet || 'https://picsum.photos/600/300'
            // : 'https://picsum.photos/600/' + (idx % 3 ? (idx % 2 ? '500' : '600') : '400'),
            id: id,
            title: String(title),
            slug: String(slug),
            areas:
              areas?.filter(notEmpty).map((d) => ({
                color: String(d.color),
                name: String(d.name),
                id: d.id
              })) || []
          }))
        : null,
    [getGridPosition, projects]
  )

  return (
    <>
      <div id="voronoiContainer" className="overflow-hidden">
        {width && height && chartData ? (
          <VoronoiChart
            data={chartData}
            highlightPatternData={areas}
            width={width}
            height={height - NAVBAR_HEIGHT}
            imageSize={Math.max(width / numCols, height / numRows) * 1}
            highlightedAreaId={highlightedAreaId}
            exposedProjectId={exposedProjectId}
            onClickCell={onClickCell}
          />
        ) : (
          'Loading ...'
        )}
      </div>
      <Modal show={!!exposedSlug} enterClass="delay-150" containerClassName="absolute top-0 left-0 w-full h-full">
        {modalData && <ProjectDetail {...modalData} />}
      </Modal>
    </>
  )
}
