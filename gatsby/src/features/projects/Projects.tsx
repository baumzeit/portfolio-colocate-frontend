import { useWindowSize } from '@react-hook/window-size'
import * as d3 from 'd3'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { StringParam, useQueryParams } from 'use-query-params'

import { ProjectsPageDataQuery } from '../../../graphql-types'
import { useJitterGrid } from '../../common/hooks/useJitterGrid'
import notEmpty from '../../common/utility/notEmpty'
import { VoronoiViewOptions, VoronoiChart } from '../viz/Voronoi/VoronoiChart'

const jitter = d3.randomNormal(0, 0.05)

export const Projects = ({ allStrapiProject, allStrapiField }: ProjectsPageDataQuery) => {
  const chartRef = useRef(null)
  const [width, height] = useWindowSize({ initialHeight: 100, initialWidth: 100, wait: 300, leading: true })

  const { getGridPosition, numCols } = useJitterGrid({
    minItems: allStrapiProject.totalCount,
    width,
    height,
    relMargin: { top: 0.15, right: 0.15, bottom: 0.15, left: 0.15 },
    jitter
  })

  const chartData = useMemo(
    () =>
      getGridPosition
        ? allStrapiProject.edges.map(
            ({ node: { images, strapiId, strapiFields, title, description, slug, tags } }, idx) => ({
              x: getGridPosition(idx)[0],
              y: getGridPosition(idx)[1],
              imageUrl: images
                ? images?.[0]?.localFile?.childImageSharp?.fixed?.srcSet || 'https://picsum.photos/600/300'
                : 'https://picsum.photos/600/' + (idx % 3 ? (idx % 2 ? '500' : '600') : '400'),
              id: String(strapiId),
              title: String(title),
              slug: String(slug),
              description: String(description),
              tags:
                tags?.filter(notEmpty).map((d) => ({
                  name: String(d.name),
                  id: String(d.id)
                })) || [],
              fields:
                strapiFields?.filter(notEmpty).map((d) => ({
                  color: String(d.color),
                  name: String(d.name),
                  id: String(d.id)
                })) || []
            })
          )
        : null,
    [allStrapiProject.edges, getGridPosition]
  )

  console.log('outer component')

  return (
    <div
      ref={chartRef}
      id="voronoiContainer"
      className="absolute top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto "
    >
      {width && height && chartData ? (
        <VoronoiChart
          data={chartData}
          width={width}
          height={height}
          imageSize={(width / numCols) * 1.2}
          fields={allStrapiField.edges.map(({ node }) => ({ ...node, id: node.strapiId }))}
        >
          {allStrapiField.edges.map(({ node: { strapiId, color } }) => (
            <pattern
              key={color}
              id={'diagonalHatchHighlight-' + strapiId}
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
  )
}
