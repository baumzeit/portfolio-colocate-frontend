import { Listbox } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import React, { useCallback } from 'react'

import { useHighlightArea } from '../project/use-highlight-area'

type NavFilterAreasProps = {
  areas: Queries.AreaBaseFragment[]
}

export const NavFilterAreas = ({ areas }: NavFilterAreasProps) => {
  const { highlightArea, setHighlightArea } = useHighlightArea()
  return (
    <div className="flex items-center justify-center gap-4 text-bg-secondary">
      {areas.map(({ id, color, name, slug }, idx) => {
        const isActive = id === highlightArea?.id
        return (
          <button
            key={id}
            onClick={(e) => {
              setHighlightArea(isActive ? null : slug ?? null)
            }}
            style={{
              color: isActive ? 'inherit' : color || 'inherit',
              backgroundColor: isActive ? color || 'transparent' : 'transparent',
              borderColor: color || 'none'
            }}
            className={`ml-2 animate-fadeIn animate-delay-${100 + 100 * idx} cursor-pointer px-1.5 py-0.5 rounded
            `}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}

export const NavFilterAreasSelect = ({ areas }: NavFilterAreasProps) => {
  const { highlightArea, setHighlightArea } = useHighlightArea()

  const handleChange = useCallback(
    (area: Queries.AreaBaseFragment) => {
      const isActive = area.slug === highlightArea
      setHighlightArea(isActive || !area.slug ? null : area.slug)
    },
    [highlightArea, setHighlightArea]
  )

  return (
    <div className="flex flex-col items-center">
      <Listbox value={highlightArea} onChange={handleChange}>
        <div className="relative">
          <Listbox.Button
            style={{
              backgroundColor: highlightArea?.color || 'transparent'
            }}
            className={`px-2 py-0.5 rounded text-center tracking-wide ${
              highlightArea ? 'text-bg-secondary' : 'text-primary'
            }`}
          >
            {highlightArea ? highlightArea.name : 'Filter by Area'}
          </Listbox.Button>
          {highlightArea && (
            <button
              className="absolute flex items-center h-full -right-8 top-0 p-1"
              onClick={() => setHighlightArea(null)}
            >
              <XIcon color="black" className="w-5 h-5" />
            </button>
          )}
        </div>
        <Listbox.Options className="flex flex-col items-center">
          {areas
            .filter((d) => !highlightArea || d.id !== highlightArea.id)
            .map((area, idx) => {
              const { id = null, color, name, slug } = area
              const isActive = slug === highlightArea
              return (
                <Listbox.Option key={id} value={area} className="text-bg-secondary">
                  <div
                    style={{
                      color: isActive ? 'inherit' : color || 'inherit',
                      backgroundColor: isActive ? color || 'transparent' : ''
                    }}
                    className={`inline-block px-2 py-0.5 rounded mt-1.5 animate-fadeInFast bg-primary tracking-wide animate-delay-${
                      50 * idx
                    } cursor-pointer`}
                  >
                    {name}
                  </div>
                </Listbox.Option>
              )
            })}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
