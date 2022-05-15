import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import { ProfileFragment } from '../../../graphql-types'
import notEmpty from '../../common/utility/notEmpty'

type ProfileProps = { profile: ProfileFragment }
export const Profile = ({ profile: { picture, qualities } }: ProfileProps) => (
  <div className="flex flex-row justify-center gap-4 md:flex-col lg:flex-row">
    <div className="px-1 shrink-0">
      {picture?.localFile && (
        <GatsbyImage
          image={picture.localFile.childImageSharp?.gatsbyImageData}
          alt={picture.alternativeText || ''}
          className="w-32 overflow-hidden rounded-md shadow-md sm:w-40"
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
