import { BaseCourseSectionFragment } from '../../../graphql-types'
import { CourseSectionBody } from './SectionBody'
import { FC, useContext, useEffect } from 'react'
import { OnUserActionSubscription, useReportUserSlideChangeMutation } from '@cs-present/graphql-client'

import { UserContext } from '../../common/components/UserContextProvider'
import { ViewersStrip } from './ViewersStrip'
import { graphql } from 'gatsby'
import { useIntersectionObserver } from '../../common/hooks/useIntersectionObserver'
import React from 'react'

export const ProjectDetail: FC<{
  project: ProjectDetailFragment
}> = ({ project }) => {
  return (
    <div>{JSON.stringify(project)}</div>
    // <section
    //   ref={ref}
    //   key={'section_' + section.id}
    //   className="grid grid-cols-2 grid-rows-3 gap-x-12 w-full mb-7 last:mb-0"
    //   style={{
    //     gridTemplateColumns: '40px 1fr',
    //     gridTemplateRows: 'auto 50px auto'
    //   }}
    // >
    //   <div
    //     style={{
    //       direction: 'rtl'
    //     }}
    //     className="row-span-2 mt-10 text-transparent font-bold font-display text-[80px] z-0 overflow-visible leading-5 text-stroke-brand text-stroke-2 filter drop-shadow-lg"
    //   >
    //     {index + 1}
    //   </div>
    //   <h2 className="text-2xl self-start mt-4 leading-5 font-display">{section.title}</h2>
    //   <div className="row-start-3 flex justify-end mt-6">
    //     <ViewersStrip index={index} />
    //   </div>
    //   <div className="row-start-2 col-start-2 row-span-2 z-10 flex-1 mt-6">
    //     <CourseSectionBody section={section} key={'section__' + section.title} />
    //   </div>
    // </section>
  )
}

export const query = graphql`
  fragment ProjectDetails on StrapiProject {
    slug
    title
    description
    # images
    # seo
    # strapiTags {
    #   name
    # }
    images {
      url
    }
    strapiFields {
      name
    }
  }
`
