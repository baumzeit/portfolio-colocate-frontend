import React, { ReactNode, RefObject } from 'react'

import { Container } from '../../common/components/Container'
import { DetailBody } from './DetailBody'
import { SliderControls } from './SliderControls'
import { UseActiveProjectReturn } from './use-active-project'

type ProjectDetailProps = UseActiveProjectReturn & {
  scrollContainer?: RefObject<HTMLDivElement>
  children?: ReactNode
}

const exposeHeightClass = 'min-h-[200px] h-[30vh] max-h-[30vh]'

export const DetailContainer = ({ project, next, prev, children }: ProjectDetailProps) => {
  return project ? (
    <Container className="pb-16 pt-14">
      <div className={`${exposeHeightClass} mb-10 md:mb-16`}>
        <SliderControls prev={prev} next={next}>
          {children}
        </SliderControls>
      </div>
      <DetailBody project={project} />
    </Container>
  ) : null
}
