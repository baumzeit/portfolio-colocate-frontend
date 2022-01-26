import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import { HomeProfileFragment } from '../../../graphql-types'
import notEmpty from '../../common/utility/notEmpty'

type ProfileProps = { profile: HomeProfileFragment }
export const Profile = ({ profile: { picture, qualities } }: ProfileProps) => (
  <div className="flex flex-col md:flex-row">
    <div className="overflow-hidden rounded-md shadow-md shrink-0">
      {picture?.localFile && (
        <GatsbyImage image={picture.localFile.childImageSharp?.gatsbyImageData} alt={picture.alternativeText || ''} />
      )}
    </div>
    <ul className="flex-1 ml-10 list-disc">
      {qualities?.filter(notEmpty).map(({ text }, idx) => (
        <li key={idx}>{text}</li>
      ))}
    </ul>
  </div>
)

export const query = graphql`
  fragment HomeProfile on StrapiHomeProfile {
    picture {
      localFile {
        childImageSharp {
          gatsbyImageData(height: 160, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      alternativeText
    }
    qualities {
      text
    }
  }
`
