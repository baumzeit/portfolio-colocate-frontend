import { Transition } from '@headlessui/react'
import { graphql, PageProps } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import React, { createContext, useMemo, useRef } from 'react'

import { AreaBaseFragment, ProjectDetailFragment, ProjectsPageDataQuery } from '../../../graphql-types'
import Layout from '../../common/components/Layout'
import { Main } from '../../common/components/Main'
import { Navbar } from '../../common/components/Navbar'
import { assertAndExtractNodes } from '../../common/utility/assertAndExtractNodes'
import { ProjectsNavContent } from '../../features/projects/NavContent'
import { ProjectsList } from '../../features/projects/ProjectsList'
import { ProjectsMap } from '../../features/projects/ProjectsMap'

export const ProjectsAreasContext = createContext<{ areas: AreaBaseFragment[]; projects: ProjectDetailFragment[] }>({
  areas: [],
  projects: []
})

const ProjectsPage = ({ data: { allStrapiArea, allStrapiProject } }: PageProps<ProjectsPageDataQuery>) => {
  const areas = useMemo(() => assertAndExtractNodes(allStrapiArea), [allStrapiArea])
  const projects = useMemo(() => assertAndExtractNodes(allStrapiProject), [allStrapiProject])

  const breakpoints = useBreakpoint()
  const scrollContainer = useRef(null)

  return (
    <ProjectsAreasContext.Provider value={{ areas, projects }}>
      <Layout>
        <Navbar className="z-30">
          <ProjectsNavContent />
        </Navbar>
        <Main className="overflow-y-auto" ref={scrollContainer}>
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
            {breakpoints.md ? <ProjectsMap /> : <ProjectsList />}
          </Transition>
        </Main>
      </Layout>
    </ProjectsAreasContext.Provider>
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
    allStrapiArea {
      edges {
        node {
          ...AreaBase
        }
      }
    }
  }
`

export default ProjectsPage
