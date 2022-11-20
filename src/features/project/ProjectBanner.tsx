import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

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
  const { highlightColor, coverImage } = project
  const gatsbyImage = getStrapiImage(coverImage)
  // const highlightColor = project.highlightColor

  const isEven = index % 2 === 0

  return (
    <div className={twMerge('grid grid-rows-1 grid-cols-1 overflow-hidden', className)}>
      <div className="col-start-1 row-start-1">
        <div className="aspect-video sm:aspect-square">
          {gatsbyImage && (
            <GatsbyImage
              image={gatsbyImage}
              alt={coverImage?.alternativeText || ''}
              className={`object-cover object-center h-full transition-all ease-out duration-700 ${
                !hideOverlay && !highlightColor ? 'opacity-90' : ''
              }`}
            />
          )}
        </div>
      </div>

      {!hideOverlay && (
        <div className="col-start-1 row-start-1">
          <div
            style={{ color: highlightColor || '' }}
            className={`z-10 h-full stripe-pattern  ${
              highlightColor ? 'opacity-70' : 'opacity-5 bg-secondary'
            } transition-all ease-out duration-200`}
          />
        </div>
      )}

      {!hideTitle && (
        <div className={`row-start-1 col-start-1 flex ${isEven ? 'justify-start' : 'justify-end'} items-start`}>
          <div
            className={`inline z-20 mt-[10%] ${
              isEven ? 'text-left' : 'text-right'
            } bg-[rgba(247,247,247,0.97)] dark:bg-[rgba(21,21,21,0.9)] shadow-md py-0.5 ${
              isEven ? 'pr-2 pl-0.5 rounded-tr-sm rounded-br-sm' : 'pl-2 pr-0.5 rounded-tl-sm rounded-bl-sm'
            }`}
          >
            <h2 className="tracking-wide text-secondary xs:text-xl">{project.title}</h2>
          </div>
        </div>
      )}
    </div>
  )
}
