import { ExternalLinkIcon } from '@heroicons/react/solid'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import React, { useCallback, useEffect, useState } from 'react'
import { NumberParam, useQueryParam } from 'use-query-params'

import { ProjectDetailFragment } from '../../../graphql-types'
import { Tags } from '../../common/components/Tags'
import notEmpty from '../../common/utility/notEmpty'
import { ExternalLink } from './../../common/components/ExternalLink'
import { DetailContent } from './DetailContent'
import { ImagesPreview } from './ImagesPreview'
import { InfoRow } from './InfoRow'

type DetailContentProps = {
  project: ProjectDetailFragment
}

export const DetailBody = ({ project }: DetailContentProps) => {
  const { id, title, images } = project
  const breakpoint = useBreakpoint()

  const [selectedImageNo, setSelectedImageNo] = useQueryParam('image', NumberParam)

  const setSelectedImageIdx = useCallback(
    (idx?: number | null) => {
      setSelectedImageNo(typeof idx === 'number' ? idx + 1 : undefined)
    },
    [setSelectedImageNo]
  )
  const selectedImageIdx = typeof selectedImageNo === 'number' ? selectedImageNo - 1 : null

  useEffect(() => {
    setSelectedImageIdx(null)
  }, [id, setSelectedImageIdx])

  return (
    <>
      <div className="flex flex-wrap items-center justify-between py-1 pl-2 pr-4 rounded-sm bg-text-secondary text-bg-primary">
        <h1 className="w-full text-xl md:text-3xl md:w-auto">{title}</h1>
      </div>
      <div className="flex flex-col mt-6 mb-6 md:mt-8 gap-x-12 gap-y-4 md:flex-row">
        {!breakpoint.md && <MainInfo project={project} />}
        <div className="flex-1 mb-4">
          <DetailContent
            project={project}
            selectedImageIdx={selectedImageIdx}
            onClosePreview={() => setSelectedImageIdx(null)}
          />
        </div>
        <div className="md:w-1/3">
          <div className={`grid gap-y-4 mb-4`}>
            {breakpoint.md && <MainInfo project={project} />}
            {images && (
              <div className="row-start-1 mb-1 md:row-start-auto">
                <ImagesPreview images={images} onClick={setSelectedImageIdx} />
              </div>
            )}

            {selectedImageIdx === null && <SecondaryInfo project={project} />}
          </div>
        </div>
      </div>
    </>
  )
}

type MainInfoProps = { project: ProjectDetailFragment }
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

type SecondaryInfoProps = { project: ProjectDetailFragment }
const SecondaryInfo = ({ project: { links, tags } }: SecondaryInfoProps) => {
  return (
    <>
      {links && links?.length > 0 && (
        <div className="leading-snug">
          {links.filter(notEmpty).map((link) => (
            <ExternalLink {...link} />
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
