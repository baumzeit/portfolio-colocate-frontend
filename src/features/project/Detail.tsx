import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import { Container } from '../../common/components/Container'
import { getImageData } from '../../common/utility/get-image-data'
import { DetailContent } from './DetailContent'
import { SliderControlProps, SliderControls } from './SliderControls'

type ProjectDetailProps = {
  project: Queries.ProjectDetailFragment
} & SliderControlProps

export const ProjectDetail = ({ project, nextSlug, prevSlug }: ProjectDetailProps) => {
  const image = getImageData(project.coverImage)

  return project ? (
    <div>
      <div className={`h-[40vh] lg:h-[40vh] relative`}>
        {image && (
          <GatsbyImage
            image={image}
            alt={project.coverImage?.alternativeText || ''}
            className="absolute inset-0 animate-fadeInFast"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-primary via-white/20 dark:from-transparent dark:to-bg-primary dark:via-black/30 " />
        <SliderControls prevSlug={prevSlug} nextSlug={nextSlug} />
      </div>
      <Container className="relative z-10 max-w-xl pb-16 md:max-w-5xl -mt-14">
        <DetailContent project={project} />
      </Container>
    </div>
  ) : null
}
