import React from 'react'

import { Modal } from '../../../common/components/Modal'
import { ModalNavbar } from '../../../common/components/ModalNavbar'
import { UseJitterGridReturn } from '../../../common/hooks/use-jitter-grid'
import { DetailContainer } from '../../project/DetailContainer'
import { useActiveProject } from '../../project/use-active-project'
import { useHighlightArea } from '../../project/use-highlight-area'
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
  const { highlightArea } = useHighlightArea()

  const modalData = useActiveProject()
  const chartData = useProjectsChartData({ projects, getGridCoordinates })
  const { voronoi, enrichedData } = useVoronoiModel({ data: chartData, width, height })
  const exposedEnrichedDatum = enrichedData.find((d) => d.id === modalData.project?.id)

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
          highlightedAreaId={highlightArea?.id}
          onClickCell={modalData.setProject}
        />
      </div>
      <Modal show={!!modalData.project?.id} navbar={<ModalNavbar onClose={modalData.close} />}>
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
