import { ExternalLinkIcon } from '@heroicons/react/solid'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import React, { useEffect, useState } from 'react'

import { ProjectDetailFragment } from '../../../graphql-types'
import notEmpty from '../../common/utility/notEmpty'
import { DetailContent } from './DetailContent'
import { ImagesPreview, ImagesPreviewProps } from './ImagesPreview'
import { InfoRow } from './InfoRow'

type DetailContentProps = {
  project: ProjectDetailFragment
}

export const DetailBody = ({ project }: DetailContentProps) => {
  const { id, title, areas, organization, images } = project
  const breakpoint = useBreakpoint()

  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null)
  const imageView = selectedImageIdx !== null

  useEffect(() => {
    setSelectedImageIdx(null)
  }, [id])

  return (
    <>
      <div className="flex flex-wrap items-center justify-between py-1 pl-2 pr-4 rounded-sm bg-text-secondary text-bg-primary">
        <h1 className="w-full text-xl md:text-3xl md:w-auto">{title}</h1>
      </div>
      <div className="flex flex-col mt-6 mb-6 gap-x-12 md:flex-row">
        <DetailContent
          project={project}
          selectedImageIdx={selectedImageIdx}
          onClosePreview={() => setSelectedImageIdx(null)}
        />
        <div className="order-1 md:w-1/3 md:order-2">
          <div className={`${imageView ? 'hidden md:block md:mb-5' : 'mb-5'}`}>
            {organization ? (
              <InfoRow
                rowTitle="Organization:"
                data={organization || {}}
                render={(organization) => (
                  <a href={organization?.link || ''} target="_blank" rel="noreferrer" className="hover:text-brand">
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
            {areas && <InfoRow rowTitle="Field:" data={areas.filter(notEmpty) || []} render={(field) => field.name} />}
          </div>
          {breakpoint.md && <ImagesPreview images={images} onClick={setSelectedImageIdx} />}
        </div>
      </div>
      {!breakpoint.md && <ImagesPreview images={images} onClick={setSelectedImageIdx} />}
    </>
  )
}
