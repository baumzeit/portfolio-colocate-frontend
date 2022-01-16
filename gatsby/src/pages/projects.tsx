import { graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'

import { ProjectsPageDataQuery } from '../../graphql-types'
import Layout from '../common/components/Layout'
import { Main } from '../common/components/Main'
import { Navbar } from '../common/components/Navbar'
import { assertAndExtractNodes } from '../common/utility/assertAndExtractNodes'
import { ProjectsNavContent } from '../features/projects/NavContent'
import { Projects } from '../features/projects/Projects'

const ProjectsPage = ({ data: { allStrapiField, allStrapiProject } }: PageProps<ProjectsPageDataQuery>) => {
  const fields = useMemo(() => assertAndExtractNodes(allStrapiField), [allStrapiField])
  const projects = useMemo(() => assertAndExtractNodes(allStrapiProject), [allStrapiProject])
  return (
    <Layout>
      <Navbar>
        <ProjectsNavContent />
      </Navbar>
      <Main fullWidth>
        <Projects fields={fields} projects={projects} />
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPageData {
    allStrapiProject {
      totalCount
      edges {
        node {
          ...ProjectDetail
        }
      }
    }
    allStrapiField {
      edges {
        node {
          ...FieldBase
        }
      }
    }
  }
`

export default ProjectsPage
