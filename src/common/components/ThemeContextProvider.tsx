import React, { useState, useEffect, createContext, Dispatch, SetStateAction, FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet'

export const ThemeContext = createContext<{
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}>({
  theme: '',
  setTheme: () => {}
})

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark'
    setTheme(theme)
  }, [])

  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme)
      const root = document.getElementsByTagName('html')[0]
      root.className = theme
    }
  }, [theme])

  return (
    <>
      <Helmet>
        <script>
          {`if ( localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ) {
              document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
          `}
        </script>
      </Helmet>
      <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    </>
  )
}
