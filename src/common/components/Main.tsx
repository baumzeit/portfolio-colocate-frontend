import React, { FC, forwardRef, PropsWithChildren } from 'react'

type MainProps = {
  className?: string
}

export const Main = forwardRef<HTMLDivElement, PropsWithChildren<MainProps>>(({ children, className = '' }, ref) => {
  return (
    <main className={`relative ${className}`} ref={ref}>
      {children}
    </main>
  )
})
