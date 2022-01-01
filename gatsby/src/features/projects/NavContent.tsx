import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'

import { ProjectsNavDataQuery } from '../../../graphql-types'
import { NavFilterFields } from '../../common/components/NavFilterFields'
import { sequenceCells } from '../viz/Voronoi/sequenceCells'

export const ProjectsNavContent = () => {
  const {
    allStrapiField: { edges }
  } = useStaticQuery<ProjectsNavDataQuery>(query)
  const fields = edges.map((d) => d.node)

  const [listView, setListView] = useState(false)
  useEffect(() => {
    sequenceCells(listView)
  }, [listView])

  return (
    <>
      <button onClick={() => setListView((d) => !d)}>toggle list</button>
      <div className="flex align-center">
        <NavFilterFields fields={fields} />
      </div>
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
