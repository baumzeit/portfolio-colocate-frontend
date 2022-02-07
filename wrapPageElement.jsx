import React from 'react'

import { ModalRoot } from './src/common/components/Modal'

export const wrapPageElement = ({ element }) => (
  <>
    <ModalRoot />
    {element}
  </>
)
