import React, { ReactNode, RefObject } from 'react'

import { Container } from '../../common/components/Container'
import { SetModalProps } from '../viz/Voronoi/VoronoiContainer'
import { DetailBody } from './DetailBody'
import { SliderControls } from './SliderControls'
type ProjectDetailProps = SetModalProps & {
  scrollContainer?: RefObject<HTMLDivElement>
  children?: ReactNode
}

const exposeHeightClass = 'min-h-[200px] h-[30vh] max-h-[30vh]'

export const ProjectDetail = ({ project, onClose, onNext, onPrev, children }: ProjectDetailProps) => {
  return project ? (
    <Container className="pb-16 pt-14">
      <div className={`${exposeHeightClass} mb-10 md:mb-16`}>
        <SliderControls onPrev={onPrev} onNext={onNext} onClose={onClose}>
          {children}
        </SliderControls>
      </div>
      <DetailBody project={project} />
    </Container>
  ) : null
}
