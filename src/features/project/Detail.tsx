import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useRef } from 'react'

import { Container } from '../../common/components/Container'
import { getStrapiImage } from '../../common/utility/get-image'
import { useScrollShrink } from '../../common/utility/use-scroll-shrink'
import { DetailContent } from './DetailContent'
import { SliderControlProps, SliderControls } from './SliderControls'

type ProjectDetailProps = {
  project: Queries.ProjectDetailFragment
} & SliderControlProps

export const ProjectDetail = ({ project, nextSlug, prevSlug }: ProjectDetailProps) => {
  const image = getStrapiImage(project.coverImage)

  const container = useRef<HTMLDivElement>(null)
  const shrink = useScrollShrink({ element: container.current })

  const dominantColor = image?.backgroundColor

  console.log(shrink)

  return project ? (
    <div ref={container} className="relative min-h-full overflow-auto">
      <div className={`h-[40vh] md:h-[40vh] lg:h-[50vh] relative`}>
        {image && (
          <div className="absolute inset-0 mx-auto animate-fadeInFast scroll ">
            <GatsbyImage
              image={image}
              objectFit="cover"
              objectPosition="50% 30%"
              className="w-full h-full "
              alt={project.coverImage?.alternativeText || ''}
            />
          </div>
        )}
        <div className="absolute inset-0 h-full top-[85%] bg-gradient-to-b from-transparent to-bg-primaryLayer" />
        <SliderControls prevSlug={prevSlug} nextSlug={nextSlug} />
      </div>
      <div className="relative z-10 pt-0 pb-16 border-t bg-primaryLayer -top-1 backdrop-blur-md md:backdrop-blur-lg lg:backdrop-blur-xl border-bg-primaryLayer ">
        <Container className="relative max-w-xl md:max-w-5xl -top-5 sm:-top-6 md:-top-8">
          <DetailContent project={project} />
        </Container>
      </div>
    </div>
  ) : null
}
