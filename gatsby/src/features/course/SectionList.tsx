import { BaseCourseSectionFragment } from '../../../graphql-types'
import { CourseSection } from './Section'
import { graphql } from 'gatsby'
import React, { FC } from 'react'

export const SectionList: FC<{ sections: BaseCourseSectionFragment[] }> = ({ sections }) => {
  return (
    <ul>
      {sections.map((section, idx) => (
        <div key={'section_' + section.id} className="mb-24 last:mb-0">
          <CourseSection index={idx} section={section} />
        </div>
      ))}
    </ul>
  )
}

// export const query = graphql`
//   fragment BaseCourseSection on StrapiCourseSections {
//     id
//     title
//     content
//     codeEditor {
//       ...BaseCodeEditor
//     }
//   }
// `
