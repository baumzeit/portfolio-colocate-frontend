import { Transition } from '@headlessui/react'
import React, { FC } from 'react'
import ReactDOM from 'react-dom'

export const Modal: FC<{ show: boolean; className?: string; id: string }> = ({
  show,
  id,
  className = '',
  children
}) => {
  if (!show) return null
  return ReactDOM.createPortal(
    <Transition
      appear={true}
      show={show}
      enter="transition-opacity duration-600"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-600"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`z-10 absolute top-0 left-0 w-full h-full ${className}`}>{children}</div>
    </Transition>,
    document.getElementById('app-modal') || document.body,
    id
  )
}

export const ModalRoot = () => <div id="app-modal" />
