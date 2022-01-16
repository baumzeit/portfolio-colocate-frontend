import React, { FC, ReactNode } from 'react'

type LayoutProps = {
  seo?: any
  fullWidth?: boolean
  navContent?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen max-h-screen">
      {/* <Seo seo={seo} /> */}
      {children}
    </div>
  )
}

export default Layout
