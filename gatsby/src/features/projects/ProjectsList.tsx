import React, { useMemo } from 'react'
import { StringParam, useQueryParams } from 'use-query-params'

import { FieldBaseFragment, ProjectDetailFragment } from '../../../graphql-types'
import { Modal } from '../../common/components/Modal'
import { NAVBAR_HEIGHT } from '../../common/components/Navbar'
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

export const ProjectsList = ({ projects }: { fields: FieldBaseFragment[]; projects: ProjectDetailFragment[] }) => {
  const modalData = useProjectModalData(projects)
  const [{ field: highlightedFieldSlug, project: selectedProject }, setQuery] = useQueryParams({
    project: StringParam,
    field: StringParam
  })

  useBodyScrollLock({ enable: !!selectedProject })

  const displayProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          !highlightedFieldSlug ||
          project.strapiFields?.map((field) => field?.slug).includes(highlightedFieldSlug) ||
          false
      ),
    [highlightedFieldSlug, projects]
  )

  return (
    <div>
      <ul>
        {displayProjects.map((project, idx) => {
          return (
            <li key={project.id} className="-mb-[20px] xs:-mb-[16px] last:mb-0 first:mt-[25px]">
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
                  className="h-[160px] max-h-[160px] xs:h-[240px] xs:max-h-[240px]"
                />
              </button>
            </li>
          )
        })}
      </ul>
      <Modal
        show={!!modalData?.data}
        className="bg-primary"
        containerClassName={`fixed left-0 right-0 bottom-0 top-[${NAVBAR_HEIGHT}px] overflow-y-auto`}
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
                disableImageOpacity
                className="max-h-[160px]"
              />
            </div>
          </ProjectDetail>
        )}
      </Modal>
    </div>
  )
}
