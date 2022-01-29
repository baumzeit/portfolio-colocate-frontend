import React, { FC, ReactNode } from 'react'

export const NAVBAR_HEIGHT = 56

type LayoutProps = {
  seo?: any
  fullWidth?: boolean
  navContent?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid h-screen bg-primary" style={{ gridTemplateRows: `${NAVBAR_HEIGHT}px 1fr` }}>
      {/* <Seo seo={seo} /> */}
      {children}
    </div>
  )
}

export default Layout