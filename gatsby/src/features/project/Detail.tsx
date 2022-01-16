import React, { FC } from 'react'

import { ProjectDetailFragment } from '../../../graphql-types'
import notEmpty from '../../common/utility/notEmpty'
import { SetModalProps } from '../projects/Projects'
import { InfoRow } from './InfoRow'
import { SliderControls } from './SliderControls'

const assertData = <T extends Record<string, any>>(data: T, key: keyof T) => data?.[key].filter(notEmpty) || []

type ProjectDetailProps = SetModalProps
export const ProjectDetail: FC<ProjectDetailProps> = ({ data, onClose, onNext, onPrev }) => {
  return data ? (
    <div className="flex justify-center">
      <div className="mx-14 xl:max-w-[960px] mt-28 mb-16 ">
        <div className="min-h-[200px] h-[30vh] mb-16">
          <SliderControls onPrev={onPrev} onNext={onNext} onClose={onClose} />
        </div>
        <div className="flex flex-wrap items-center justify-between py-1 pl-2 pr-4 bg-text-secondary text-bg-primary">
          <h1 className="text-3xl">{data.title}</h1>
          <Organization organization={data.organization} />
        </div>

        <div className="mt-6 mb-6">{data.description}</div>
        <InfoRow rowTitle="Fields:" data={assertData(data, 'strapiFields')} label={(field) => field.name || ''} />
        <InfoRow rowTitle="Tags:" data={assertData(data, 'tags')} label={(tag) => tag.name || ''} />
      </div>
    </div>
  ) : null
}

const Organization = ({ organization }: { organization: ProjectDetailFragment['organization'] }) => {
  return (
    <div>
      {organization && (
        <span className="text-2xl">
          at
          <a className="ml-2 text-brand" href={organization.website || ''}>
            {organization.name}
          </a>
        </span>
      )}
    </div>
  )
}
