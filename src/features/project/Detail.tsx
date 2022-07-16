import React, { ReactNode, RefObject } from 'react'

import { Container } from '../../common/components/Container'
import { SetModalProps } from '../projects/ProjectsMap'
import { DetailBody } from './DetailBody'
import { SliderControls } from './SliderControls'

type ProjectDetailProps = SetModalProps & { scrollContainer?: RefObject<HTMLDivElement>; children: ReactNode }

export const ProjectDetail = ({ data, onClose, onNext, onPrev, children }: ProjectDetailProps) => {
  return data ? (
    <Container className="pb-16 pt-14">
      <div className={`${children ? '' : 'min-h-[200px] h-[30vh]'} mb-10 md:mb-16`}>
        <SliderControls onPrev={onPrev} onNext={onNext} onClose={onClose}>
          {children}
        </SliderControls>
      </div>
      <DetailBody project={data} />
    </Container>
  ) : null
}
