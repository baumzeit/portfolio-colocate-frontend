import React from 'react'

type ModalNavbarProps = {
  onClose: () => void
}
export const ProjectDetailNavContent = ({ onClose }: ModalNavbarProps) => {
  return (
    <button onClick={onClose} className={`p-3 hover:text-brand tracking-wide`}>
      Close
    </button>
  )
}
