import { ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'

import { useQueryParam } from '../../common/hooks/useQueryParam'

export const NavSelectView = ({ location }: { location: Location }) => {
  const [listView, setListView] = useState<boolean | string>()

  useQueryParam(location, { list: listView })

  return (
    <div className="flex gap-3">
      <ViewGridIcon
        className={`w-4 h-4 cursor-pointer transition-color ${!listView ? 'fill-brand' : ''}`}
        onClick={() => setListView('')}
      ></ViewGridIcon>
      <ViewListIcon
        className={`w-4 h-4 cursor-pointer transition-color ${listView ? 'fill-brand' : ''}`}
        onClick={() => setListView(true)}
      ></ViewListIcon>
    </div>
  )
}
