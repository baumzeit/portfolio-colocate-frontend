import React, { FC } from 'react'

type InfoItemData = {
  id: string | number
  [x: string]: any
}

type InfoRowProps<T extends InfoItemData> = {
  rowTitle: string
  data: T[]
  label: (item: T) => string | number
}

export const InfoRow = <T extends InfoItemData>({ rowTitle: title, data, label }: InfoRowProps<T>) => (
  <div className="flex gap-3">
    <div className="text-right w-14 text-tertiary">{title}</div>
    {data.map((item) => (
      <div key={item.id}>{label(item)}</div>
    ))}
  </div>
)
