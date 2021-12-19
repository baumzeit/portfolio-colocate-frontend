import { ArrowSmRightIcon } from '@heroicons/react/solid'
import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useContext } from 'react'

import { NavDataQuery } from '../../../graphql-types'
import { PATH } from '../constants/paths'
import { NavFilterFields } from './NavFilterFields'
import { ThemeContext } from './ThemeContextProvider'
export const Nav = ({ location }: { location?: Location }) => {
  const {
    strapiGlobal,
    allStrapiField: { edges }
  } = useStaticQuery<NavDataQuery>(query)

  const { theme, setTheme } = useContext(ThemeContext)
  const fields = edges.map((d) => d.node)

  if (!strapiGlobal) {
    return <p>no data</p>
  }
  const { siteName, logo } = strapiGlobal
  return (
    <div className="relative z-50 flex items-center justify-between px-8 bg-primaryLayer h-14">
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
      <div className="flex align-center">
        {location && location.pathname.startsWith(PATH.PROJECTS) ? (
          <NavFilterFields fields={fields} />
        ) : (
          <Link to="/projects">
            Projects{' '}
            <span>
              <ArrowSmRightIcon className="w-5 h-5" />
            </span>
          </Link>
        )}
      </div>
      <div>
        Theme
        <select
          onChange={(event) => setTheme(event.target.value)}
          className="bg-transparent text-brand form-select"
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
