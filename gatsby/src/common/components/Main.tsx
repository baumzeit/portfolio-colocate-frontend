import React, { FC } from 'react'

type MainProps = {
  fullWidth?: boolean
  className?: string
}

export const Main: FC<MainProps> = ({ children, fullWidth, className = '' }) => {
  return <main className={`relative ${className}`}>{children}</main>
}
