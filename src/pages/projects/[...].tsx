import { Transition } from '@headlessui/react'
import { graphql, PageProps } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import React, { createContext, lazy, Suspense, useMemo } from 'react'

import Layout from '../../common/components/Layout'
import { Main } from '../../common/components/Main'
import { Navbar } from '../../common/components/Navbar'
import { assertAndExtractNodes } from '../../common/utility/assert-and-extract-nodes'
import { ProjectsNavContent } from '../../features/projects/NavContent'

const ProjectsList = lazy(() => import('../../features/projects/ProjectsList'))
const ProjectsMap = lazy(() => import('../../features/projects/ProjectsMap'))

export const ProjectsAreasContext = createContext<{
  areas: Queries.AreaBaseFragment[]
  projects: Queries.ProjectDetailFragment[]
}>({
  areas: [],
  projects: []
})

const ProjectsPage = ({ data: { allStrapiArea, allStrapiProject } }: PageProps<Queries.ProjectsPageDataQuery>) => {
  const areas = useMemo(() => assertAndExtractNodes(allStrapiArea), [allStrapiArea])
  const projects = useMemo(() => assertAndExtractNodes(allStrapiProject), [allStrapiProject])

  const breakpoints = useBreakpoint()

  return (
    <ProjectsAreasContext.Provider value={{ areas, projects }}>
      <Layout>
        <Navbar>
          <ProjectsNavContent />
        </Navbar>
        <Main className="overflow-x-hidden">
          <Suspense
            fallback={
              <div className="h-4/5 flex items-center justify-center text-2xl tracking-wide font-light text-secondary">
                <div>Loading ...</div>
              </div>
            }
          >
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
          </Suspense>
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
