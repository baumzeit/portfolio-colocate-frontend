import React, { FC, ReactNode } from 'react'

type LayoutProps = {
  seo?: any
  fullWidth?: boolean
  navContent?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid h-screen bg-primary" style={{ gridTemplateRows: '56px 1fr' }}>
      {/* <Seo seo={seo} /> */}
      {children}
    </div>
  )
}

export default Layout
