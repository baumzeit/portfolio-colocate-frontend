import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import notEmpty from '../../common/utility/not-empty'

type ProfileProps = { profile: Queries.ProfileFragment }
export const Profile = ({ profile: { picture, qualities } }: ProfileProps) => {
  const gatsbyImage = picture?.localFile?.childImageSharp?.gatsbyImageData
  return (
    <div className="flex flex-row justify-center gap-4 md:flex-col lg:flex-row">
      <div className="px-1 shrink-0">
        {gatsbyImage && (
          <GatsbyImage
            image={gatsbyImage}
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
}
