import { useEffect } from 'react'

export const useHash = (hash?: string) => {
  useEffect(() => {
    console.log(hash)
    if (hash) {
      window.history.pushState({}, '', '#' + hash)
    } else {
      window.location.hash = ''
      window.history.replaceState('', '', window.location.pathname)
    }
  }, [hash])
}
