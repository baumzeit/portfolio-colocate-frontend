import { AllProjectsDataQuery } from '../../graphql-types'
import { VoronoiChart } from '../features/viz/VoronoiChart'
import { graphql } from 'gatsby'
import Layout from '../common/components/Layout'
import React, { FC, useMemo } from 'react'

const ProjectsPage: FC<{ data: AllProjectsDataQuery }> = ({ data: { allStrapiProject } }) => {
  const projects = allStrapiProject.edges.map((edge) => edge.node)
  const chartData = useMemo(
    () =>
      projects.map(({ images }) => ({
        x: Math.random(),
        y: Math.random(),
        imageUrl: process.env.GATSBY_API_URL + images[0].url
      })),
    [projects]
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
