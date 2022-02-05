import React, { useMemo } from 'react'

import { ProjectDetailFragment } from '../../../graphql-types'
import { Tags } from '../../common/components/Tags'
import notEmpty from '../../common/utility/notEmpty'
import { ImageContainer } from './ImageContainer'

type DetailContentProps = {
  project: ProjectDetailFragment
  selectedImageIdx: number | null
  onClosePreview: () => void
}
export const DetailContent = ({
  project: { description, tags, images },
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
      <div
        className="relative grid"
        style={{
          gridTemplateAreas: '"content"'
        }}
      >
        <article
          className={`transition-opacity duration-300 ${
            selectedImage ? 'opacity-0 absolute overflow-hidden h-full w-full top-0 left-0' : 'opacity-100'
          }`}
          style={{
            gridArea: 'content'
          }}
        >
          <p className={`text-justify`}>{description}</p>
          {tags && (
            <div className="mt-6">
              <Tags tags={tags} />
            </div>
          )}
        </article>
        {selectedImage && (
          <div
            style={{
              gridArea: 'content'
            }}
            className="z-10"
          >
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
