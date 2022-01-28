import React from 'react'

import { FieldDetailFragment } from '../../../graphql-types'
import { alignFlex, Alignment } from '../utility/alignment'
import notEmpty from '../utility/notEmpty'

type TagsProps = {
  tags: FieldDetailFragment['tags']
  color?: string
  alignment?: Alignment
}

export const Tags = ({ tags, color, alignment = 'left' }: TagsProps) => {
  return (
    <div className={`flex flex-wrap gap-2.5 justify-${alignFlex[alignment]}`}>
      {tags?.filter(notEmpty).map(({ name, id }) => (
        <Tag key={id} color={color} label={name || ''} />
      ))}
    </div>
  )
}

type TagProps = {
  color?: string
  label: string
}

export const Tag = ({ label, color }: TagProps) => {
  return (
    <div
      style={{
        borderColor: color || ''
      }}
      className="px-2.5 py-0.5 text-sm border rounded-sm text-secondary"
    >
      {label}
    </div>
  )
}
