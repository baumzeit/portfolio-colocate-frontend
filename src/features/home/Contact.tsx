import React from 'react'

import { ContactFragment } from '../../../graphql-types'

type ContactProps = { contact: ContactFragment }
export const Contact = ({ contact: { text, button } }: ContactProps) => (
  <div className="flex items-center gap-x-10">
    <div className="text-secondary">{text}</div>
    <a href={button.link} target="_blank" rel="noreferrer">
      <button className="">{button.label || button.link}</button>
    </a>
  </div>
)
