import { ExternalLinkIcon } from '@heroicons/react/solid'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import React, { FC, RefObject, useEffect, useMemo, useState } from 'react'

import { Tags } from '../../common/components/Tags'
import notEmpty from '../../common/utility/notEmpty'
import { SetModalProps } from '../projects/ProjectsMap'
import { ImageContainer } from './ImageContainer'
import { ImagesPreview } from './ImagesPreview'
import { InfoRow } from './InfoRow'
import { SliderControls } from './SliderControls'

type ProjectDetailProps = SetModalProps & { scrollContainer?: RefObject<HTMLDivElement> }

export const ProjectDetail: FC<ProjectDetailProps> = ({ data, onClose, onNext, onPrev, scrollContainer, children }) => {
  const breakpoint = useBreakpoint()

  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null)
  const selectedImage = useMemo(() => {
    if (data?.images && selectedImageIdx !== null) {
      return data.images.filter(notEmpty)[selectedImageIdx]
    }
  }, [data, selectedImageIdx])

  const id = data?.id

  useEffect(() => {
    setSelectedImageIdx(null)
  }, [id])

  return data ? (
    <div className="flex justify-center overflow-x-hidden">
      <div className="mx-8 md:mx-14 w-full xl:max-w-[960px] mt-14 mb-16 ">
        <div className={`${children ? '' : 'min-h-[200px] h-[30vh]'} mb-16`}>
          <SliderControls onPrev={onPrev} onNext={onNext} onClose={onClose}>
            {children}
          </SliderControls>
        </div>
        <div className="flex flex-wrap items-center justify-between py-1 pl-2 pr-4 rounded-sm bg-text-secondary text-bg-primary">
          <h1 className="w-full text-2xl md:text-3xl md:w-auto">{data.title}</h1>
        </div>

        <div className="flex flex-col mt-6 mb-6 gap-y-6 gap-x-12 md:flex-row">
          <div className="flex-1 order-3 md:order-1">
            <div className="relative grid" style={{ gridTemplateAreas: '"content"' }}>
              <div
                className={`transition-opacity duration-300 ${
                  selectedImageIdx === null
                    ? 'opacity-100'
                    : 'opacity-0 absolute overflow-hidden h-full w-full top-0 left-0'
                }`}
                style={{ gridArea: 'content' }}
              >
                <p className={`text-justify`}>{data.description}</p>
                {data?.tags && (
                  <div className="hidden mt-5 md:block">
                    <Tags tags={data.tags} />
                  </div>
                )}
              </div>
              {selectedImage && (
                <div style={{ gridArea: 'content' }} className="z-10 min-h-[60vh]">
                  <ImageContainer
                    image={selectedImage.file?.childImageSharp?.gatsbyImageData}
                    caption={selectedImage.caption || ''}
                    alternativeText={selectedImage.alternativeText || ''}
                    onClose={() => setSelectedImageIdx(null)}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="md:w-1/3 md:order-2">
            <div className={`${selectedImage ? 'hidden md:block md:mb-5' : ''}`}>
              {data.organization ? (
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
              ) : (
                <InfoRow rowTitle="Hobby Project" />
              )}
              <InfoRow rowTitle="Name:" data={data.name} />
              {/* {data?.areas && (
                <InfoRow rowTitle="Field:" data={data.areas?.filter(notEmpty) || []} render={(field) => field.name} />
              )} */}
              {data.tags && (
                <div className="block mt-2 md:hidden">
                  <Tags tags={data.tags} />
                </div>
              )}
            </div>
            {breakpoint.md && (
              <div className="mt-5">
                <ImagesPreview images={data.images} onClick={setSelectedImageIdx} />
              </div>
            )}
          </div>
        </div>
        {!breakpoint.md && (
          <div className="">
            <ImagesPreview images={data.images} onClick={setSelectedImageIdx} />
          </div>
        )}
      </div>
    </div>
  ) : null
}
