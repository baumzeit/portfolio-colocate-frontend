import { Transition } from '@headlessui/react'
import { graphql, PageProps } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import React, { lazy, Suspense, useMemo } from 'react'

import Layout from '../../common/components/Layout'
import { Main } from '../../common/components/Main'
import { Navbar } from '../../common/components/Navbar'
import { areasAtom, projectsAtom } from '../../common/contexts/atoms'
import { assertAndExtractNodes } from '../../common/utility/assert-and-extract-nodes'
import { ProjectsNavContent } from '../../features/projects/NavContent'

const ProjectsList = lazy(() => import('../../features/projects/ProjectsList'))
const ProjectsMap = lazy(() => import('../../features/projects/ProjectsMap'))

export type ProjectsAndAreas = {
  projects: Queries.ProjectDetailFragment[]
  areas: Queries.AreaBaseFragment[]
}

const ProjectsPage = ({ data: { allStrapiArea, allStrapiProject } }: PageProps<Queries.ProjectsPageDataQuery>) => {
  const areas = useMemo(() => assertAndExtractNodes(allStrapiArea), [allStrapiArea])
  const projects = useMemo(() => assertAndExtractNodes(allStrapiProject), [allStrapiProject])

  const breakpoint = useBreakpoint()

  return (
    <Layout
      navbar={
        <Navbar>
          <ProjectsNavContent areas={areas} />
        </Navbar>
      }
      providerData={[
        [areasAtom, areas],
        [projectsAtom, projects]
      ]}
    >
      <Main>
        <Suspense
          fallback={
            <div className="flex items-center justify-center text-2xl font-light tracking-wide h-4/5 text-secondary">
              <div>Loading ...</div>
            </div>
          }
        >
          <Transition
            appear={!!breakpoint}
            show={true}
            enter="transition-opacity duration-600"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-600"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {breakpoint.md ? (
              <ProjectsMap projects={projects} areas={areas} />
            ) : (
              <ProjectsList projects={projects} areas={areas} />
            )}
          </Transition>
        </Suspense>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPageData {
    allStrapiProject(sort: { fields: [createdAt], order: DESC }) {
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
