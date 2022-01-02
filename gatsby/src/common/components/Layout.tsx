import React, { FC, ReactNode } from 'react'

import { Navbar } from './Navbar'

type LayoutProps = {
  seo?: any
  fullWidth?: boolean
  navContent?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children, fullWidth, navContent = null }) => {
  return (
    <div className="min-h-screen pb-12">
      {/* <Seo seo={seo} /> */}
      <Navbar>{navContent}</Navbar>

      <main className={`mt-10 ${fullWidth ? '' : 'container mx-auto px-3'}`}>{children}</main>
    </div>
  )
}

export default Layout
