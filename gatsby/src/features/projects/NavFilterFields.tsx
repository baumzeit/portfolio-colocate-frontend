import React, { useState } from 'react'

import { useQueryParam } from '../../common/hooks/useQueryParam'

type NavFilterFieldsProps = {
  location: Location
  fields: {
    strapiId?: number | null | undefined
    name?: string | null | undefined
    color?: string | null | undefined
    projects?:
      | (
          | {
              id?: number | null | undefined
            }
          | null
          | undefined
        )[]
      | null
      | undefined
  }[]
}

export const NavFilterFields = ({ fields, location }: NavFilterFieldsProps) => {
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null)

  useQueryParam(location, { field: selectedFieldId })

  return (
    <div className="flex items-center ">
      <div className="gap-4 text-brand">
        {fields.map(({ strapiId = null, color, name }, idx) => {
          const isActive = String(strapiId) === selectedFieldId
          return (
            <button
              key={strapiId}
              onClick={(e) => {
                setSelectedFieldId(isActive ? null : String(strapiId))
              }}
              style={{
                color: color || 'inherit'
              }}
              className={`ml-2 animate-fadeIn px-2 py-1 animate-delay-${
                100 + 100 * idx
              } cursor-pointer rounded-md hover:brightness-110 ${isActive ? 'bg-primary' : 'initial'}`}
            >
              {name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
