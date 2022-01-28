import { useLayoutEffect } from 'react'

export const useBodyScrollLock = ({ addPadding, enable = true }: { addPadding?: boolean; enable?: boolean }) => {
  useLayoutEffect(() => {
    if (enable) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      if (addPadding) {
        document.body.style.paddingRight = '15px'
      }
      return () => {
        document.body.style.overflow = originalStyle
        document.body.style.paddingRight = ''
      }
    }
  }, [addPadding, enable])
}
