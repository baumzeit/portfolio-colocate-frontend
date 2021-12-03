import React, { FC } from 'react'

import { Nav } from './Nav'

type LayoutProps = {
  seo?: any
  fullWidth?: boolean
  location?: Location
}

const Layout: FC<LayoutProps> = ({ children, seo, fullWidth, location }) => {
  return (
    <div className="min-h-screen pb-12">
      {/* <Seo seo={seo} /> */}
      <Nav location={location} />

      <main className={`mt-10 ${fullWidth ? '' : 'container mx-auto px-3'}`}>{children}</main>
    </div>
  )
}

export default Layout
