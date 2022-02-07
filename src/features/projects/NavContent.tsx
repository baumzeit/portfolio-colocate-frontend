import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import React, { useContext } from 'react'
import { useQueryParam } from 'use-query-params'

import { ProjectsAreasContext } from '../../pages/projects'
import { NavFilterAreas, NavFilterAreasSelect } from './NavFilterAreas'

export const ProjectsNavContent = () => {
  const { areas } = useContext(ProjectsAreasContext)

  const [exposedSlug, setExposedSlug] = useQueryParam<string | undefined>('project')
  const breakpoints = useBreakpoint()

  return (
    <>
      {exposedSlug ? (
        <button
          onClick={(e) => {
            setExposedSlug(undefined)
          }}
          className={`animate-fadeIn p-3 hover:text-brand tracking-wide`}
        >
          Close
        </button>
      ) : breakpoints.lg ? (
        <div>
          <NavFilterAreas areas={areas} />
        </div>
      ) : (
        <div className="self-start block mt-3.5 min-w-[180px] lg:hidden">
          <NavFilterAreasSelect areas={areas} />
        </div>
      )}
    </>
  )
}
