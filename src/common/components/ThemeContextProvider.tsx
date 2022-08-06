import React, { useState, useEffect, createContext, Dispatch, SetStateAction, ReactNode, useContext } from 'react'

type Theme = 'dark' | 'light'
export const DEFAULT_THEME = 'dark'

export const ThemeContext = createContext<{
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}>({
  theme: DEFAULT_THEME,
  setTheme: () => {}
})

type ThemeContextProviderProps = { children: ReactNode }

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
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
      <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    </>
  )
}

export const useTheme = () => useContext(ThemeContext)
