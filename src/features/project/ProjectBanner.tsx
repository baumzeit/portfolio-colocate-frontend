import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'

import { theme } from '../../../tailwind.config'
import { DisplayProject } from '../projects/ProjectsList'

type ProjectBannerProps = {
  project: DisplayProject
  index: number
  hideTitle?: boolean
  hideOverlay?: boolean
  className?: string
}
export const ProjectBanner = ({ project, hideTitle, hideOverlay, index, className = '' }: ProjectBannerProps) => {
  const firstImage = project.images?.[0]
  const isEven = index % 2 === 0

  const [isTouched, setIsTouched] = useState(false)

  return (
    <div
      className={`grid grid-rows-1 grid-cols-1 ${className} overflow-hidden`}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
    >
      <div className="col-start-1 row-start-1">
        <GatsbyImage
          image={firstImage?.file?.childImageSharp?.gatsbyImageData}
          alt={firstImage?.alternativeText || ''}
          className={`object-cover aspect-square object-center w-full h-full transition-all ease-out duration-700 ${
            !hideOverlay ? (isTouched ? 'scale-[1.01]  opacity-100' : 'opacity-90') : ''
          }`}
          // className={`object-cover object-center w-full h-full ${hideOverlay ? 'opacity-100' : 'opacity-90'}`}
        />
      </div>

      {!hideOverlay && (
        <div className="col-start-1 row-start-1">
          <div
            style={{ color: project.highlightColor || theme.extend.colors['bg-secondary'] }}
            className={`z-10 h-full stripe-pattern  ${
              project.highlightColor ? 'opacity-80' : 'opacity-30'
            } transition-all ease-out duration-200 ${!hideOverlay && isTouched ? 'scale-[1.01] opacity-5' : ''}`}
            // className={`z-10 h-full stripe-pattern  ${project.highlightColor ? 'opacity-80' : 'opacity-30'}`}
          />
        </div>
      )}

      {!hideTitle && (
        <div className={`row-start-1 col-start-1 flex ${isEven ? 'justify-start' : 'justify-end'} items-start`}>
          <div
            className={`z-20 py-0.5 mt-[8%] px-2.5 shadow-sm ${
              isEven ? 'pl-3 rounded-tr-sm rounded-br-sm' : 'pr-3 rounded-tl-sm rounded-bl-sm'
            }  bg-white/90 dark:bg-black/90`}
          >
            <h2 className="tracking-wide text-secondary xs:text-lg">{project.title}</h2>
          </div>
        </div>
      )}
    </div>
  )
}
