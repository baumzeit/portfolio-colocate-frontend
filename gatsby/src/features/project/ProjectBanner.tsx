import React from 'react'

import { ProjectDetailFragment } from '../../../graphql-types'

type ProjectBannerProps = {
  project: ProjectDetailFragment
  index: number
  shift: number | string
  hideTitle?: boolean
}
export const ProjectBanner = ({ project, index, shift, hideTitle }: ProjectBannerProps) => {
  const firstImage = project.images?.[0]
  const src = firstImage?.localFile?.childImageSharp?.fixed?.src
  const isEven = index % 2 === 0
  const clipPolyEven = `polygon(0 0, 0 100%, 100% calc(100% - ${shift}), 100% ${shift})`
  const clipPolyOdd = `polygon(0 ${shift}, 0 calc(100% - ${shift}), 100% 100%, 100% 0)`

  return (
    <div
      className={`relative flex ${
        isEven ? 'justify-start' : 'justify-end'
      } items-start w-full min-h-[160px] xs:min-h-[240px]`}
    >
      <div
        className={`absolute w-full`}
        style={{
          clipPath: isEven ? clipPolyEven : clipPolyOdd,
          top: `-${shift}`,
          height: `calc(100% + ${shift})`
        }}
      >
        <img src={src} alt={firstImage?.alternativeText || ''} className="object-cover object-center w-full h-full" />
      </div>

      {!hideTitle && (
        <div
          className={`relative py-1 mt-3 px-2 ${
            isEven ? 'pl-5 rounded-tr-sm rounded-br-sm' : 'pr-5 rounded-tl-sm rounded-bl-sm'
          } bg-primary`}
        >
          <h2 className="tracking-wide">{project.title}</h2>
        </div>
      )}
    </div>
  )
}
