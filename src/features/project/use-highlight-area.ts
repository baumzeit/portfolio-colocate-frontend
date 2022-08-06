import { atom, useAtom } from 'jotai'
import { useCallback, useEffect, useMemo } from 'react'
import { NumberParam, StringParam, useQueryParam, useQueryParams } from 'use-query-params'

import { areasAtom } from '../../common/contexts/atoms'

const highlightAreaSlugAtom = atom<string | null>(null)

const highlightAreaAtom = atom<Queries.AreaBaseFragment | null, string | null>(
  (get) => {
    const areas = get(areasAtom)
    const highlightArea = get(highlightAreaSlugAtom)
    return areas.find((d) => d.slug === highlightArea) ?? null
  },
  (_, set, slug) => set(highlightAreaSlugAtom, slug)
)

export const useHighlightArea = () => {
  const [areaSlug, setHighlightArea] = useQueryParam('area', StringParam)

  const [highlightArea, setHighlightAreaAtom] = useAtom(highlightAreaAtom)

  useEffect(() => {
    setHighlightAreaAtom(areaSlug ?? null)
  }, [areaSlug, setHighlightAreaAtom])

  return { highlightArea, setHighlightArea }
}
