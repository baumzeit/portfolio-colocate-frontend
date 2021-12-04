import { graphql, PageProps } from 'gatsby'
import React, { FC, useMemo } from 'react'

import { ProjectDataQuery } from '../../../graphql-types'
import Layout from '../../common/components/Layout'
// import { ProjectDetail } from '../../features/project/Detail'
import { VoronoiChart } from '../../features/viz/Voronoi/VoronoiChart'

const ProjectPage = ({ location, data: { strapiProject } }: PageProps<ProjectDataQuery>) => {
  const particles = useMemo(() => Array.from({ length: 4 }, () => ({ x: Math.random(), y: Math.random() })), [])
  return (
    <Layout location={location}>
      {/* <ProjectDetail project={strapiProject} />
      <div className="absolute top-0 left-0 w-full h-full">
        <VoronoiChart data={particles} />
      </div> */}
    </Layout>
  )
}

export const query = graphql`
  query ProjectData($slug: String!) {
    strapiProject(slug: { eq: $slug }) {
      ...ProjectDetails
    }
  }
`

export default ProjectPage
