import { Transition } from '@headlessui/react'
import React, { FC } from 'react'
import ReactDOM from 'react-dom'

export const Modal: FC<{ show: boolean; className?: string; enterClass?: string; id: string }> = ({
  show,
  id,
  enterClass = '',
  className = '',
  children
}) => {
  if (!show) return null
  return ReactDOM.createPortal(
    <div className="relative z-50">
      <Transition
        appear={true}
        show={show}
        enter={`transition-opacity duration-1000 ${enterClass}`}
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-600"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className={`absolute top-0 left-0 w-full h-full ${className}`}>{children}</div>
      </Transition>
    </div>,
    document.getElementById('app-modal') || document.body,
    id
  )
}

export const ModalRoot = () => <div id="app-modal" />
