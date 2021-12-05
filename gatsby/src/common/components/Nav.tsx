import { ArrowSmRightIcon } from '@heroicons/react/solid'
import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useContext, useEffect, useMemo, useState } from 'react'

import { NavDataQuery } from '../../../graphql-types'
import { highlightCellsByFieldId } from '../../features/viz/Voronoi/highlightCellsByField'
import { PATH } from '../constants/paths'
import { ThemeContext } from './ThemeContextProvider'
export const Nav = ({ location }: { location?: Location }) => {
  const {
    strapiGlobal,
    allStrapiField: { edges }
  } = useStaticQuery<NavDataQuery>(query)

  const { theme, setTheme } = useContext(ThemeContext)
  const [selectedFieldId, setSelectedFieldId] = useState<number | null>(null)
  const fields = edges.map((d) => d.node)

  useEffect(() => {
    highlightCellsByFieldId(selectedFieldId)
  }, [selectedFieldId])

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
          <div className="ml-4 first-of-type:ml-0 text-brand">
            {fields.map(({ strapiId = null, color, name }, idx) => {
              const isActive = strapiId === selectedFieldId
              return (
                <button
                  key={strapiId}
                  onClick={(e) => {
                    setSelectedFieldId(isActive ? null : strapiId)
                  }}
                  style={{ color: color || 'inherit' }}
                  className={`ml-2 animate-fadeIn px-2 py-1 animate-delay-${
                    100 + 100 * idx
                  } cursor-pointer rounded-md ${strapiId === selectedFieldId ? 'bg-secondary' : 'initial'}`}
                >
                  {name}
                </button>
              )
            })}
          </div>
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
