import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import chunk from 'lodash.chunk'
import React from 'react'

import { Area } from './Area'

type AreasMapProps = { areas: Queries.AreaDetailFragment[] }

export const AreasMap = ({ areas }: AreasMapProps) => {
  const breakpoints = useBreakpoint()

  return (
    <div>
      {chunk(areas, 3).map((areas, idx) => (
        <div
          key={`areas-grid-${idx}`}
          className="grid grid-cols-4 gap-x-0 gap-y-14 md:gap-y-16 lg:gap-x-40 lg:gap-y-20 xl-gap-y-32"
        >
          {areas.map((area, idx) => {
            const one = idx % 3 === 0
            const two = idx % 3 === 1
            const three = idx % 3 === 2
            return (
              <div
                key={area.id}
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
                <Area
                  area={area}
                  alignment={
                    breakpoints?.lg === false ? 'left' : one ? 'right' : two ? 'left' : three ? 'center' : 'left'
                  }
                />
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
