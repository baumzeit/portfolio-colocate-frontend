import { Listbox } from '@headlessui/react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { FC, useContext } from 'react'

import { NavDataQuery } from '../../../graphql-types'
import { ThemeContext } from './ThemeContextProvider'

export const NAVBAR_HEIGHT = 56

export const Navbar: FC = ({ children }) => {
  const { strapiGlobal } = useStaticQuery<NavDataQuery>(query)
  const { theme } = useContext(ThemeContext)

  if (!strapiGlobal) {
    return <p>no data</p>
  }
  const { siteName, logo } = strapiGlobal
  return (
    <nav className="sticky top-0 left-0 z-50 bg-primary">
      <div className={`flex items-center justify-between px-8 h-14`}>
        <div className="flex-1">
          <Link to="/" className="font-bold">
            <div className="flex align-center">
              {logo?.url && (
                <img
                  src={process.env.GATSBY_API_URL! + logo.url}
                  className={`h-5 mr-4 filter ${theme === 'dark' ? 'invert' : ''}`}
                  alt="logo"
                />
              )}
              <div className="hidden md:block text-secondary">{siteName}</div>
            </div>
          </Link>
        </div>
        {children}
        <div className="flex-1 self-start flex justify-end mt-3.5">
          <ThemeSelect />
        </div>
      </div>
    </nav>
  )
}

const ThemeSelect = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div>
      <Listbox value={theme} onChange={(theme) => setTheme(theme)}>
        <Listbox.Button className={`px-1.5 py-0.5 rounded text-brand`}>{theme}</Listbox.Button>
        <Listbox.Options>
          {['dark', 'light']
            .filter((val) => val !== theme)
            .map((val, idx) => {
              const isActive = theme === val
              return (
                <Listbox.Option key={val} value={val} className="text-bg-secondary">
                  <div
                    className={`inline-block px-1.5 py-0.5 rounded mt-1.5 animate-fadeInFast animate-delay-${
                      50 * idx
                    } cursor-pointer bg-primary ${isActive ? 'text-brand' : 'text-primary'}`}
                  >
                    {val}
                  </div>
                </Listbox.Option>
              )
            })}
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
