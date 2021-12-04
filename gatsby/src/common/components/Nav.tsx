import { Link, graphql, useStaticQuery } from 'gatsby'
import { navigate } from 'gatsby-link'
import React, { useContext, useState } from 'react'

import { NavDataQuery } from '../../../graphql-types'
import { highlightCellsByFieldId } from '../../features/viz/VoronoiChart'
import { PATH } from '../constants/paths'
import { ThemeContext } from './ThemeContextProvider'

export const Nav = ({ location }: { location?: Location }) => {
  const {
    strapiGlobal,
    allStrapiField: { edges }
  } = useStaticQuery<NavDataQuery>(query)

  const { theme, setTheme } = useContext(ThemeContext)
  const [selectedFieldId, setSelectedFieldId] = useState()

  if (!strapiGlobal) {
    return <p>no data</p>
  }
  const fields = edges.map((d) => d.node)
  const { siteName, logo } = strapiGlobal
  return (
    <div className="px-8 flex h-14 items-center justify-between relative z-50">
      <Link to="/" className="font-bold">
        <div className="flex align-center">
          {logo?.url && (
            <img
              src={process.env.GATSBY_API_URL! + logo.url}
              className={`h-5 mr-4 filter ${theme === 'dark' ? 'invert' : ''}`}
              alt="logo"
            />
          )}
          {siteName}
        </div>
      </Link>
      <div className="flex">
        <Link to="/projects">Projects</Link>
        {location && location.pathname.startsWith(PATH.PROJECTS) && (
          <div className="ml-4 text-brand">
            {fields.map(({ strapiId, color, name }, idx) => (
              <a
                href={'#field' + strapiId}
                key={strapiId}
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedFieldId(strapiId)
                  highlightCellsByFieldId(strapiId)
                }}
                style={{ color: color || 'inherit' }}
                className={`ml-5 animate-fadeIn animate-delay-${100 + 100 * idx} cursor-pointer font-mono ${
                  strapiId === selectedFieldId ? 'underline' : 'no-underline'
                }`}
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </div>
      <div>
        Theme
        <select
          onChange={(event) => setTheme(event.target.value)}
          className="text-brand bg-transparent form-select"
          value={theme}
        >
          <option value="dark">dark</option>
          <option value="light">light</option>
        </select>
      </div>
    </div>
  )
}

const query = graphql`
  query NavData {
    site {
      siteMetadata {
        siteURL
      }
    }
    strapiGlobal {
      siteName
      logo {
        url
      }
    }
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
