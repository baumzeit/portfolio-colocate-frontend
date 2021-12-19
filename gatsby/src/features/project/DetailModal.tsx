import { Transition } from '@headlessui/react'
import { graphql } from 'gatsby'
import React, { FC, useEffect, useState } from 'react'

import { SetModalProps } from '../viz/Voronoi/helpers'

export const ProjectDetailModal: FC<SetModalProps> = ({ data, onClose, onNext, onPrev }) => {
  useEffect(() => {}, [])

  return (
    <Transition
      appear={true}
      show={!!data}
      enter="transition-opacity duration-700"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-700"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`absolute top-0 left-0 w-full h-full px-14 pt-14 bg-primaryLayer`}>
        <h1>{data?.title}</h1>
        <div>{data?.description}</div>
        <button onClick={onClose}>Close</button>
        <button onClick={onNext}>Next</button>
        <button onClick={onPrev}>Prev</button>
      </div>
    </Transition>
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
