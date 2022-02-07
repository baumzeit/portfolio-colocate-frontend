import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'

import { theme } from '../../../tailwind.config'
import { DisplayProject } from '../projects/ProjectsList'

type ProjectBannerProps = {
  project: DisplayProject
  index: number
  shift: number | string
  hideTitle?: boolean
  hideOverlay?: boolean
  className?: string
}
export const ProjectBanner = ({
  project,
  index,
  shift,
  hideTitle,
  hideOverlay,
  className = ''
}: ProjectBannerProps) => {
  const firstImage = project.images?.[0]
  const isEven = index % 2 === 0
  const clipPolyEven = `polygon(0 0, 0 100%, 100% calc(100% - ${shift}), 100% ${shift})`
  const clipPolyOdd = `polygon(0 ${shift}, 0 calc(100% - ${shift}), 100% 100%, 100% 0)`

  const layerStyle = {
    // clipPath: isEven ? clipPolyEven : clipPolyOdd,
    // gridArea: 'banner',
    // maxHeight: 'inherit'
  }

  return (
    <div className={`grid group ${className} overflow-hidden`} style={{ gridTemplateAreas: '"banner"' }}>
      <div style={layerStyle}>
        <GatsbyImage
          image={firstImage?.file?.childImageSharp?.gatsbyImageData}
          alt={firstImage?.alternativeText || ''}
          // className={`object-cover object-center w-full h-full transition-all ease-out duration-700 ${
          //   !hideOverlay ? (isTouched ? 'scale-[1.01]  opacity-100' : 'opacity-90') : ''
          // }`}
          className={`object-cover object-center w-full h-full ${hideOverlay ? 'opacity-100' : 'opacity-90'}`}
        />
      </div>

      {!hideOverlay && (
        <div style={layerStyle}>
          <div
            style={{ color: project.highlightColor || theme.extend.colors['bg-secondary'] }}
            // className={`z-10 h-full stripe-pattern  ${
            //   project.highlightColor ? 'opacity-80' : 'opacity-30'
            // } transition-all ease-out duration-200 ${!hideOverlay && isTouched ? 'scale-[1.01] opacity-5' : ''}`}
            className={`z-10 h-full stripe-pattern  ${project.highlightColor ? 'opacity-80' : 'opacity-30'}`}
          />
        </div>
      )}

      {!hideTitle && (
        <div className={`flex ${isEven ? 'justify-start' : 'justify-end'} items-start `} style={{ gridArea: 'banner' }}>
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
