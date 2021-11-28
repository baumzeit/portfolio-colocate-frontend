import { BaseCourseSectionFragment } from '../../../graphql-types'
import { Markdown } from '../../common/components/Markdown'
import CodeEditor from '../../common/components/CodeEditor'
import React, { FC } from 'react'

export const CourseSectionBody: FC<{
  section: BaseCourseSectionFragment
}> = ({ section: { content, codeEditor } }) => {
  return (
    <div>
      <div className="mb-8">
        <Markdown>{content}</Markdown>
      </div>
      <CodeEditor codeEditor={codeEditor} />
    </div>
  )
}
