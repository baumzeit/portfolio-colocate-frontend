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
    <div className="grid">
      <div className="order-2">
        <GatsbyImage
          image={image}
          alt={alternativeText || ''}
          className="w-full rounded-sm animate-fadeIn"
          loading="lazy"
        />
      </div>
      <div className="flex justify-between order-3 gap-2 mt-2 md:order-1 md:mt-0">
        {caption && <div>{caption}</div>}
        <button onClick={onClose} className="flex items-center gap-2 mb-2 ml-auto tracking-wide text-highlight">
          {/* <ArrowDownIcon className="w-6 h-6" /> */}
          show description
        </button>
      </div>
    </div>
  ) : null
}
