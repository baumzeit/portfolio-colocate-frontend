import useIntersectionObserver from '@react-hook/intersection-observer'
import React, { useEffect, useRef, useState } from 'react'

import { ProjectDetailFragment } from '../../../graphql-types'

type ProjectBannerProps = {
  project: ProjectDetailFragment
  index: number
  shift: number | string
  hideTitle?: boolean
  disableImageOpacity?: boolean
  className?: string
}
export const ProjectBanner = ({
  project,
  index,
  shift,
  hideTitle,
  disableImageOpacity: hidePattern,
  className = ''
}: ProjectBannerProps) => {
  const firstImage = project.images?.[0]
  const src = firstImage?.localFile?.childImageSharp?.fixed?.src
  const isEven = index % 2 === 0
  const clipPolyEven = `polygon(0 0, 0 100%, 100% calc(100% - ${shift}), 100% ${shift})`
  const clipPolyOdd = `polygon(0 ${shift}, 0 calc(100% - ${shift}), 100% 100%, 100% 0)`

  const [isZoomed, setIsZoomed] = useState(false)

  // const banner = useRef<HTMLDivElement>(null)
  // const entry = useIntersectionObserver(banner, {
  //   rootMargin: `-${window.innerHeight * 0.4}px 0px -${window.innerHeight * 0.6}px 0px`
  // })
  // useEffect(() => {
  //   if (entry.isIntersecting !== isZoomed) {
  //     setIsZoomed(entry.isIntersecting)
  //   }
  // }, [isZoomed, project.title, entry])

  const layerStyle = {
    clipPath: isEven ? clipPolyEven : clipPolyOdd,
    marginTop: `calc(-${shift} / 2)`,
    height: `calc(100% + ${shift})`,
    gridArea: 'banner'
  }

  return (
    <div
      onTouchStart={() => setIsZoomed(true)}
      className={`grid group ${className}`}
      style={{ gridTemplateAreas: '"banner"' }}
    >
      <div className={`overflow-hidden`} style={layerStyle}>
        <img
          src={src}
          alt={firstImage?.alternativeText || ''}
          className={`object-cover object-center w-full h-full transition-all duration-500 ease-out group-hover:scale-[1.01] ${
            isZoomed ? 'scale-[1.01]' : ''
          }`}
        />
      </div>

      <div className={`overflow-hidden`} style={layerStyle}>
        <div
          className={`z-10 h-full stripe-pattern transition-all ease-out duration-200 group-hover:opacity-5 ${
            isZoomed ? 'scale-[1.01]' : 'group-hover:scale-[1.01]'
          } ${hidePattern ? 'opacity-0' : ''}`}
        />
      </div>

      {!hideTitle && (
        <div className={`flex ${isEven ? 'justify-start' : 'justify-end'} items-start `} style={{ gridArea: 'banner' }}>
          <div
            className={`z-20 py-0.5 mt-[8%] px-2.5 ${
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
