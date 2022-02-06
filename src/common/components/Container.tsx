import React, { FC } from 'react'

type ContainerProps = {}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={'md:container md:mx-auto px-6'}>{children}</div>
}
