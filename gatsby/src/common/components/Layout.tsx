import Nav from './Nav'
import React, { FC } from 'react'

type LayoutProps = {
  seo?: any
  fullWidth?: boolean
}

const Layout: FC<LayoutProps> = ({ children, seo, fullWidth }) => {
  return (
    <div className="min-h-screen pb-12">
      {/* <Seo seo={seo} /> */}
      <Nav />

      <main className={`mt-10 ${fullWidth ? '' : 'container mx-auto px-3'}`}>{children}</main>
    </div>
  )
}

export default Layout
