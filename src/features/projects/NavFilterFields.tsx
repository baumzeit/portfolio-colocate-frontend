import { Listbox } from '@headlessui/react'
import React, { useCallback, useState } from 'react'
import { useQueryParam } from 'use-query-params'

import { ProjectsNavDataQuery } from '../../../graphql-types'

type NavFilterFieldsProps = {
  fields: ProjectsNavDataQuery['allStrapiArea']['edges'][number]['node'][]
}

export const NavFilterFields = ({ fields }: NavFilterFieldsProps) => {
  const [selectedFieldSlug, setSelectedFieldSlug] = useQueryParam<string | undefined>('field')
  return (
    <div className="flex items-center justify-center gap-4 text-bg-secondary">
      {fields.map(({ id = null, color, name, slug }, idx) => {
        const isActive = slug === selectedFieldSlug
        return (
          <button
            key={id}
            onClick={(e) => {
              setSelectedFieldSlug(isActive ? undefined : slug || undefined)
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

export const NavFilterFieldsSelect = ({ fields }: NavFilterFieldsProps) => {
  const [selectedFieldSlug, setSelectedFieldSlug] = useQueryParam<string | undefined>('field')
  const [selectedField, setSelectedField] = useState(fields.find((field) => field.slug === selectedFieldSlug))

  const handleChange = useCallback(
    (field: NavFilterFieldsProps['fields'][number]) => {
      const isActive = field.slug === selectedFieldSlug
      setSelectedFieldSlug(isActive || !field.slug ? undefined : field.slug)
      setSelectedField(isActive || !field.slug ? undefined : field)
    },
    [selectedFieldSlug, setSelectedFieldSlug]
  )

  return (
    <div className="flex flex-col items-center">
      <Listbox value={selectedField} onChange={handleChange}>
        <Listbox.Button
          style={{
            backgroundColor: selectedField?.color || 'transparent'
          }}
          className={`px-1.5 py-0.5 rounded text-center ${selectedField ? 'text-bg-secondary' : 'text-primary'}`}
        >
          {selectedField ? selectedField.name : 'Select a Field'}
        </Listbox.Button>
        <Listbox.Options className="flex flex-col items-center">
          {fields.map((field, idx) => {
            const { id = null, color, name, slug } = field
            const isActive = slug === selectedFieldSlug
            return (
              <Listbox.Option key={id} value={field} className="text-bg-secondary">
                <div
                  style={{
                    color: isActive ? 'inherit' : color || 'inherit',
                    backgroundColor: isActive ? color || 'transparent' : ''
                  }}
                  className={`inline-block px-1.5 py-0.5 rounded mt-1.5 animate-fadeInFast bg-primary animate-delay-${
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
