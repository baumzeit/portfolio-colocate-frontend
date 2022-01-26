import { graphql } from 'gatsby'
import React from 'react'

import { FieldDetailFragment } from '../../../graphql-types'
import notEmpty from '../../common/utility/notEmpty'

const flex = {
  left: 'start',
  center: 'center',
  right: 'end'
}

type FieldProps = { field: FieldDetailFragment; alignment: 'left' | 'center' | 'right' }
export const Field = ({ field: { name, description, color: fieldColor, tags }, alignment }: FieldProps) => (
  <div className="">
    <h2
      style={{ borderColor: fieldColor || '' }}
      className={`text-xl font-semibold tracking-wider border-b pb-0.5 text-${alignment}`}
    >
      {name}
    </h2>
    <div className={`flex justify-${flex[alignment]} w-full mt-3`}>
      <div className={`w-4/5 flex flex-col items-${flex[alignment]} contents-${flex[alignment]}`}>
        <p className={`text-secondary text-${alignment}`}>{description}</p>
        <div className={`flex flex-wrap gap-2.5 mt-4 justify-${flex[alignment]}`}>
          {tags?.filter(notEmpty).map(({ name, id }) => (
            <div
              key={id}
              style={{ borderColor: fieldColor || '' }}
              className="px-2.5 py-0.5 text-sm border rounded-sm text-secondary"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export const query = graphql`
  fragment FieldDetail on StrapiField {
    id
    slug
    name
    description
    color
    projects {
      id
      images {
        localFile {
          childImageSharp {
            gatsbyImageData(height: 30, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], aspectRatio: 1)
          }
        }
        alternativeText
      }
    }
    tags {
      id
      name
    }
  }
`