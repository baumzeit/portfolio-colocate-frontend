import { Atom, Provider } from 'jotai'
import React, { ReactNode } from 'react'

import { Navbar } from './Navbar'

type LayoutProps = {
  seo?: any
  fullWidth?: boolean
  navbar?: ReactNode
  providerData?: Iterable<readonly [Atom<unknown>, unknown]> | undefined
  children: ReactNode
}

const Layout = ({ children, navbar, providerData }: LayoutProps) => {
  return (
    <Provider initialValues={providerData}>
      <div className="grid h-screen bg-primary" style={{ gridTemplateRows: `auto 1fr` }}>
        {/* <Seo seo={seo} /> */}
        {navbar}
        <div className="relative overflow-auto">{children}</div>
      </div>
    </Provider>
  )
}

export default Layout
