import useSize from '@react-hook/size'
import * as d3 from 'd3'
import { graphql, PageProps } from 'gatsby'
import React, { useMemo, useRef } from 'react'

import { AllProjectsDataQuery, StrapiProject } from '../../graphql-types'
import Layout from '../common/components/Layout'
import { VoronoiChart } from '../features/viz/VoronoiChart'

const chartPadding = { top: 3.5 * 16, left: 1 * 16, right: 1 * 16, bottom: 1.5 }

const generateImagePositions = (projects: StrapiProject[]) => {
  const rows = 4
  const columns = 4
  const imagePositions = projects.map((_, idx) => {
    const colIdx = idx % columns
    const rowIdx = Math.floor(idx / columns)
    return [
      d3.range(0.2, 0.8, 0.6 / Math.max(columns - 1, 1))[colIdx],
      d3.range(0.2, 0.8, 0.6 / Math.max(rows - 1, 1))[rowIdx]
    ]
  })
  return imagePositions
}

const ProjectsPage = ({ location, data: { allStrapiProject } }: PageProps<AllProjectsDataQuery>) => {
  const chartRef = useRef(null)
  const [width, height] = useSize(chartRef)

  console.log(allStrapiProject)
  const imagePositions = generateImagePositions(projects)
  const chartData = useMemo(
    () =>
      allStrapiProject.edges.map(({ node: project }, idx, arr) => ({
        x: imagePositions[idx][0] + d3.randomNormal(0, 0.03)(),
        y: imagePositions[idx][1] + d3.randomNormal(0, 0.03)(),
        imageUrl: images
          ? process.env.GATSBY_API_URL! + images?.[0]?.url || 'https://picsum.photos/600/300'
          : 'https://picsum.photos/600/' + (idx % 3 ? (idx % 2 ? '500' : '600') : '400'),
        title,
        id: strapiId,
        color
      })),
    [imagePositions, projects]
  )

  return (
    <Layout location={location}>
      <div ref={chartRef} className="absolute top-0 left-0 w-full h-full">
        <VoronoiChart data={chartData} padding={chartPadding} width={width} height={height} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AllProjectsData {
    allStrapiProject {
      edges {
        node {
          strapiFields {
            color
          }
          ...ProjectDetails
        }
      }
    }
  }
`

export default ProjectsPage
