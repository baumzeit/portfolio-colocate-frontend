import { sort } from 'd3-array'
import React, { useCallback, useContext, useMemo } from 'react'
import { StringParam, useQueryParams } from 'use-query-params'

import { Modal } from '../../common/components/Modal'
import { useBodyScrollLock } from '../../common/hooks/useBodyScrollLock'
import { ProjectsAreasContext } from '../../pages/projects/[...]'
import { ProjectBanner } from '../project/ProjectBanner'
import { ProjectDetail } from '../project/ProjectDetail'
import { useProjectModalData } from './../../common/hooks/useProjectModalData'

export type SetModalProps = {
  data: Queries.ProjectDetailFragment | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export type DisplayProject = Queries.ProjectDetailFragment & { highlightColor?: string | null }

export type SetModalFn = ({ onClose, onNext, onPrev, data }: SetModalProps) => void

export const ProjectsList = () => {
  const { areas, projects } = useContext(ProjectsAreasContext)

  const [{ area: highlightedAreaSlug, project: selectedProject }, setQuery] = useQueryParams({
    project: StringParam,
    area: StringParam
  })

  const highlightColor = areas.find(({ slug }) => slug === highlightedAreaSlug)?.color

  useBodyScrollLock({ enable: !!selectedProject })

  const areaMatch = useCallback(
    (project: Queries.ProjectDetailFragment) =>
      !highlightedAreaSlug || project.areas?.map((area) => area?.slug).includes(highlightedAreaSlug) || null,
    [highlightedAreaSlug]
  )

  const displayProjects: DisplayProject[] = useMemo(() => {
    const enrichedProjects = projects.map((project) => ({
      ...project,
      highlightColor: areaMatch(project) ? highlightColor : null
    }))
    return enrichedProjects
      ? sort(enrichedProjects, ({ highlightColor: a }, { highlightColor: b }) =>
          Boolean(a) === Boolean(b) ? 0 : a ? -1 : 1
        )
      : enrichedProjects
  }, [areaMatch, highlightColor, projects])

  const modalData = useProjectModalData(displayProjects)

  return (
    <div>
      <ul className="grid grid-cols-1 gap-3 mx-3 sm:grid-cols-2">
        {displayProjects.map((project, idx) => {
          return (
            <li key={project.id} className="overflow-hidden rounded-md">
              <button
                className={`block w-full h-full`}
                onClick={(e) => {
                  setQuery({ project: project.slug })
                }}
                tabIndex={selectedProject ? -1 : 0}
              >
                <ProjectBanner project={project} index={idx} />
              </button>
            </li>
          )
        })}
      </ul>
      <Modal show={!!modalData?.data}>
        {modalData?.data && (
          <ProjectDetail {...modalData}>
            <div className="mx-10 overflow-hidden rounded shadow animate-fadeInFast">
              <ProjectBanner
                project={modalData.data}
                index={projects.findIndex((d) => d.slug === modalData.data?.slug)}
                hideTitle
                hideOverlay
                className="max-h-[160px]"
              />
            </div>
          </ProjectDetail>
        )}
      </Modal>
    </div>
  )
}
