import * as d3 from 'd3'
import { graphql } from 'gatsby'
import { getSrcSet } from 'gatsby-plugin-image'
import React, { useCallback, useMemo } from 'react'
import { useWindowSize } from 'rooks'
import { StringParam, useQueryParams } from 'use-query-params'

import { AreaBaseFragment, ProjectDetailFragment } from '../../../graphql-types'
import { NAVBAR_HEIGHT } from '../../common/components/Layout'
import { Modal } from '../../common/components/Modal'
import { useJitterGrid } from '../../common/hooks/useJitterGrid'
import { useProjectModalData } from '../../common/hooks/useProjectModalData'
import notEmpty from '../../common/utility/notEmpty'
import { ProjectDetail } from '../project/Detail'
import { VoronoiChart } from '../viz/Voronoi/VoronoiChart'

const jitter = d3.randomNormal(0, 0.05)

const findIdBySlug = (data: { slug?: string | null; id?: string | number | null }[], searchSlug?: string) =>
  searchSlug ? data.find((entity) => entity.slug === searchSlug)?.id?.toString() || null : null

export type SetModalProps = {
  data: ProjectDetailFragment | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export type SetModalFn = ({ onClose, onNext, onPrev, data }: SetModalProps) => void

export const ProjectsMap = ({
  fields,
  projects
}: {
  fields: AreaBaseFragment[]
  projects: ProjectDetailFragment[]
}) => {
  const { innerWidth: width, innerHeight: height } = useWindowSize()
  const [{ field: highlightedFieldSlug, project: exposedSlug }, setQuery] = useQueryParams({
    project: StringParam,
    field: StringParam
  })

  const { getGridPosition, numCols, numRows } = useJitterGrid({
    minItems: projects.length,
    width,
    height: height ? height - NAVBAR_HEIGHT : height,
    relMargin: { top: 0.18, right: 0.14, bottom: 0.15, left: 0.14 },
    jitter
  })

  const highlightedFieldId = useMemo(
    () => findIdBySlug(fields, highlightedFieldSlug || undefined),
    [fields, highlightedFieldSlug]
  )

  const exposedProjectId = useMemo(() => findIdBySlug(projects, exposedSlug || undefined), [projects, exposedSlug])

  const onClickCell = useCallback(
    (id) => {
      setQuery({ project: projects.find((project) => project.id === id)?.slug || undefined, field: undefined })
    },
    [projects, setQuery]
  )

  const modalData = useProjectModalData(projects)

  const chartData = useMemo(
    () =>
      getGridPosition
        ? projects.map(({ coverImage, id, areas, title, slug }, idx) => ({
            x: getGridPosition(idx)[0],
            y: getGridPosition(idx)[1],
            imageSrcSet: coverImage
              ? getSrcSet(coverImage?.file?.childImageSharp?.gatsbyImageData) || 'https://picsum.photos/600/300'
              : 'https://picsum.photos/600/' + (idx % 3 ? (idx % 2 ? '500' : '600') : '400'),
            // ? images?.[0]?.file?.childImageSharp?.fixed?.srcSet || 'https://picsum.photos/600/300'
            // : 'https://picsum.photos/600/' + (idx % 3 ? (idx % 2 ? '500' : '600') : '400'),
            id: id,
            title: String(title),
            slug: String(slug),
            fields:
              areas?.filter(notEmpty).map((d) => ({
                color: String(d.color),
                name: String(d.name),
                id: d.id
              })) || []
          }))
        : null,
    [getGridPosition, projects]
  )

  return (
    <>
      <div id="voronoiContainer" className="overflow-hidden">
        {width && height && chartData ? (
          <VoronoiChart
            data={chartData}
            highlightPatternData={fields}
            width={width}
            height={height - NAVBAR_HEIGHT}
            imageSize={Math.max(width / numCols, height / numRows) * 1}
            highlightedFieldId={highlightedFieldId}
            exposedProjectId={exposedProjectId}
            onClickCell={onClickCell}
          />
        ) : (
          'Loading ...'
        )}
      </div>
      <Modal show={!!exposedSlug} enterClass="delay-150" containerClassName="absolute top-0 left-0 w-full h-full">
        {modalData && <ProjectDetail {...modalData} />}
      </Modal>
    </>
  )
}

// export const query = graphql`
//   fragment AreaBase on StrapiArea {
//     id
//     slug
//     name
//     description
//     color
//   }
//   fragment ProjectDetail on StrapiProject {
//     id
//     title
//     name
//     slug
//     description
//     organization {
//       data {
//         id
//       }
//     }
//     images {
//       id
//       url
//       alternativeText
//       caption
//       file {
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], width: 600)
//           fixed(width: 600) {
//             srcSet
//             src
//           }
//         }
//       }
//     }
//     tags {
//       id
//       name
//     }
//     areas {
//       id
//       name
//       description
//       color
//       slug
//     }
//   }
// `
