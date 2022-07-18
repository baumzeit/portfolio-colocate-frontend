import { useMemo } from 'react'
import { useQueryParam } from 'use-query-params'

export const useProjectModalData = (projects: Queries.ProjectDetailFragment[]) => {
  const [exposedSlug, setProject] = useQueryParam<string | undefined>('project')

  return useMemo(() => {
    if (projects) {
      const exposedIndex = projects.findIndex((project) => project.slug === exposedSlug)
      const nextIndex = (exposedIndex + 1) % projects.length
      const prevIndex = exposedIndex > 0 ? exposedIndex - 1 : projects.length - 1
      const exposedProject = projects[exposedIndex]

      return {
        project: exposedIndex > -1 ? exposedProject : null,
        onClose: () => (exposedSlug ? setProject(undefined) : () => {}),
        onNext: () => (exposedSlug ? setProject(String(projects[nextIndex].slug)) : () => {}),
        onPrev: () => (exposedSlug ? setProject(String(projects[prevIndex].slug)) : () => {})
      }
    }
  }, [exposedSlug, projects, setProject])
}
