import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { ReactNode, Suspense } from 'react'
import { twMerge } from 'tailwind-merge'

import { ThemeSelect } from './ThemeSelect'

export const NAVBAR_HEIGHT = 56

type NavbarProps = { className?: string; children: ReactNode }

export const Navbar = ({ children, className = '' }: NavbarProps) => {
  const { site } = useStaticQuery<Queries.NavDataQuery>(query)
  return (
    <nav
      style={{ height: NAVBAR_HEIGHT }}
      className={twMerge(
        'flex items-center justify-between shadow-sm px-4 sm:px-6 bg-primary z-30 relative',
        className
      )}
    >
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
      <div className="flex-1 flex justify-end">
        <Suspense>
          <ThemeSelect />
        </Suspense>
      </div>
    </nav>
  )
}

const query = graphql`
  query NavData {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
  }
`
