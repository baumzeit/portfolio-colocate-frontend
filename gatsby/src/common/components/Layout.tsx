import React, { FC, ReactNode } from 'react'

type LayoutProps = {
  seo?: any
  fullWidth?: boolean
  navContent?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-primary">
      {/* <Seo seo={seo} /> */}
      {children}
    </div>
  )
}

export default Layout
