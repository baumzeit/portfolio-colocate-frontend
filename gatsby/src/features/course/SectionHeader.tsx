import { Markdown } from '../../common/components/Markdown'
import React, { FC } from 'react'

export const CourseSectionHeader: FC<{
  numbering: number
  title: string
}> = ({ numbering, title }) => {
  return (
    <section className="bg-secondary rounded-lg overflow-hidden">
      <div className="px-8 py-6">
        {/* <h2 className="mb-3 text-xl">{title}</h2> */}
        <Markdown>{content}</Markdown>
      </div>
      <iframe title={numbering + '_' + title} src={embedUrl} className="w-full h-[400px] max-h-full" />
    </section>
  )
}
