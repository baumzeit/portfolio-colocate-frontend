import { Transition } from '@headlessui/react'
import React, { CSSProperties, forwardRef, PropsWithChildren } from 'react'

type ModalProps = {
  show: boolean
  className?: string
  containerClassName?: string
  enterClass?: string
  style?: CSSProperties
}
export const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalProps>>(
  ({ show, enterClass = '', containerClassName = '', className = '', style, children }, ref) => {
    if (!show) return null
    return (
      <div className={`z-20 ${containerClassName}`} style={style} ref={ref}>
        <Transition
          className="h-full"
          appear={true}
          show={show}
          enter={`transition-opacity duration-600 ${enterClass}`}
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-600"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={`${className}`}>{children}</div>
        </Transition>
      </div>
    )
  }
)

export const ModalRoot = () => <div id="app-modal" />
