import { atom, useAtomValue } from 'jotai'
import { useMemo } from 'react'

import { projectsAtom } from '../../pages/projects/[...]'

export const useProjectBySlug = (slug: string | null | undefined) => {
  const project = useAtomValue(
    useMemo(
      () =>
        atom<Queries.ProjectDetailFragment | null>((get) => {
          const projects = get(projectsAtom)
          return projects.find((d) => d.slug === slug) || null
        }),
      [slug]
    )
  )

  return project
}
