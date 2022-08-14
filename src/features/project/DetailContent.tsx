import React from 'react'

import { ExternalLink } from '../../common/components/ExternalLink'
import { Tags } from '../../common/components/Tags'
import notEmpty from '../../common/utility/not-empty'
import { DetailBody } from './DetailBody'
import { ImagesPreview } from './ImagesPreview'
import { InfoRow } from './InfoRow'
import { useImageHash } from './use-image-hash'

type DetailContentProps = {
  project: Queries.ProjectDetailFragment
}

export const DetailContent = ({ project }: DetailContentProps) => {
  const { title, images } = project
  const [imageIdx, setImageIdx] = useImageHash()
  return (
    <>
      <div
        className="py-0.5 sm:py-1 md:py-1 pl-3 -ml-2 pr-4 rounded-sm bg-text-primary
        shadow-glow shadow-bg-primaryLayer
        bg-gradient-to-l from-white/10 dark:from-black/10 via-transparent"
      >
        <h1 className="w-full text-xl text-bg-primary sm:text-2xl md:text-3xl md:w-auto">{title}</h1>
      </div>
      <div className="flex flex-col mt-6 mb-6 md:mt-8 gap-x-12 lg:gap-x-16 gap-y-4 md:flex-row ">
        <div className="block md:hidden">
          <MainInfo project={project} />
        </div>
        <div className="flex-1 mb-4">
          <DetailBody project={project} selectedImageIdx={imageIdx} onClosePreview={() => setImageIdx(null)} />
        </div>
        <div className="md:w-1/3">
          <div className={`grid gap-y-4 mb-4`}>
            <div className="hidden md:block">
              <MainInfo project={project} />
            </div>
            {images && (
              <div className="row-start-1 mb-1 md:row-start-auto">
                <ImagesPreview
                  images={images}
                  onClick={(idx) => setImageIdx(idx)}
                  selectedImageIdx={imageIdx}
                  onClosePreview={() => setImageIdx(null)}
                />
              </div>
            )}

            {imageIdx === null && <SecondaryInfo project={project} />}
          </div>
        </div>
      </div>
    </>
  )
}

type MainInfoProps = { project: Queries.ProjectDetailFragment }
const MainInfo = ({ project: { organization, areas } }: MainInfoProps) => {
  return (
    <div>
      {organization?.link ? (
        <InfoRow
          rowTitle="Organization:"
          data={organization}
          render={(organization) => <ExternalLink link={organization.link || ''} label={organization.name} />}
        />
      ) : (
        <InfoRow data="Hobby Project" />
      )}
      {areas && <InfoRow rowTitle="Areas:" data={areas.filter(notEmpty)} render={(area) => area.name} />}
    </div>
  )
}

type SecondaryInfoProps = { project: Queries.ProjectDetailFragment }
const SecondaryInfo = ({ project: { links, tags } }: SecondaryInfoProps) => {
  return (
    <>
      {links && links?.length > 0 && (
        <div className="leading-snug">
          {links.filter(notEmpty).map((link) => (
            <ExternalLink key={link.id} {...link} />
          ))}
        </div>
      )}
      {tags && (
        <div className="mt-1">
          <Tags tags={tags} />
        </div>
      )}
    </>
  )
}
