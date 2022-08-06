import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, { ReactNode } from 'react'

import { UseActiveProjectReturn } from './use-active-project'

type SlicerControlProps = Pick<UseActiveProjectReturn, 'prev' | 'next'> & {
  children: ReactNode
}
export const SliderControls = ({ prev, next, children }: SlicerControlProps) => {
  return (
    <div className="flex items-center justify-between h-full">
      <button onClick={prev} className="hover:text-brand text-secondary bg-primary md:bg-transparent">
        <ChevronLeftIcon className="w-12 h-12 md:w-16 md:h-16" />
      </button>
      <div className="flex-1 -z-10 relative">{children}</div>
      <button onClick={next} className="hover:text-brand text-secondary bg-primary md:bg-transparent">
        <ChevronRightIcon className="w-12 h-12 md:w-16 md:h-16" />
      </button>
    </div>
  )
}
