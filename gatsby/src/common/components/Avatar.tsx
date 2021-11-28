import { generateColorStopClasses } from '../utility/generateColorStopClasses'
import React, { FC, useMemo } from 'react'

export const Avatar: FC<{ name: string; highlight?: boolean }> = ({ name, highlight }) => {
  const colorStopClasses = useMemo(() => generateColorStopClasses(name), [name])

  return (
    <div
      className={`flex items-center justify-center w-[30px] h-[30px] rounded-full bg-gradient-to-br border-highlight animate-pulse-once ${
        highlight ? 'border-highlight border rounded-md w-auto px-2' : colorStopClasses
      }`}
    >
      <div className={`inline-block uppercase font-display text-sm ${highlight ? 'text-highlight' : 'text-white'}`}>
        {highlight ? name : name.slice(0, 2)}
      </div>
    </div>
  )
}
