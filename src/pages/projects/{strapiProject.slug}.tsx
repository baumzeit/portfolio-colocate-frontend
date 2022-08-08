import { PageProps } from 'gatsby'
import { navigate, graphql } from 'gatsby'
import React from 'react'

import Layout from '../../common/components/Layout'
import { Navbar } from '../../common/components/Navbar'
import { PATH } from '../../common/constants/paths'
import { ProjectDetail } from '../../features/project/Detail'
import { ProjectDetailNavContent } from '../../features/project/NavContent'

export type ProjectsAndAreas = {
  projects: Queries.ProjectDetailFragment[]
  areas: Queries.AreaBaseFragment[]
}

type HighlightAreaState =
  | {
      highlightArea?: Queries.AreaBaseFragment | null
    }
  | undefined

const ProjectsDetailPage = ({
  data: { project, allProjects },
  location: { state }
}: PageProps<Queries.ProjectDetailPageQuery, object, HighlightAreaState>) => {
  const areaSlug = state?.highlightArea?.slug
  const areaHash = areaSlug ? `#${areaSlug}` : ''
  const activePojectIdx = allProjects.nodes.findIndex(({ slug }) => slug === project?.slug)
  const prevIdx = activePojectIdx > 0 ? activePojectIdx - 1 : allProjects.nodes.length - 1
  const nextIdx = (activePojectIdx + 1) % allProjects.nodes.length
  const [prevSlug, nextSlug] = [prevIdx, nextIdx].map((idx) => allProjects.nodes[idx].slug || '')

  if (!project) {
    return null
  }

  return (
    <Layout
      navbar={
        <Navbar className="shadow-lg">
          <ProjectDetailNavContent onClose={() => navigate(`${PATH.PROJECTS}${areaHash}`)} />
        </Navbar>
      }
    >
      <ProjectDetail project={project} nextSlug={nextSlug} prevSlug={prevSlug} />
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetailPage($slug: String!) {
    allProjects: allStrapiProject(sort: { fields: [createdAt], order: DESC }) {
      nodes {
        slug
        createdAt
      }
    }
    project: strapiProject(slug: { eq: $slug }) {
      ...ProjectDetail
    }
  }
`

export default ProjectsDetailPage
