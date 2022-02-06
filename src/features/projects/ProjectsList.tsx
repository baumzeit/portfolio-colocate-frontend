import { sort } from 'd3-array'
import React, { useCallback, useMemo } from 'react'
import { StringParam, useQueryParams } from 'use-query-params'

import { AreaBaseFragment, ProjectDetailFragment } from '../../../graphql-types'
import { NAVBAR_HEIGHT } from '../../common/components/Layout'
import { Modal } from '../../common/components/Modal'
import { useBodyScrollLock } from '../../common/hooks/useBodyScrollLock'
import { ProjectDetail } from '../project/Detail'
import { ProjectBanner } from '../project/ProjectBanner'
import { useProjectModalData } from './../../common/hooks/useProjectModalData'

export type SetModalProps = {
  data: ProjectDetailFragment | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export type SetModalFn = ({ onClose, onNext, onPrev, data }: SetModalProps) => void

export const ProjectsList = ({ projects }: { fields: AreaBaseFragment[]; projects: ProjectDetailFragment[] }) => {
  const [{ field: highlightedFieldSlug, project: selectedProject }, setQuery] = useQueryParams({
    project: StringParam,
    field: StringParam
  })

  useBodyScrollLock({ enable: !!selectedProject })

  const fieldMatch = useCallback(
    (project: ProjectDetailFragment) =>
      !highlightedFieldSlug || project.areas?.map((area) => area?.slug).includes(highlightedFieldSlug) || false,
    [highlightedFieldSlug]
  )

  const displayProjects = useMemo(() => {
    return highlightedFieldSlug
      ? sort(projects, (a, b) => {
          const matchA = fieldMatch(a)
          const matchB = fieldMatch(b)
          return matchA === matchB ? 0 : matchA ? -1 : 1
        })
      : projects
  }, [fieldMatch, highlightedFieldSlug, projects])

  const modalData = useProjectModalData(displayProjects)

  return (
    <div>
      <ul>
        {displayProjects.map((project, idx) => {
          return (
            <li
              key={project.id}
              className={`-mb-[20px] last:mb-0 first:mt-2 ${!fieldMatch(project) ? 'opacity-40' : ''}`}
            >
              <button
                className={`block w-full`}
                onClick={(e) => {
                  setQuery({ project: project.slug })
                }}
                tabIndex={selectedProject ? -1 : 0}
              >
                <ProjectBanner
                  project={project}
                  index={idx}
                  shift="25px"
                  className="h-[200px] max-h-[200px] xs:h-[240px] xs:max-h-[240px]"
                  hideOverlay
                />
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
                shift="25px"
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
