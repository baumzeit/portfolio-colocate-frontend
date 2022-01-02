import { graphql } from 'gatsby'
import React, { FC } from 'react'

import { SetModalProps } from '../viz/Voronoi/helpers'

export const ProjectDetail: FC<SetModalProps> = ({ data, onClose, onNext, onPrev }) => {
  return (
    <div className={`absolute top-0 left-0 w-full h-full p-14 lg:pl-[35vw] lg:pr-[10vw] lg:pt-[20vh]`}>
      <h1>{data?.title}</h1>
      <div>{data?.description}</div>
      <button
        className="px-2 mx-1 border-2"
        onClick={() => {
          onClose()
        }}
      >
        Close
      </button>
      <button className="px-2 mx-1 border-2" onClick={onNext}>
        Next
      </button>
      <button className="px-2 mx-1 border-2" onClick={onPrev}>
        Prev
      </button>
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
