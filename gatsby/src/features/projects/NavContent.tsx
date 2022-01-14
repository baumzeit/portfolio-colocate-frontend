import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { useQueryParam } from 'use-query-params'

import { ProjectsNavDataQuery } from '../../../graphql-types'
import { NavFilterFields } from './NavFilterFields'
// import { NavSelectView } from './NavSelectView'

export const ProjectsNavContent = ({ location }: { location: Location }) => {
  const {
    allStrapiField: { edges }
  } = useStaticQuery<ProjectsNavDataQuery>(query)
  const fields = edges.map((d) => d.node)

  const [exposedSlug, setExposedSlug] = useQueryParam<string | undefined>('project')

  return (
    <>
      {/* <NavSelectView location={location} /> */}
      {exposedSlug ? (
        <button
          onClick={(e) => {
            setExposedSlug(undefined)
          }}
          className={`ml-2 animate-fadeIn px-2 py-1 cursor-pointer rounded-md hover:brightness-110 `}
        >
          Zurück
        </button>
      ) : (
        <NavFilterFields fields={fields} />
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
