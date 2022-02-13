import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

type ImageContainerProps = {
  image?: IGatsbyImageData | null
  caption?: string
  alternativeText?: string
  onClose?: () => void
}
export const ImageContainer = ({ image, caption, alternativeText, onClose }: ImageContainerProps) => {
  const breakpoint = useBreakpoint()
  return image ? (
    <div className="relative">
      <GatsbyImage
        image={image}
        alt={alternativeText || ''}
        className="w-full rounded-sm shadow animate-fadeIn"
        loading="lazy"
      />
      <div className="flex justify-between gap-2 mt-3">
        <div className="break-all">{caption && caption}</div>
        {!breakpoint.lg && (
          <button onClick={onClose} className="tracking-wide text-highlight">
            show description
          </button>
        )}
      </div>
    </div>
  ) : null
}
