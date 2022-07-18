import React, { useCallback, useState } from 'react'
import { StringParam, useQueryParams } from 'use-query-params'

import { Modal } from '../../../common/components/Modal'
import { ModalNavbar } from '../../../common/components/ModalNavbar'
import { UseJitterGridReturn } from '../../../common/hooks/use-jitter-grid'
import { DetailContainer } from '../../project/DetailContainer'
import { useProjectModalData } from '../../project/use-project-modal-data'
import { useProjectsChartData } from '../../projects/use-projects-chart-data'
import { RenderSingularCell } from './RenderSingularCell'
import { useVoronoiModel } from './use-voronoi-model'
import { VoronoiChart } from './VoronoiChart'

type VoronoiContainerProps = {
  projects: Queries.ProjectDetailFragment[]
  areas: Queries.AreaBaseFragment[]
} & Required<UseJitterGridReturn>

export const VoronoiContainer = ({
  gridSpecs: { width, height, numCols, numRows },
  projects,
  areas,
  getGridCoordinates
}: VoronoiContainerProps) => {
  const [{ area: highlightedAreaSlug, project: exposedSlug }, setQuery] = useQueryParams({
    project: StringParam,
    area: StringParam
  })

  const [voronoiInitialized, setVoronoiInitialized] = useState(false)

  const exposedProjectId = findIdBySlug(exposedSlug, projects)
  const highlightedAreaId = findIdBySlug(highlightedAreaSlug, areas)

  const onClickCell = useCallback(
    (id: string) => {
      setQuery({ project: findSlugById(id, projects) })
    },
    [projects, setQuery]
  )

  // useBodyScrollLock({ enable: !!exposedSlug })

  const modalData = useProjectModalData(projects)
  const chartData = useProjectsChartData({ projects, getGridCoordinates })

  const { voronoi, enrichedData } = useVoronoiModel({ data: chartData, width, height })
  const exposedEnrichedDatum = enrichedData.find((d) => d.id === exposedProjectId)

  return (
    <>
      <div id="voronoiContainer">
        <VoronoiChart
          enrichedData={enrichedData}
          voronoi={voronoi}
          highlightPatternData={areas}
          width={width}
          height={height}
          imageSize={Math.max(width / numCols, height / numRows) * 1.2}
          highlightedAreaId={highlightedAreaId}
          exposedProjectId={exposedProjectId}
          onClickCell={onClickCell}
          onInitialized={() => setVoronoiInitialized(true)}
        />
      </div>
      <Modal show={!!exposedSlug && voronoiInitialized} navbar={<ModalNavbar closeQueryParam="project" />}>
        {modalData && exposedEnrichedDatum && (
          <DetailContainer {...modalData}>
            <RenderSingularCell
              width={width}
              height={height}
              imageSize={Math.max(width / numCols, height / numRows) * 1.2}
              enrichedDatum={exposedEnrichedDatum}
            />
          </DetailContainer>
        )}
      </Modal>
    </>
  )
}

const findIdBySlug = (
  searchSlug: string | undefined | null,
  data: { slug?: string | null; id?: string | number | null }[]
) => (searchSlug ? data.find((entity) => entity.slug === searchSlug)?.id?.toString() || null : null)

const findSlugById = (
  searchId: string | undefined | null,
  data: { slug?: string | null; id?: string | number | null }[]
) => (searchId ? data.find((entity) => entity.id === searchId)?.slug || null : null)
