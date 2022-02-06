import React, { FC } from 'react'
import { UseRemarkOptions, useRemarkSync } from 'react-remark'

import { Tags } from './Tags'

const p: FC = (props) => <p {...props} className="pb-6" />
const h2: FC = (props) => <h2 {...props} className="pb-1.5 text-2xl" />
const h3: FC = (props) => <h3 {...props} className="pb-1.5 text-xl" />
const ul: FC = (props) => <ul {...props} className="pb-6 ml-6 list-disc" />
const ol: FC = (props) => <ol {...props} className="ml-6 list-decimal" />
const li: FC = (props) => <li {...props} />
const a: FC = (props) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-sky-600" />
const img: FC = (props) => <img {...props} className="rounded shadow" />

const remarkOptions: UseRemarkOptions = {
  rehypeReactOptions: {
    components: {
      p,
      h2,
      h3,
      ol,
      ul,
      li,
      a,
      img
    }
  }
}

type RenderMdProps = {
  content?: string | null
  className?: string
  rearkOptions?: UseRemarkOptions
}

export const RenderMd = ({ content, className }: RenderMdProps) => {
  const reactContent = useRemarkSync(content || '', remarkOptions)

  // useEffect(() => {
  //   if (content) {
  //     setMarkdownSource(content)
  //   }
  // })
  return <div className={`gap-y-0 ${className}`}>{reactContent}</div>
}
