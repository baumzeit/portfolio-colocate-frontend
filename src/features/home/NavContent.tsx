import { ArrowSmRightIcon } from '@heroicons/react/solid'
import { Link } from 'gatsby'
import React from 'react'

export const HomeNavContent = () => {
  return (
    <Link to="/projects">
      <div className="flex items-center gap-1">
        Projects
        <ArrowSmRightIcon className="w-5 h-5" />
      </div>
    </Link>
  )
}
