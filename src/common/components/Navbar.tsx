import { Listbox } from '@headlessui/react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { ReactNode, useContext } from 'react'

import { ThemeContext } from './ThemeContextProvider'

type NavbarProps = { className?: string; children: ReactNode }

export const Navbar = ({ children, className = '' }: NavbarProps) => {
  const { site } = useStaticQuery<Queries.NavDataQuery>(query)
  const { theme } = useContext(ThemeContext)
  return (
    <nav className={`flex items-center justify-between shadow-sm px-4 sm:px-6 h-full bg-primary ${className} z-20`}>
      <div className="flex-1">
        <div className="flex items-center">
          <Link to="/" className="font-bold">
            <div className="flex items-center">
              <StaticImage
                src="../../images/logo.png"
                alt="Canopies Logo"
                imgClassName={`rounded-full`}
                loading="eager"
                height={25}
                className="flex-shrink-0"
              />
              <div className="hidden ml-4 md:block text-secondary">{site?.siteMetadata?.title || ''}</div>
            </div>
          </Link>
        </div>
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
                    } cursor-pointer bg-primary ${isActive ? 'text-brand' : 'text-primary'} cursor-pointer`}
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
