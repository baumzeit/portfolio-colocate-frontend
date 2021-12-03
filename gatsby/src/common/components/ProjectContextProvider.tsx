import React, { useState, createContext, Dispatch, SetStateAction, FC } from 'react'

export const ProjectContext = createContext<{
  highlightedProjectIds: (string | number)[]
  setHighlightedProjectIds: Dispatch<SetStateAction<(string | number)[]>>
}>({
  highlightedProjectIds: [],
  setHighlightedProjectIds: () => {}
})

export const ProjectContextProvider: FC = ({ children }) => {
  const [highlightedProjectIds, setHighlightedProjectIds] = useState<(string | number)[]>([])

  return (
    <ProjectContext.Provider value={{ highlightedProjectIds, setHighlightedProjectIds }}>
      {children}
    </ProjectContext.Provider>
  )
}
