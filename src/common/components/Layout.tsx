import React, { ReactNode } from 'react'

type LayoutProps = {
  seo?: any
  fullWidth?: boolean
  navContent?: ReactNode
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid h-screen bg-primary" style={{ gridTemplateRows: `auto 1fr` }}>
      {/* <Seo seo={seo} /> */}
      {children}
    </div>
  )
}

export default Layout
