import React, { createContext, ReactNode } from 'react'

import { useLocalStorage } from '../hooks/useLocalStorage'

export const UserContext = createContext({ name: '', setName: (x: any) => {} })

type UserContextProviderProps = {
  children: ReactNode
}
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [name, setName] = useLocalStorage('csPresentUserName', '')

  return <UserContext.Provider value={{ name, setName }}>{children}</UserContext.Provider>
}
