import React, { FC } from 'react'

type ContainerProps = {}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={'container mx-auto px-6 md:px-0'}>{children}</div>
}
