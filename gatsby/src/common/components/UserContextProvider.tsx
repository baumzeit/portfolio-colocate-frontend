import React, { FC, createContext } from 'react'

import { useLocalStorage } from '../hooks/useLocalStorage'

export const UserContext = createContext({ name: '', setName: (x: any) => {} })

export const UserContextProvider: FC = ({ children }) => {
  const [name, setName] = useLocalStorage('csPresentUserName', '')

  return <UserContext.Provider value={{ name, setName }}>{children}</UserContext.Provider>
}
