import { graphql } from 'gatsby'
import React, { FC } from 'react'

import { ProjectDetailsFragment } from '../../../graphql-types'
import { EnrichedDatum } from '../viz/Voronoi/helpers'

export const ProjectDetail: FC<{
  project: EnrichedDatum
}> = ({ project }) => {
  return (
    <div className="h-full mx-auto pt-[80px] w-3/5 max-w-[750px] break-words rounded-sm text-highlight">
      {project.description}
      <div>
        <img srcSet={project.imageUrl} />
      </div>
    </div>
  )
}

export const query = graphql`
  fragment ProjectDetails on StrapiProject {
    strapiId
    slug
    title
    description
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
