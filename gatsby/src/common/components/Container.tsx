import React, { FC } from 'react'

type ContainerProps = {}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={'container mx-auto px-3'}>{children}</div>
}
