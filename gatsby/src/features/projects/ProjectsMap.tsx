import { useWindowSize } from '@react-hook/window-size'
import * as d3 from 'd3'
import { graphql } from 'gatsby'
import React, { useCallback, useMemo, useRef } from 'react'
import { StringParam, useQueryParams } from 'use-query-params'

import { FieldBaseFragment, ProjectDetailFragment } from '../../../graphql-types'
import { Modal } from '../../common/components/Modal'
import { NAVBAR_HEIGHT } from '../../common/components/Navbar'
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
  fields: FieldBaseFragment[]
  projects: ProjectDetailFragment[]
}) => {
  const chartRef = useRef(null)
  const [width, height] = useWindowSize({ initialHeight: 100, initialWidth: 100, wait: 300, leading: true })
  const [{ field: highlightedFieldSlug, project: exposedSlug }, setQuery] = useQueryParams({
    project: StringParam,
    field: StringParam
  })

  const { getGridPosition, numCols, numRows } = useJitterGrid({
    minItems: projects.length,
    width,
    height: height - NAVBAR_HEIGHT,
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
        ? projects.map(({ images, id, strapiFields, title, slug }, idx) => ({
            x: getGridPosition(idx)[0],
            y: getGridPosition(idx)[1],
            imageUrl: images
              ? images?.[0]?.localFile?.childImageSharp?.fixed?.srcSet || 'https://picsum.photos/600/300'
              : 'https://picsum.photos/600/' + (idx % 3 ? (idx % 2 ? '500' : '600') : '400'),
            id: String(id),
            title: String(title),
            slug: String(slug),
            fields:
              strapiFields?.filter(notEmpty).map((d) => ({
                color: String(d.color),
                name: String(d.name),
                id: 'Field_' + d.id
              })) || []
          }))
        : null,
    [getGridPosition, projects]
  )

  return (
    <>
      <div ref={chartRef} id="voronoiContainer" className={`max-h-[calc(100vh-${NAVBAR_HEIGHT})]`}>
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
      <Modal id="project-map-detail" show={!!exposedSlug} enterClass="delay-300">
        {modalData && <ProjectDetail {...modalData} />}
      </Modal>
    </>
  )
}

export const query = graphql`
  fragment FieldBase on StrapiField {
    id
    slug
    name
    description
    color
  }
  fragment ProjectDetail on StrapiProject {
    id
    title
    name
    slug
    description
    organization {
      id
      name
      website
    }
    images {
      id
      url
      alternativeText
      localFile {
        childImageSharp {
          fixed(width: 600) {
            srcSet
            src
          }
        }
      }
    }
    tags {
      id
      name
    }
    strapiFields {
      id
      name
      description
      color
      slug
    }
  }
`