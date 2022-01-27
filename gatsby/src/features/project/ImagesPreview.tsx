import React from 'react'

import { ProjectDetailFragment } from '../../../graphql-types'

type ImagesPreviewProps = {
  images: ProjectDetailFragment['images']
  onClick: (idx: number | null) => void
}
export const ImagesPreview = ({ images, onClick }: ImagesPreviewProps) => {
  return images ? (
    <>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-2 lg:grid-cols-3">
        {images.map((imageData, idx) => {
          const srcSet = imageData?.localFile?.childImageSharp?.fixed?.srcSet
          return srcSet ? (
            <button
              key={imageData.id}
              className={`overflow-hidden rounded-sm animate-fadeInFast`}
              onClick={() => onClick(idx)}
            >
              <img
                srcSet={srcSet}
                alt={imageData.alternativeText || ''}
                className="object-cover object-center aspect-square"
              />
            </button>
          ) : null
        })}
      </div>
    </>
  ) : null
}
