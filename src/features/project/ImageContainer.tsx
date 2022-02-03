import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

type ImageContainerProps = {
  image?: IGatsbyImageData | null
  caption?: string
  alternativeText?: string
  onClose: () => void
}
export const ImageContainer = ({ image, caption, alternativeText, onClose }: ImageContainerProps) => {
  return image ? (
    <div>
      <div className="flex justify-between gap-2">
        {caption && <div>{caption}</div>}
        <button onClick={onClose} className="flex items-center gap-2 py-1 mb-2 ml-auto tracking-wide text-highlight">
          {/* <ArrowDownIcon className="w-6 h-6" /> */}
          show description
        </button>
      </div>
      <GatsbyImage image={image} alt={alternativeText || ''} className="w-full rounded-sm animate-fadeIn" />
    </div>
  ) : null
}
