import React from 'react'
import { useQueryParam } from 'use-query-params'

import { Navbar } from './Navbar'

type ModalNavbarProps = {
  closeQueryParam: string
}
export const ModalNavbar = ({ closeQueryParam }: ModalNavbarProps) => {
  const [_, setParam] = useQueryParam<string | undefined>(closeQueryParam)

  console.log('Modal Navbar')

  return (
    <Navbar>
      <button
        onClick={(e) => {
          setParam(undefined)
        }}
        className={`animate-fadeIn p-3 hover:text-brand tracking-wide`}
      >
        Close
      </button>
    </Navbar>
  )
}
