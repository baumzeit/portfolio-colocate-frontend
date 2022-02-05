import { graphql } from 'gatsby'
import React from 'react'

import { AreaDetailFragment } from '../../../graphql-types'
import { SvgBlob } from '../blob/SvgBlob'
import { Tags } from './../../common/components/Tags'

const flex = {
  left: 'start',
  center: 'center',
  right: 'end'
}

const blobOffset = {
  left: '-top-[50px] -left-[100px] lg:-left-[150px] lg:-top-[80px]',
  center: 'lg:-top-[150px] left-0',
  right: 'lg:-right-[150px] lg:-top-[80px]'
}

type FieldProps = { field: AreaDetailFragment; alignment: 'left' | 'center' | 'right' }
export const Field = ({ field: { name, description, id, color: fieldColor, tags }, alignment }: FieldProps) => (
  <div className="relative z-10">
    <h2
      style={{ borderColor: fieldColor || '', textAlign: alignment }}
      className={`text-xl font-semibold tracking-wider border-b pb-0.5`}
    >
      {name}
    </h2>
    <div style={{ justifyContent: flex[alignment] }} className={`flex w-full mt-3`}>
      <div
        style={{ alignItems: flex[alignment], alignContent: flex[alignment] }}
        className={`md:w-4/5 flex flex-col gap-y-4`}
      >
        <p style={{ textAlign: alignment }} className={`text-secondary`}>
          {description}
        </p>
        <Tags tags={tags} color={fieldColor || ''} />
      </div>
    </div>
    <div className={`absolute w-full flex ${blobOffset[alignment]}`} style={{ justifyContent: flex[alignment] }}>
      <div className="w-[500px] lg:w-[550px] opacity-30 -mx-14 -my-14">
        <SvgBlob
          variant="gradient"
          colors={[fieldColor || '', 'var(--color-brand)']}
          isOutline
          shapeProps={{ growth: 5, edges: 5 }}
          id={id}
          pathClassName="animate-spinVerySlow"
        />
      </div>
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
            gatsbyImageData(height: 25, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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
