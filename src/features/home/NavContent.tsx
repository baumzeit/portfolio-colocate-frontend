import { ChevronRightIcon } from '@heroicons/react/outline'
import { Link } from 'gatsby'
import React from 'react'

export const HomeNavContent = () => {
  return (
    <Link to="/projects">
      <div className="flex items-center gap-1 tracking-wide group">
        Projects
        <ChevronRightIcon className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}
