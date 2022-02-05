import React, { FC, RefObject } from 'react'

import { SetModalProps } from '../projects/ProjectsMap'
import { DetailBody } from './DetailBody'
import { SliderControls } from './SliderControls'

type ProjectDetailProps = SetModalProps & { scrollContainer?: RefObject<HTMLDivElement> }

export const ProjectDetail: FC<ProjectDetailProps> = ({ data, onClose, onNext, onPrev, children }) => {
  return data ? (
    <div className="flex justify-center w-full overflow-x-hidden">
      <div className="mx-8 md:mx-14 w-full xl:max-w-[960px] mt-14 mb-16 ">
        <div className={`${children ? '' : 'min-h-[200px] h-[30vh]'} mb-10 md:mb-16`}>
          <SliderControls onPrev={onPrev} onNext={onNext} onClose={onClose}>
            {children}
          </SliderControls>
        </div>
        <DetailBody project={data} />
      </div>
    </div>
  ) : null
}
