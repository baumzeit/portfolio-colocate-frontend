import { sort } from 'd3-array'
import React, { useCallback, useMemo } from 'react'

import { Modal } from '../../common/components/Modal'
import { ModalNavbar } from '../../common/components/ModalNavbar'
import { ProjectsAndAreas } from '../../pages/projects/[...]'
import { DetailContainer } from '../project/DetailContainer'
import { ProjectBanner } from '../project/ProjectBanner'
import { useActiveProject } from '../project/use-active-project'
import { useHighlightArea } from '../project/use-highlight-area'

export type DisplayProject = Queries.ProjectDetailFragment & { highlightColor?: string | null }

const ProjectsList = ({ projects }: ProjectsAndAreas) => {
  const { highlightArea } = useHighlightArea()
  const { setProject } = useActiveProject()

  const highlightAreaSlug = highlightArea?.slug

  const areaMatch = useCallback(
    (project: Queries.ProjectDetailFragment) =>
      Boolean(!highlightAreaSlug || project.areas?.map((area) => area?.slug).includes(highlightAreaSlug)),
    [highlightAreaSlug]
  )

  const displayProjects: DisplayProject[] = useMemo(() => {
    const enrichedProjects = projects.map((project) => ({
      ...project,
      highlightColor: areaMatch(project) ? highlightArea?.color : null
    }))
    return enrichedProjects
      ? sort(enrichedProjects, ({ highlightColor: a }, { highlightColor: b }) =>
          Boolean(a) === Boolean(b) ? 0 : a ? -1 : 1
        )
      : enrichedProjects
  }, [areaMatch, highlightArea?.color, projects])

  return (
    <>
      <ul className="grid grid-cols-1 gap-3 mx-3 sm:grid-cols-2">
        {displayProjects.map((project, idx) => {
          return (
            <li key={project.id} className="overflow-hidden rounded-sm">
              <button
                className={`block w-full h-full`}
                onClick={() => {
                  setProject(project.slug)
                }}
              >
                <ProjectBanner project={project} index={idx} />
              </button>
            </li>
          )
        })}
      </ul>
      <ProjectDetailModal />
    </>
  )
}

export default ProjectsList

export const ProjectDetailModal = () => {
  const modalData = useActiveProject()

  return (
    <Modal show={!!modalData.project} navbar={<ModalNavbar onClose={modalData.close} />}>
      {modalData?.project && (
        <DetailContainer {...modalData}>
          <div className="mx-10 overflow-hidden rounded shadow animate-fadeInFast">
            <ProjectBanner project={modalData.project} hideTitle hideOverlay className="max-h-[160px]" />
          </div>
        </DetailContainer>
      )}
    </Modal>
  )
}
