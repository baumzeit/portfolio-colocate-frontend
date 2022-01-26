import { Transition } from '@headlessui/react'
import { graphql, PageProps } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import React, { useMemo } from 'react'

import { ProjectsPageDataQuery } from '../../graphql-types'
import Layout from '../common/components/Layout'
import { Main } from '../common/components/Main'
import { Navbar } from '../common/components/Navbar'
import { assertAndExtractNodes } from '../common/utility/assertAndExtractNodes'
import { ProjectsNavContent } from '../features/projects/NavContent'
import { ProjectsList } from '../features/projects/ProjectsList'
import { ProjectsMap } from '../features/projects/ProjectsMap'

const ProjectsPage = ({ data: { allStrapiField, allStrapiProject } }: PageProps<ProjectsPageDataQuery>) => {
  const fields = useMemo(() => assertAndExtractNodes(allStrapiField), [allStrapiField])
  const projects = useMemo(() => assertAndExtractNodes(allStrapiProject), [allStrapiProject])

  const breakpoints = useBreakpoint()

  return (
    <Layout>
      <Navbar>
        <ProjectsNavContent />
      </Navbar>
      <Main fullWidth>
        <Transition
          appear={true}
          show={true}
          enter="transition-opacity duration-600"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-600"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {breakpoints.sm ? (
            <ProjectsMap fields={fields} projects={projects} />
          ) : (
            <ProjectsList fields={fields} projects={projects} />
          )}
        </Transition>
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
