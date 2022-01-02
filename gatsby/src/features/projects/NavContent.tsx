import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import { ProjectsNavDataQuery } from '../../../graphql-types'
import { NavFilterFields } from './NavFilterFields'
// import { NavSelectView } from './NavSelectView'

export const ProjectsNavContent = ({ location }: { location: Location }) => {
  const {
    allStrapiField: { edges }
  } = useStaticQuery<ProjectsNavDataQuery>(query)
  const fields = edges.map((d) => d.node)

  return (
    <>
      {/* <NavSelectView location={location} /> */}
      <NavFilterFields location={location} fields={fields} />
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
          projects {
            id
          }
        }
      }
    }
  }
`
