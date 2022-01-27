import useIntersectionObserver from '@react-hook/intersection-observer'
import React, { useEffect, useRef, useState } from 'react'

import { ProjectDetailFragment } from '../../../graphql-types'

type ProjectBannerProps = {
  project: ProjectDetailFragment
  index: number
  shift: number | string
  hideTitle?: boolean
  disableImageOpacity?: boolean
}
export const ProjectBanner = ({ project, index, shift, hideTitle, disableImageOpacity }: ProjectBannerProps) => {
  const firstImage = project.images?.[0]
  const src = firstImage?.localFile?.childImageSharp?.fixed?.src
  const isEven = index % 2 === 0
  const clipPolyEven = `polygon(0 0, 0 100%, 100% calc(100% - ${shift}), 100% ${shift})`
  const clipPolyOdd = `polygon(0 ${shift}, 0 calc(100% - ${shift}), 100% 100%, 100% 0)`
  const banner = useRef<HTMLDivElement>(null)

  const entry = useIntersectionObserver(banner, {
    rootMargin: `-${window.innerHeight * 0.4}px 0px -${window.innerHeight * 0.6}px 0px`
  })

  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    if (entry.isIntersecting !== isZoomed) {
      setIsZoomed(entry.isIntersecting)
    }
  }, [isZoomed, project.title, entry])

  return (
    <div
      ref={banner}
      className={`relative flex ${
        isEven ? 'justify-start' : 'justify-end'
      } items-start max-w-full w-full min-h-[160px] xs:min-h-[240px]`}
    >
      <div
        className={`absolute w-full overflow-hidden`}
        style={{
          clipPath: isEven ? clipPolyEven : clipPolyOdd,
          top: `calc(-${shift} / 2)`,
          height: `calc(100% + ${shift})`
        }}
      >
        <img
          src={src}
          alt={firstImage?.alternativeText || ''}
          className={`object-cover object-center w-full h-full transition-all duration-500 ease-in-out ${
            isZoomed ? 'scale-[1.01]' : disableImageOpacity ? '' : 'opacity-80'
          }`}
        />
      </div>

      {!hideTitle && (
        <div
          className={`relative py-0.5 mt-[8%] px-2.5 ${
            isEven ? 'pl-3 rounded-tr-sm rounded-br-sm' : 'pr-3 rounded-tl-sm rounded-bl-sm'
          }  bg-white/90 dark:bg-black/90`}
        >
          <h2 className="tracking-wide text-secondary xs:text-lg">{project.title}</h2>
        </div>
      )}
    </div>
  )
}
