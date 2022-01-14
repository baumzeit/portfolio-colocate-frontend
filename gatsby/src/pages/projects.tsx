import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { ProjectsPageDataQuery } from '../../graphql-types'
import Layout from '../common/components/Layout'
import { ProjectsNavContent } from '../features/projects/NavContent'
import { Projects } from '../features/projects/Projects'

const ProjectsPage = ({ location, data: { allStrapiField, allStrapiProject } }: PageProps<ProjectsPageDataQuery>) => {
  console.log('page rerender')
  return (
    <Layout navContent={<ProjectsNavContent location={location} />}>
      <Projects allStrapiField={allStrapiField} allStrapiProject={allStrapiProject} />
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
            slug
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
          slug
          color
        }
      }
    }
  }
`

export default ProjectsPage
