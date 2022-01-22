import React, { useMemo } from 'react'
import { StringParam, useQueryParams } from 'use-query-params'

import { FieldBaseFragment, ProjectDetailFragment } from '../../../graphql-types'
import test from '../../../postcss.config'
import { Modal } from '../../common/components/Modal'
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
  const [{ field: highlightedFieldSlug, project: selectedProjectSlug }, setQuery] = useQueryParams({
    project: StringParam,
    field: StringParam
  })

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
    <>
      <div>
        {displayProjects.map((project, idx) => {
          return (
            <button
              key={project.id}
              className={`block w-full mb-1 xs:mb-2 last:mb-0 first:mt-[25px]`}
              onClick={() => setQuery({ project: project.slug })}
            >
              <ProjectBanner project={project} index={idx} shift="25px" />
            </button>
          )
        })}
      </div>
      <Modal id="project-list-detail" show={!!modalData?.data} className="bg-primary">
        {modalData?.data && (
          <ProjectDetail {...modalData}>
            <div className="mx-10">
              <ProjectBanner
                project={modalData.data}
                index={projects.findIndex((d) => d.slug === modalData.data?.slug)}
                shift="25px"
                hideTitle
              />
            </div>
          </ProjectDetail>
        )}
      </Modal>
    </>
  )
}
