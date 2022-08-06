import { atom, useAtom } from 'jotai'
import { useCallback, useEffect, useMemo } from 'react'
import { NumberParam, StringParam, useQueryParams } from 'use-query-params'

import { projectsAtom } from '../../common/contexts/atoms'

export type ProjectSliderContext = {
  data: Queries.ProjectDetailFragment | null
  prev: Queries.ProjectDetailFragment | null
  next: Queries.ProjectDetailFragment | null
}

const activeProjectAtom = atom<string | null>(null)

const projectSliderAtom = atom<ProjectSliderContext, string | null>(
  (get) => {
    const projects = get(projectsAtom)
    const activeSlug = get(activeProjectAtom)
    if (!activeSlug) {
      return {
        data: null,
        prev: null,
        next: null
      }
    }
    const exposedIndex = projects.findIndex((project) => project.slug === activeSlug)
    const nextIndex = (exposedIndex + 1) % projects.length
    const prevIndex = exposedIndex > 0 ? exposedIndex - 1 : projects.length - 1

    return {
      data: projects[exposedIndex] ?? null,
      prev: projects[prevIndex] ?? null,
      next: projects[nextIndex] ?? null
    }
  },
  (_, set, slug) => set(activeProjectAtom, slug)
)

export type UseActiveProjectReturn = {
  project: Queries.ProjectDetailFragment | null
  setProject: (slug: string | null) => void
  close: () => void
  next: () => void
  prev: () => void
}

export const useActiveProject = (): UseActiveProjectReturn => {
  const [params, setParams] = useQueryParams({ project: StringParam, image: NumberParam })

  const [projectSlider, setProjectSlider] = useAtom(projectSliderAtom)

  const projectSlug = params.project

  useEffect(() => {
    setProjectSlider(projectSlug ?? null)
  }, [projectSlug, setProjectSlider])

  const setProject = useCallback(
    (slug: string | null) => {
      setParams({ project: slug, image: null })
    },
    [setParams]
  )

  const data = useMemo(() => {
    const { data, prev, next } = projectSlider

    return {
      project: data,
      close: () => (data ? setProject(null) : () => {}),
      next: () => (next ? setProject(next.slug) : () => {}),
      prev: () => (prev ? setProject(prev.slug) : () => {})
    }
  }, [projectSlider, setProject])

  return { ...data, setProject }
}
