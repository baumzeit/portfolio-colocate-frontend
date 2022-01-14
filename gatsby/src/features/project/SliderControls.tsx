import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, { FC } from 'react'

import { SetModalProps } from '../viz/Voronoi/helpers'

export const SliderControls: FC<Omit<SetModalProps, 'data'>> = ({ onPrev, onNext, children }) => {
  return (
    <div className="flex items-center justify-between h-[400px]">
      <button onClick={onPrev} className="hover:text-brand text-secondary">
        <ChevronLeftIcon className="w-16 h-16" />
      </button>
      {/* <button
           onClick={() => {
             onClose()
           }}
          >
           <div className="text-lg">Close</div>
          </button> */}
      {children}
      <button onClick={onNext} className="hover:text-brand text-secondary">
        <ChevronRightIcon className="w-16 h-16" />
      </button>
    </div>
  )
}
