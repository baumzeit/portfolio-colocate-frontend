import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import { ProfileFragment } from '../../../graphql-types'
import notEmpty from '../../common/utility/notEmpty'

type ProfileProps = { profile: ProfileFragment }
export const Profile = ({ profile: { picture, qualities } }: ProfileProps) => (
  <div className="flex flex-row gap-4 sm:flex-col md:flex-row">
    <div className=" shrink-0">
      {picture?.file && (
        <GatsbyImage
          image={picture.file.childImageSharp?.gatsbyImageData}
          alt={picture.alternativeText || ''}
          className="overflow-hidden rounded-md shadow-md"
        />
      )}
    </div>
    <ul className="flex-1 ml-5 list-disc">
      {qualities?.filter(notEmpty).map(({ text }, idx) => (
        <li key={idx}>{text}</li>
      ))}
    </ul>
  </div>
)

export const query = graphql`
  fragment Profile on StrapiComponentSharedProfile {
    picture {
      file {
        childImageSharp {
          gatsbyImageData(height: 180, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      alternativeText
    }
    qualities {
      text
    }
  }
`
