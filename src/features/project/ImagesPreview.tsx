import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import { ProjectDetailFragment } from '../../../graphql-types'

export type ImagesPreviewProps = {
  images: ProjectDetailFragment['images']
  selectedImageIdx?: number | null
  onClick: (idx?: number) => void
  onClosePreview: () => void
}
export const ImagesPreview = ({ images, selectedImageIdx = null, onClick, onClosePreview }: ImagesPreviewProps) => {
  const breakpoint = useBreakpoint()
  return images ? (
    <>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-2 lg:grid-cols-3">
        {images.map((imageData, idx) => {
          const image = imageData?.file?.childImageSharp?.gatsbyImageData
          return image ? (
            <button
              key={imageData.id}
              className={`relative overflow-hidden rounded-sm shadow-sm transition-all animate-fadeInFast outline ${
                selectedImageIdx === idx ? 'outline-brand' : 'outline-transparent'
              }`}
              onClick={() => onClick(idx)}
            >
              <GatsbyImage
                image={image}
                alt={imageData.alternativeText || ''}
                className="object-cover object-center aspect-square"
                loading="lazy"
              />
            </button>
          ) : null
        })}
      </div>
      {breakpoint.lg && selectedImageIdx !== null && (
        <button onClick={onClosePreview} className="mt-3 tracking-wide text-highlight">
          show description
        </button>
      )}
    </>
  ) : null
}
