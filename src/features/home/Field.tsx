import { graphql } from 'gatsby'
import React from 'react'
import { SvgBlob } from 'react-svg-blob'

import { AreaDetailFragment } from '../../../graphql-types'
import { Tags } from './../../common/components/Tags'

const flex = {
  left: 'start',
  center: 'center',
  right: 'end'
}

type FieldProps = { field: AreaDetailFragment; alignment: 'left' | 'center' | 'right' }
export const Field = ({ field: { name, description, id, color: fieldColor, tags }, alignment }: FieldProps) => (
  // <div style={{ backgroundImage: `radial-gradient(farthest-side, ${fieldColor}, var(--bg-primary))` }}>
  <div className="relative">
    <h2
      style={{ borderColor: fieldColor || '' }}
      className={`text-xl font-semibold tracking-wider border-b pb-0.5 text-${alignment}`}
    >
      {name}
    </h2>
    <div className={`flex justify-${flex[alignment]} w-full mt-3`}>
      <div className={`w-4/5 flex flex-col gap-y-4 items-${flex[alignment]} contents-${flex[alignment]}`}>
        <p className={`text-secondary text-${alignment}`}>{description}</p>
        <Tags tags={tags} color={fieldColor || ''} />
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-full">
      <SvgBlob
        height="100%"
        className="ml-auto"
        key={id}
        variant="gradient"
        colors={[fieldColor || '', 'var(--color-brand)']}
        isOutline
        shapeProps={{ size: 600, growth: 1 }}
      />
    </div>
  </div>
)

export const query = graphql`
  fragment AreaDetail on StrapiArea {
    id
    slug
    name
    description
    color
    projects {
      id
      images {
        file {
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
