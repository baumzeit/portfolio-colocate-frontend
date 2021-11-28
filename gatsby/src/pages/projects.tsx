import * as d3 from 'd3'
import { AllProjectsDataQuery } from '../../graphql-types'
import { VoronoiChart } from '../features/viz/VoronoiChart'
import { graphql } from 'gatsby'
import Layout from '../common/components/Layout'
import React, { FC, useMemo } from 'react'

const ProjectsPage: FC<{ data: AllProjectsDataQuery }> = ({ data: { allStrapiProject } }) => {
  const projects = d3.shuffle([...allStrapiProject.edges.map((edge) => edge.node), 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
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
  console.log({ imagePositions, projects })
  const chartData = useMemo(
    () =>
      projects.map(({ images }, idx) => ({
        x: imagePositions[idx][0] + d3.randomNormal(0, 0.03)(),
        y: imagePositions[idx][1] + d3.randomNormal(0, 0.03)(),
        imageUrl: images
          ? process.env.GATSBY_API_URL + images[0].url
          : 'https://picsum.photos/600/' + (idx % 2 ? '500' : '600')
      })),
    [imagePositions, projects]
  )

  console.log(chartData)
  return (
    <Layout>
      <div className="absolute top-0 left-0 w-full h-full">
        <VoronoiChart data={chartData} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AllProjectsData {
    allStrapiProject {
      edges {
        node {
          ...ProjectDetails
        }
      }
    }
  }
`

export default ProjectsPage
