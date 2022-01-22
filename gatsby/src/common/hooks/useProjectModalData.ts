import { useMemo } from 'react'
import { useQueryParam } from 'use-query-params'

import { ProjectDetailFragment } from '../../../graphql-types'

export const useProjectModalData = (projects: ProjectDetailFragment[]) => {
  const [exposedSlug, setProject] = useQueryParam<string | undefined>('project')
  return useMemo(() => {
    if (projects) {
      const exposedIndex = projects.findIndex((project) => project.slug === exposedSlug)
      const nextIndex = (exposedIndex % (projects.length - 1)) + 1
      const prevIndex = exposedIndex > 0 ? exposedIndex - 1 : projects.length - 1
      return {
        data: exposedIndex > -1 ? projects[exposedIndex] : null,
        onClose: () => (exposedSlug ? setProject(undefined) : () => {}),
        onNext: () => (exposedSlug ? setProject(String(projects[nextIndex].slug)) : () => {}),
        onPrev: () => (exposedSlug ? setProject(String(projects[prevIndex].slug)) : () => {})
      }
    }
  }, [exposedSlug, projects, setProject])
}
