import React, { FC, useMemo } from 'react'

import { ProjectDataQuery } from '../../../graphql-types'
import { ProjectDetail } from '../../features/project/Detail'
import { VoronoiChart } from '../../features/viz/VoronoiChart'
import { graphql } from 'gatsby'
import Layout from '../../common/components/Layout'

const ProjectPage: FC<{ data: ProjectDataQuery }> = ({ data: { strapiProject } }) => {
  const particles = useMemo(() => Array.from({ length: 4 }, () => ({ x: Math.random(), y: Math.random() })), [])
  return (
    <Layout>
      <ProjectDetail project={strapiProject} />
      <div className="absolute top-0 left-0 w-full h-full">
        <VoronoiChart data={particles} />
      </div>
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
