import { ArrowDownIcon } from '@heroicons/react/outline'
import React from 'react'

type ImageContainerProps = {
  image: {
    id?: number | null | undefined
    url?: string | null | undefined
    alternativeText?: string | null | undefined
    localFile?:
      | { childImageSharp?: { fixed?: { srcSet: string; src: string } | null | undefined } | null | undefined }
      | null
      | undefined
  }
  onClose: () => void
}
export const ImageContainer = ({ image, onClose }: ImageContainerProps) => {
  return image ? (
    <div>
      <div className="flex justify-between gap-2">
        {image?.caption && <div>{image.caption}</div>}
        <button onClick={onClose} className="flex items-center gap-2 py-1 mb-2 ml-auto tracking-wide text-highlight">
          {/* <ArrowDownIcon className="w-6 h-6" /> */}
          show description
        </button>
      </div>
      <img
        srcSet={image.localFile?.childImageSharp?.fixed?.srcSet}
        alt={image.alternativeText || ''}
        className="w-full rounded-sm animate-fadeIn"
      />
    </div>
  ) : null
}
