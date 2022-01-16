import { Listbox } from '@headlessui/react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { FC, useContext } from 'react'

import { NavDataQuery } from '../../../graphql-types'
import { ThemeContext } from './ThemeContextProvider'

export const Navbar: FC = ({ children }) => {
  const { strapiGlobal } = useStaticQuery<NavDataQuery>(query)
  const { theme } = useContext(ThemeContext)

  if (!strapiGlobal) {
    return <p>no data</p>
  }
  const { siteName, logo } = strapiGlobal
  return (
    <nav className="sticky top-0 left-0 z-50 bg-primaryLayer">
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
        {children}
        <ThemeSelect />
      </div>
    </nav>
  )
}

const ThemeSelect = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div>
      <Listbox value={theme} onChange={(theme) => setTheme(theme)}>
        <Listbox.Button className={`px-2 py-1 text-brand`}>{theme}</Listbox.Button>
        <Listbox.Options>
          <Listbox.Option value="dark">
            <div>dark</div>
          </Listbox.Option>
          <Listbox.Option value="light">
            <div>light</div>
          </Listbox.Option>
        </Listbox.Options>
      </Listbox>
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
