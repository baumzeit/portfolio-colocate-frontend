import { sort } from 'd3-array'
import React, { useCallback, useContext, useMemo } from 'react'
import { StringParam, useQueryParams } from 'use-query-params'

import { ProjectDetailFragment } from '../../../graphql-types'
import { NAVBAR_HEIGHT } from '../../common/components/Layout'
import { Modal } from '../../common/components/Modal'
import { useBodyScrollLock } from '../../common/hooks/useBodyScrollLock'
import { ProjectsAreasContext } from '../../pages/projects/[...]'
import { ProjectDetail } from '../project/Detail'
import { ProjectBanner } from '../project/ProjectBanner'
import { useProjectModalData } from './../../common/hooks/useProjectModalData'

export type SetModalProps = {
  data: ProjectDetailFragment | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export type DisplayProject = ProjectDetailFragment & { highlightColor?: string | null }

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
    (project: ProjectDetailFragment) =>
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
      <Modal
        show={!!modalData?.data}
        containerClassName={`fixed left-0 right-0 bottom-0 overflow-y-auto`}
        className="min-h-full bg-primary "
        style={{ top: NAVBAR_HEIGHT + 'px' }}
      >
        {modalData?.data && (
          <ProjectDetail {...modalData}>
            <div className="mx-10 animate-fadeInFast">
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
