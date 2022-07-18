import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, { ReactNode } from 'react'

import { SetModalProps } from '../../common/hooks/useProjectModalData'

type SlicerControlProps = Pick<SetModalProps, 'onPrev' | 'onNext' | 'onClose'> & {
  children: ReactNode
}
export const SliderControls = ({ onPrev, onNext, children }: SlicerControlProps) => {
  return (
    <div className="flex items-center justify-between h-full">
      <button onClick={onPrev} className="hover:text-brand text-secondary bg-primary md:bg-transparent">
        <ChevronLeftIcon className="w-12 h-12 md:w-16 md:h-16" />
      </button>
      <div className="flex-1 -z-10 relative self-start">{children}</div>
      <button onClick={onNext} className="hover:text-brand text-secondary bg-primary md:bg-transparent">
        <ChevronRightIcon className="w-12 h-12 md:w-16 md:h-16" />
      </button>
    </div>
  )
}
