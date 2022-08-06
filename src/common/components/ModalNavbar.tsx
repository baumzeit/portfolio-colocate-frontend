import React from 'react'

import { Navbar } from './Navbar'

type ModalNavbarProps = {
  onClose: () => void
}
export const ModalNavbar = ({ onClose }: ModalNavbarProps) => {
  return (
    <Navbar>
      <button onClick={onClose} className={`animate-fadeIn p-3 hover:text-brand tracking-wide`}>
        Close
      </button>
    </Navbar>
  )
}
