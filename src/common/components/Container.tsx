import React, { FC } from 'react'

type ContainerProps = {
  className?: string
}

export const Container: FC<ContainerProps> = ({ className = '', children }) => {
  return <div className={`md:container md:mx-auto px-6 ${className}`}>{children}</div>
}
