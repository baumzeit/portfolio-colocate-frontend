import { Transition } from '@headlessui/react'
import { useWindowSize } from '@react-hook/window-size'
import * as d3 from 'd3'
import { graphql } from 'gatsby'
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { StringParam, useQueryParams } from 'use-query-params'

import { FieldBaseFragment, ProjectDetailFragment } from '../../../graphql-types'
import { useJitterGrid } from '../../common/hooks/useJitterGrid'
import notEmpty from '../../common/utility/notEmpty'
import { ProjectDetail } from '../project/Detail'
import { VoronoiChart } from '../viz/Voronoi/VoronoiChart'

const jitter = d3.randomNormal(0, 0.05)

const Modal: FC<{ show: boolean }> = ({ show, children }) => {
  if (!show) return null
  return ReactDOM.createPortal(
    <Transition
      appear={true}
      show={show}
      enter="transition-opacity duration-600"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-600"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="absolute top-0 left-0 w-full h-full">{children}</div>
    </Transition>,
    document.body
  )
}

const findIdBySlug = (data: { slug?: string | null; id?: string | number | null }[], searchSlug?: string) =>
  searchSlug ? data.find((entity) => entity.slug === searchSlug)?.id?.toString() || null : null

export type SetModalProps = {
  data: ProjectDetailFragment | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export type SetModalFn = ({ onClose, onNext, onPrev, data }: SetModalProps) => void

export const Projects = ({ fields, projects }: { fields: FieldBaseFragment[]; projects: ProjectDetailFragment[] }) => {
  const chartRef = useRef(null)
  const [width, height] = useWindowSize({ initialHeight: 100, initialWidth: 100, wait: 300, leading: true })
  const [{ field: highlightedFieldSlug, project: exposedSlug }, setQuery] = useQueryParams({
    project: StringParam,
    field: StringParam
  })
  const [modalData, setModalData] = useState<SetModalProps>()

  const { getGridPosition, numCols, numRows } = useJitterGrid({
    minItems: projects.length,
    width,
    height,
    relMargin: { top: 0.15, right: 0.15, bottom: 0.15, left: 0.15 },
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

  useEffect(() => {
    if (projects) {
      const exposedIndex = projects.findIndex((project) => project.slug === exposedSlug)
      const nextIndex = (exposedIndex % (projects.length - 1)) + 1
      const prevIndex = exposedIndex > 0 ? exposedIndex - 1 : projects.length - 1
      setModalData({
        data: exposedIndex > -1 ? projects[exposedIndex] : null,
        onClose: () => (exposedSlug ? setQuery({ project: undefined }) : () => {}),
        onNext: () => (exposedSlug ? setQuery({ project: String(projects[nextIndex].slug) }) : () => {}),
        onPrev: () => (exposedSlug ? setQuery({ project: String(projects[prevIndex].slug) }) : () => {})
      })
    }
  }, [exposedSlug, projects, setQuery])

  return (
    <>
      <div ref={chartRef} id="voronoiContainer" className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {width && height && chartData ? (
          <VoronoiChart
            data={chartData}
            width={width}
            height={height}
            imageSize={Math.max(width / numCols, height / numRows) * 1.2}
            highlightedFieldId={highlightedFieldId}
            exposedProjectId={exposedProjectId}
            onClickCell={onClickCell}
          >
            {fields.map(({ id, color }) => (
              <pattern
                key={color}
                id={'diagonalHatchHighlight-' + id}
                patternUnits="userSpaceOnUse"
                width="4"
                height="4"
              >
                <path
                  d="M-1,1 l2,-2
                 M0,4 l4,-4
                 M3,5 l2,-2"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  stroke={color || 'black'}
                />
              </pattern>
            ))}
          </VoronoiChart>
        ) : (
          'Loading ...'
        )}
      </div>
      <Modal show={!!exposedSlug}>{modalData && <ProjectDetail {...modalData} />}</Modal>
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
