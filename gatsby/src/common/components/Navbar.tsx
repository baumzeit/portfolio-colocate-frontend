import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { FC, useContext } from 'react'

import { NavDataQuery } from '../../../graphql-types'
import { ThemeContext } from './ThemeContextProvider'

export const Navbar: FC = ({ children }) => {
  const { strapiGlobal } = useStaticQuery<NavDataQuery>(query)

  const { theme, setTheme } = useContext(ThemeContext)

  if (!strapiGlobal) {
    return <p>no data</p>
  }
  const { siteName, logo } = strapiGlobal
  return (
    <div className="relative z-50 bg-primaryLayer">
      <div className="flex items-center justify-between px-8 h-14">
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
        <div className="hidden lg:block">{children}</div>
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
      <div className="flex justify-between px-8 lg:hidden w-full">{children}</div>
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
  }
`
