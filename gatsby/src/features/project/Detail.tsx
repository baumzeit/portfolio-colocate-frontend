import { graphql } from 'gatsby'
import React, { FC } from 'react'

import { SetModalProps } from '../viz/Voronoi/helpers'
import { InfoRow } from './InfoRow'
import { SliderControls } from './SliderControls'

export const ProjectDetail: FC<SetModalProps> = ({ data, onClose, onNext, onPrev }) => {
  return data ? (
    <div className={`absolute top-0 left-0 w-full`}>
      <div className="flex justify-center">
        <div className="mx-14 max-w-[880px] mt-28 mb-16 ">
          <SliderControls onPrev={onPrev} onNext={onNext} onClose={onClose}>
            {/* <h1 className="text-3xl bg-text-primary text-bg-primary px-2">{data.title}</h1> */}
          </SliderControls>
          <h1 className="text-3xl bg-text-secondary text-bg-primary px-2 py-1">{data.title}</h1>

          <div className="mt-6 mb-6">{data.description}</div>
          <InfoRow rowTitle="Fields:" data={data.fields} label={(field) => field.name || ''} />
          <InfoRow rowTitle="Tags:" data={data.tags} label={(tag) => tag.name || ''} />
        </div>
      </div>
    </div>
  ) : null
}

export const query = graphql`
  fragment ProjectDetails on StrapiProject {
    strapiId
    slug
    title
    description
    tags {
      id
      name
    }
    # images
    # seo
    # strapiTags {
    #   name
    # }
    images {
      localFile {
        childImageSharp {
          fixed(width: 600) {
            srcSet
          }
        }
      }
    }
    strapiFields {
      name
    }
  }
`
