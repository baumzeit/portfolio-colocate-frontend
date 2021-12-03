import './src/scss/index.scss'
import React from 'react'

import { ProjectContextProvider } from './src/common/components/ProjectContextProvider'
import { ThemeContextProvider } from './src/common/components/ThemeContextProvider'

import '@fontsource/karla/200.css'
import '@fontsource/karla/400.css'
import '@fontsource/karla/600.css'
import '@fontsource/rubik/300.css'
import '@fontsource/rubik/400.css'
import '@fontsource/rubik/600.css'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeContextProvider>
      <ProjectContextProvider>{element}</ProjectContextProvider>
    </ThemeContextProvider>
  )
}
