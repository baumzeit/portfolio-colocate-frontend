import { Listbox } from '@headlessui/react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { FC, useContext } from 'react'

import { NavDataQuery } from '../../../graphql-types'
import logo from '../../images/logo.png'
import { ThemeContext } from './ThemeContextProvider'

export const Navbar: FC<{ className?: string }> = ({ children, className = '' }) => {
  const { site } = useStaticQuery<NavDataQuery>(query)
  const { theme } = useContext(ThemeContext)

  return (
    <nav className={`flex items-center justify-between px-8 h-full bg-primary ${className}`}>
      <div className="flex-1">
        <Link to="/" className="font-bold">
          <div className="flex align-center">
            {logo?.url && (
              <StaticImage src={logo} alt="logo" className={`h-5 mr-4 filter ${theme === 'dark' ? 'invert' : ''}`} />
              // <img
              //   src={process.env.GATSBY_API_URL! + logo.url}
              //   className={`h-5 mr-4 filter ${theme === 'dark' ? 'invert' : ''}`}
              //   alt="logo"
              // />
            )}
            <div className="hidden md:block text-secondary">{site?.siteMetadata?.title || ''}</div>
          </div>
        </Link>
      </div>
      {children}
      <div className="flex-1 self-start flex justify-end mt-3.5">
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
        title
      }
    }
  }
`
