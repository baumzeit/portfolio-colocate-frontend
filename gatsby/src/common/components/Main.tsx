import React, { FC } from 'react'

type MainProps = {
  fullWidth?: boolean
}

export const Main: FC<MainProps> = ({ children, fullWidth }) => {
  return <main className={`pb-12 ${fullWidth ? '' : 'container mx-auto px-3'}`}>{children}</main>
}
