import { Transition } from '@headlessui/react'
import { graphql, PageProps } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import React, { useMemo, useRef } from 'react'

import { ProjectsPageDataQuery } from '../../graphql-types'
import Layout from '../common/components/Layout'
import { Main } from '../common/components/Main'
import { Navbar } from '../common/components/Navbar'
import { assertAndExtractNodes } from '../common/utility/assertAndExtractNodes'
import { ProjectsNavContent } from '../features/projects/NavContent'
import { ProjectsList } from '../features/projects/ProjectsList'
import { ProjectsMap } from '../features/projects/ProjectsMap'

const ProjectsPage = ({ data: { allStrapiArea, allStrapiProject } }: PageProps<ProjectsPageDataQuery>) => {
  const fields = useMemo(() => assertAndExtractNodes(allStrapiArea), [allStrapiArea])
  const projects = useMemo(() => assertAndExtractNodes(allStrapiProject), [allStrapiProject])

  const breakpoints = useBreakpoint()
  const scrollContainer = useRef(null)

  return (
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
    allStrapiArea {
      edges {
        node {
          ...AreaBase
        }
      }
    }
  }

  fragment ImageBase on StrapiUploadFile {
    id
    alternativeText
    caption
  }
  fragment AreaBase on StrapiArea {
    id
    slug
    name
    description
    color
  }
  fragment ProjectDetail on StrapiProject {
    id
    title
    name
    slug
    description
    organization {
      id
      name
      link
    }
    coverImage {
      ...ImageBase
      file {
        childImageSharp {
          gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
    images {
      ...ImageBase
      file {
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
    tags {
      id
      name
    }
    areas {
      ...AreaBase
    }
  }
`

export default ProjectsPage
