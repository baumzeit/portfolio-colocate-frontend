import React, { FC, ReactNode } from 'react'

type ContainerProps = {
  className?: string
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ className = '', children }) => {
  return <div className={`md:container md:mx-auto px-6 ${className}`}>{children}</div>
}
