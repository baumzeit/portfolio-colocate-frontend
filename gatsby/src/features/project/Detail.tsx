import { ExternalLinkIcon } from '@heroicons/react/solid'
import React, { FC, useEffect, useState } from 'react'

import { ProjectDetailFragment } from '../../../graphql-types'
import notEmpty from '../../common/utility/notEmpty'
import { SetModalProps } from '../projects/ProjectsMap'
import { ImageContainer } from './ImageContainer'
import { ImagesPreview } from './ImagesPreview'
import { InfoRow } from './InfoRow'
import { SliderControls } from './SliderControls'

type ProjectDetailProps = SetModalProps

export const ProjectDetail: FC<ProjectDetailProps> = ({ data, onClose, onNext, onPrev, children }) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null)

  const id = data?.id

  useEffect(() => {
    setSelectedImageIdx(null)
  }, [id])

  return data ? (
    <div className="flex justify-center">
      <div className="mx-8 md:mx-14 xl:max-w-[960px] mt-28 mb-16 ">
        <div className={`${children ? '' : 'min-h-[200px] h-[30vh]'} mb-16`}>
          <SliderControls onPrev={onPrev} onNext={onNext} onClose={onClose}>
            {children}
          </SliderControls>
        </div>
        <div className="flex flex-wrap items-center justify-between py-1 pl-2 pr-4 rounded-sm bg-text-secondary text-bg-primary">
          <h1 className="w-full text-2xl md:text-3xl md:w-auto">{data.title}</h1>
          {/* <Organization organization={data.organization} /> */}
        </div>

        <div className="flex flex-col mt-6 mb-6 gap-y-6 gap-x-12 md:flex-row">
          <div className="flex-1">
            <div className="grid" style={{ gridTemplateAreas: '"content"' }}>
              <p
                className="text-justify transition-opacity"
                style={{ gridArea: 'content', opacity: selectedImageIdx === null ? 1 : 0 }}
              >
                {data.description}
              </p>
              {selectedImageIdx !== null && data?.images && (
                <div style={{ gridArea: 'content' }} className="z-10">
                  <ImageContainer
                    image={data.images.filter(notEmpty)[selectedImageIdx]}
                    onClose={() => setSelectedImageIdx(null)}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="md:w-1/3">
            <div>
              {data.organization && (
                <InfoRow
                  rowTitle="Organization:"
                  data={data.organization || {}}
                  render={(organization) => (
                    <a href={organization?.website || ''} target="_blank" rel="noreferrer" className="hover:text-brand">
                      <div className="flex items-center gap-1">
                        {organization?.name || ''}
                        <ExternalLinkIcon className="w-4 h-4" />
                      </div>
                    </a>
                  )}
                />
              )}
              {/* <InfoRow
                rowTitle="Field:"
                data={data.strapiFields?.filter(notEmpty) || []}
                render={(field) => field.name}
              /> */}
              <InfoRow rowTitle="Technologies:" data={data.tags?.filter(notEmpty) || []} render={(tag) => tag.name} />
              {/* <div className="mt-2">
                <Tags tags={data.tags} />
              </div> */}
            </div>
            <div className="mt-5">
              <ImagesPreview images={data.images} onClick={setSelectedImageIdx} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

const Organization = ({ organization }: { organization: ProjectDetailFragment['organization'] }) => {
  return (
    <div>
      {organization && (
        <span className="text-xl md:text-2xl">
          at
          <a className="ml-2 text-brand" href={organization.website || ''}>
            {organization.name}
          </a>
        </span>
      )}
    </div>
  )
}
