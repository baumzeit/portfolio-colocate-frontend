import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import chunk from 'lodash.chunk'
import React, { FC } from 'react'

import { AreaDetailFragment } from '../../../graphql-types'
import { Field } from './Field'

type FieldsMapProps = { fields: AreaDetailFragment[] }

export const FieldsMap: FC<FieldsMapProps> = ({ fields }) => {
  const breakpoints = useBreakpoint()

  return (
    <div>
      {chunk(fields, 3).map((fields, idx) => (
        <div
          key={`fields-grid-${idx}`}
          className="grid grid-cols-4 gap-x-0 gap-y-14 md:gap-y-16 lg:gap-x-36 lg:gap-y-20 xl:gap-x-40 xl-gap-y-32"
        >
          {fields.map((field, idx) => {
            const one = idx % 3 === 0
            const two = idx % 3 === 1
            const three = idx % 3 === 2
            return (
              <div
                key={field.id}
                className={`
            ${
              one
                ? 'row-start-1 col-start-1'
                : two
                ? 'row-start-2 col-start-1 lg:row-start-1 lg:col-start-3'
                : three
                ? 'row-start-3 col-start-1 lg:row-start-2 lg:col-start-2'
                : ''
            } col-end-5 lg:col-span-2`}
              >
                <Field
                  field={field}
                  alignment={breakpoints.lg ? (one ? 'right' : two ? 'left' : three ? 'center' : 'left') : 'left'}
                />
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
