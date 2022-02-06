import React, { useMemo } from 'react'

import { ProjectDetailFragment } from '../../../graphql-types'
import { RenderMd } from '../../common/components/RenderMd'
import notEmpty from '../../common/utility/notEmpty'
import { ImageContainer } from './ImageContainer'

type DetailContentProps = {
  project: ProjectDetailFragment
  selectedImageIdx: number | null
  onClosePreview: () => void
}
export const DetailContent = ({
  project: { description, images },
  selectedImageIdx,
  onClosePreview
}: DetailContentProps) => {
  const selectedImage = useMemo(() => {
    if (images && selectedImageIdx !== null) {
      return images.filter(notEmpty)[selectedImageIdx]
    }
  }, [images, selectedImageIdx])

  return (
    <div className="flex-1 order-2 md:order-1">
      <div className="relative grid">
        <article
          className={`transition-opacity duration-300 col-start-1 ${
            selectedImage ? 'opacity-0 absolute overflow-hidden h-full w-full top-0 left-0' : 'opacity-100'
          }`}
        >
          <RenderMd className={`text-justify`} content={description} />
        </article>
        {selectedImage && (
          <div className="z-10 col-start-1 min-h-[70vw] md:min-h-0 md:aspect-square">
            <ImageContainer
              image={selectedImage.file?.childImageSharp?.gatsbyImageData}
              caption={selectedImage.caption || ''}
              alternativeText={selectedImage.alternativeText || ''}
              onClose={onClosePreview}
            />
          </div>
        )}
      </div>
    </div>
  )
}
