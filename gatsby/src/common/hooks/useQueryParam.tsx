import { navigate } from 'gatsby'
import qs from 'query-string'
import { useEffect } from 'react'

export const useQueryParam = (location: Location, param: Record<string, any>) => {
  useEffect(() => {
    const parsed = qs.parse(location.search)
    const stringify = (parsed: qs.ParsedQuery<string>) =>
      qs.stringify(parsed, { skipNull: true, skipEmptyString: true })

    const curr = stringify(parsed)
    const updated = stringify({ ...parsed, ...param })

    if (curr !== updated) {
      navigate('?' + updated)
    }
  }, [location, param])
}
