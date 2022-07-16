import React, { ReactNode } from 'react'

type ContainerProps = {
  className?: string
  children: ReactNode
}

export const Container = ({ className = '', children }: ContainerProps) => {
  return <div className={`md:container md:mx-auto px-6 ${className}`}>{children}</div>
}
