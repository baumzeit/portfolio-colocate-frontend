import useSize from '@react-hook/size'
import * as d3 from 'd3'
import { graphql, PageProps } from 'gatsby'
import React, { useMemo, useRef } from 'react'

import { ProjectsPageDataQuery } from '../../graphql-types'
import Layout from '../common/components/Layout'
import { useJitterGrid } from '../common/hooks/useJitterGrid'
import notEmpty from '../common/utility/notEmpty'
import { VoronoiChart } from '../features/viz/Voronoi/VoronoiChart'

const chartPadding = { top: 3.5 * 16, left: 1.5 * 16, right: 1.5 * 16, bottom: 1.5 }
const jitter = d3.randomNormal(0, 0.05)

const ProjectsPage = ({ location, data: { allStrapiProject, allStrapiField } }: PageProps<ProjectsPageDataQuery>) => {
  const chartRef = useRef(null)
  const [width, height] = useSize(chartRef)

  const { getGridPosition } = useJitterGrid({
    minItems: allStrapiProject.totalCount,
    width,
    height,
    relMargin: { top: 0.15, right: 0.15, bottom: 0.15, left: 0.15 },
    jitter
  })

  const chartData = useMemo(
    () =>
      getGridPosition
        ? allStrapiProject.edges.map(({ node: { images, strapiId, strapiFields, title, description } }, idx) => ({
            x: getGridPosition(idx)[0],
            y: getGridPosition(idx)[1],
            imageUrl: images
              ? images?.[0]?.localFile.childImageSharp.fixed.srcSet || 'https://picsum.photos/600/300'
              : 'https://picsum.photos/600/' + (idx % 3 ? (idx % 2 ? '500' : '600') : '400'),
            id: strapiId,
            title,
            description,
            fields: strapiFields?.filter(notEmpty) || []
          }))
        : [],
    [allStrapiProject.edges, getGridPosition]
  )

  return (
    <Layout location={location}>
      <div
        ref={chartRef}
        id="voronoiContainer"
        className="absolute top-0 left-0 w-full h-full animate-fadeIn animate-delay-400"
      >
        <VoronoiChart data={chartData} padding={chartPadding} width={width} height={height}>
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
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPageData {
    allStrapiProject {
      totalCount
      edges {
        node {
          strapiFields {
            id
            name
            color
          }
          ...ProjectDetails
        }
      }
    }
    allStrapiField {
      edges {
        node {
          strapiId
          name
          color
        }
      }
    }
  }
`

export default ProjectsPage
