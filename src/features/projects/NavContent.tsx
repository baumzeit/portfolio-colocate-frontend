import React from 'react'

import { NavFilterAreas, NavFilterAreasSelect } from './NavFilterAreas'

type ProjectsNavContentProps = { areas: Queries.AreaBaseFragment[] }

export const ProjectsNavContent = ({ areas }: ProjectsNavContentProps) => {
  return (
    <>
      <div className="hidden lg:block">
        <NavFilterAreas areas={areas} />
      </div>
      <div className="block lg:hidden self-start mt-3.5 min-w-[180px]">
        <NavFilterAreasSelect areas={areas} />
      </div>
    </>
  )
}

// (
//       <button
//         onClick={(e) => {
//           close()
//         }}
//         className={`animate-fadeIn p-3 hover:text-brand tracking-wide`}
//       >
//         Close
//       </button>
//     )
