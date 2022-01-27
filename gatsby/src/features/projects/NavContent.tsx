import { graphql, useStaticQuery } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import React from 'react'
import { useQueryParam } from 'use-query-params'

import { ProjectsNavDataQuery } from '../../../graphql-types'
import { NavFilterFields, NavFilterFieldsSelect } from './NavFilterFields'

export const ProjectsNavContent = () => {
  const {
    allStrapiField: { edges }
  } = useStaticQuery<ProjectsNavDataQuery>(query)
  const fields = edges.map((d) => d.node)

  const [exposedSlug, setExposedSlug] = useQueryParam<string | undefined>('project')
  const breakpoints = useBreakpoint()

  return (
    <>
      {exposedSlug ? (
        <button
          onClick={(e) => {
            setExposedSlug(undefined)
          }}
          className={`animate-fadeIn p-3 hover:text-brand tracking-wide`}
        >
          Close
        </button>
      ) : breakpoints.lg ? (
        <div>
          <NavFilterFields fields={fields} />
        </div>
      ) : (
        <div className="self-start block mt-3.5 min-w-[180px] lg:hidden">
          <NavFilterFieldsSelect fields={fields} />
        </div>
      )}
    </>
  )
}
const query = graphql`
  query ProjectsNavData {
    allStrapiField {
      edges {
        node {
          strapiId
          name
          color
          slug
          projects {
            id
          }
        }
      }
    }
  }
`
