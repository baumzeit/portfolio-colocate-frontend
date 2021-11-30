import * as d3 from 'd3'
import { AllProjectsDataQuery } from '../../graphql-types'
import { VoronoiChart } from '../features/viz/VoronoiChart'
import { VoronoiChartSvg } from '../features/viz/VoronoiChartSvg'
import { graphql } from 'gatsby'
import Layout from '../common/components/Layout'
import React, { FC, useMemo } from 'react'

const ProjectsPage: FC<{ data: AllProjectsDataQuery }> = ({ data: { allStrapiProject } }) => {
  const projects = d3.shuffle([
    ...allStrapiProject.edges.map((edge) => edge.node),
    { title: 'Project Title 4', strapiId: 44 },
    { title: 'Project Title 5', strapiId: 55 },
    { title: 'Project Title 6', strapiId: 66 },
    { title: 'Project Title 7', strapiId: 77 },
    { title: 'Project Title 8', strapiId: 88 },
    { title: 'Project Title 9', strapiId: 99 },
    { title: 'Project Title 10', strapiId: 1010 },
    { title: 'Project Title 11', strapiId: 1111 },
    { title: 'Project Title 12', strapiId: 1212 },
    { title: 'Project Title 13', strapiId: 1313 },
    { title: 'Project Title 14', strapiId: 1414 },
    { title: 'Project Title 15', strapiId: 1515 }
  ])
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
      projects.map(({ images, title, strapiId }, idx) => ({
        x: imagePositions[idx][0] + d3.randomNormal(0, 0.03)(),
        y: imagePositions[idx][1] + d3.randomNormal(0, 0.03)(),
        imageUrl: images
          ? process.env.GATSBY_API_URL + images[0].url
          : 'https://picsum.photos/600/' + (idx % 3 ? (idx % 2 ? '500' : '600') : '400'),
        title,
        id: strapiId
      })),
    [imagePositions, projects]
  )

  return (
    <Layout>
      <div className="absolute top-0 left-0 w-full h-full">
        <VoronoiChartSvg data={chartData} />
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
