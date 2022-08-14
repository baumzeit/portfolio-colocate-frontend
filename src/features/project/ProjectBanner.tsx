import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'

import { getStrapiImage } from '../../common/utility/get-image'
import { DisplayProject } from '../projects/ProjectsList'

type ProjectBannerProps = {
  project: DisplayProject
  index?: number
  hideTitle?: boolean
  hideOverlay?: boolean
  className?: string
}
export const ProjectBanner = ({ project, hideTitle, hideOverlay, index = 0, className = '' }: ProjectBannerProps) => {
  const coverImage = project.coverImage
  const gatsbyImage = getStrapiImage(coverImage)

  const isEven = index % 2 === 0

  return (
    <div className={`grid grid-rows-1 grid-cols-1 ${className} overflow-hidden`}>
      <div className="col-start-1 row-start-1">
        {gatsbyImage && (
          <GatsbyImage
            image={gatsbyImage}
            alt={coverImage?.alternativeText || ''}
            className={`object-cover aspect-video max-h-64 sm:aspect-square md:max-h-full object-center w-full h-full transition-all ease-out duration-700 ${
              !hideOverlay ? 'opacity-90' : ''
            }`}
          />
        )}
      </div>

      {!hideOverlay && (
        <div className="col-start-1 row-start-1">
          <div
            style={{ color: project.highlightColor || '' }}
            className={`z-10 h-full stripe-pattern  ${
              project.highlightColor ? 'opacity-80' : 'opacity-10 bg-secondary'
            } transition-all ease-out duration-200`}
          />
        </div>
      )}

      {!hideTitle && (
        <div className={`row-start-1 col-start-1 flex ${isEven ? 'justify-start' : 'justify-end'} items-start`}>
          <div className={`z-20 mt-[10%] ${isEven ? 'text-left' : 'text-right'}`}>
            <h2
              className="inline py-1 tracking-wide text-secondary xs:text-xl bg-white/95 dark:bg-black/90"
              style={{ boxShadow: '8px 0 0 var(--bg-primary), -8px 0 0 var(--bg-primary)' }}
            >
              {project.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  )
}
