import React, { useState, useEffect, createContext, Dispatch, SetStateAction, FC, ReactNode, useContext } from 'react'
import { Helmet } from 'react-helmet'

type Theme = 'dark' | 'light'
export const DEFAULT_THEME = 'dark'

export const ThemeContext = createContext<{
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}>({
  theme: DEFAULT_THEME,
  setTheme: () => {}
})

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME)

  useEffect(() => {
    const theme = localStorage.getItem('theme') || DEFAULT_THEME
    setTheme(theme as Theme)
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

export const useTheme = () => useContext(ThemeContext)
