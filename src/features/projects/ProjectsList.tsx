import { sort } from 'd3-array'
import { Link } from 'gatsby'
import React, { useCallback, useMemo } from 'react'

import { ProjectsAndAreas } from '../../pages/projects'
import { ProjectBanner } from '../project/ProjectBanner'
import { useHighlightArea } from '../project/use-highlight-area'

export type DisplayProject = Queries.ProjectDetailFragment & { highlightColor?: string | null }

const ProjectsList = ({ projects }: ProjectsAndAreas) => {
  const [highlightArea] = useHighlightArea()

  const highlightAreaSlug = highlightArea?.slug

  const areaMatch = useCallback(
    (project: Queries.ProjectDetailFragment) =>
      Boolean(!highlightAreaSlug || project.areas?.map((area) => area?.slug).includes(highlightAreaSlug)),
    [highlightAreaSlug]
  )

  const displayProjects: DisplayProject[] = useMemo(() => {
    const enrichedProjects = projects.map((project) => ({
      ...project,
      highlightColor: areaMatch(project) ? highlightArea?.color : null
    }))
    return enrichedProjects
      ? sort(enrichedProjects, ({ highlightColor: a }, { highlightColor: b }) =>
          Boolean(a) === Boolean(b) ? 0 : a ? -1 : 1
        )
      : enrichedProjects
  }, [areaMatch, highlightArea?.color, projects])

  return (
    <>
      <ul className="grid grid-cols-1 gap-3 mx-3 sm:grid-cols-2">
        {displayProjects.map((project, idx) => {
          return (
            <li key={project.id} className="overflow-hidden rounded-sm">
              <Link to={project.slug || ''}>
                <ProjectBanner project={project} index={idx} />
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProjectsList
