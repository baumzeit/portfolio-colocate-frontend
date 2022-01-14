import React from 'react'
import { useQueryParam } from 'use-query-params'

import { ProjectsNavDataQuery } from '../../../graphql-types'

type NavFilterFieldsProps = {
  fields: ProjectsNavDataQuery['allStrapiField']['edges'][number]['node'][]
}

export const NavFilterFields = ({ fields }: NavFilterFieldsProps) => {
  const [selectedFieldSlug, setSelectedFieldSlug] = useQueryParam<string | undefined>('field')
  return (
    <div className="flex items-center gap-4 text-brand">
      {fields.map(({ strapiId = null, color, name, slug }, idx) => {
        const isActive = slug === selectedFieldSlug
        return (
          <button
            key={strapiId}
            onClick={(e) => {
              setSelectedFieldSlug(isActive ? undefined : slug || undefined)
            }}
            style={{
              color: color || 'inherit',
              borderColor: color || 'none'
            }}
            className={`ml-2 animate-fadeIn animate-delay-${100 + 100 * idx} cursor-pointer ${
              isActive ? 'border-b border-solid' : ''
            }`}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}
