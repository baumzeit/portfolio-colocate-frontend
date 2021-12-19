import React, { useEffect, useState } from 'react'

import { highlightCellsByFieldId } from '../../features/viz/Voronoi/highlightCellsByField'

type NavFilterFieldsProps = {
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

export const NavFilterFields = ({ fields }: NavFilterFieldsProps) => {
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null)

  useEffect(() => {
    highlightCellsByFieldId(String(selectedFieldId))
  }, [selectedFieldId])

  return (
    <div className="ml-4 first-of-type:ml-0 text-brand">
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
            className={`ml-2 animate-fadeIn px-2 py-1 animate-delay-${100 + 100 * idx} cursor-pointer rounded-md ${
              strapiId === selectedFieldId ? 'bg-secondary' : 'initial'
            }`}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}
