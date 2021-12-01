import { Link, graphql, useStaticQuery } from 'gatsby'

import { PATH } from '../constants/paths'
import { ThemeContext } from './ThemeContextProvider'
import React, { useContext } from 'react'

const Nav = () => {
  const { strapiGlobal } = useStaticQuery(query)
  const { siteName, logo } = strapiGlobal
  const { setTheme, theme } = useContext(ThemeContext)

  return (
    <div className="px-8 flex h-14 items-center justify-between relative z-50">
      <Link to="/" className="font-bold">
        <div className="flex align-center">
          <img
            src={process.env.GATSBY_API_URL + logo.url}
            className={`h-5 mr-4 filter ${theme === 'dark' ? 'invert' : ''}`}
            alt="logo"
          />
          {siteName}
        </div>
      </Link>
      <div>
        <Link to="/projects">Projects</Link>
        <div></div>
        {window.location.pathname === PATH.PROJECTS}
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
  query {
    strapiGlobal {
      siteName
      logo {
        url
      }
    }
  }
`

export default Nav
