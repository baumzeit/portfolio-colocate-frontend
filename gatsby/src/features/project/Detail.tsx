import { graphql } from 'gatsby'
import React, { FC, useEffect } from 'react'

import { SetModalProps } from '../viz/Voronoi/helpers'

export const ProjectDetail: FC<SetModalProps> = ({ data, onClose, onNext, onPrev }) => {
  useEffect(() => {
    if (data?.slug) {
      window.history.pushState({}, '', '#' + data?.slug)
    }
  }, [data?.slug])

  const removeHash = () => {
    window.location.hash = ''
    window.history.replaceState('', '', window.location.pathname)
  }

  return (
    <div className={`absolute top-0 left-0 w-full h-full px-14 pt-14`}>
      <h1>{data?.title}</h1>
      <div>{data?.description}</div>
      <button
        className="px-2 mx-1 border-2"
        onClick={() => {
          removeHash()
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
