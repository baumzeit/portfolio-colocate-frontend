import React from 'react'

type InfoItemData = Record<string, any> | string

type InfoRowProps<T extends InfoItemData> = {
  rowTitle: string
  data: T[] | T
  label?: (item: T) => string | number
}

export const InfoRow = <T extends InfoItemData>({ rowTitle: title, data, label }: InfoRowProps<T>) => (
  <div className="flex gap-3">
    <div className="text-right w-14 text-tertiary">{title}</div>
    {Array.isArray(data) ? (
      data.map((item, idx) => <div key={idx}>{label ? label(item) : item}</div>)
    ) : (
      <div>{label ? label(data) : data}</div>
    )}
  </div>
)
