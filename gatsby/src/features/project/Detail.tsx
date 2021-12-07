import { OnUserActionSubscription, useReportUserSlideChangeMutation } from '@cs-present/graphql-client'
import { graphql } from 'gatsby'
import { FC, useContext, useEffect } from 'react'
import React from 'react'

import { BaseCourseSectionFragment } from '../../../graphql-types'
import { UserContext } from '../../common/components/UserContextProvider'
import { useIntersectionObserver } from '../../common/hooks/useIntersectionObserver'
import { CourseSectionBody } from './SectionBody'
import { ViewersStrip } from './ViewersStrip'

export const ProjectDetail: FC<{
  project: ProjectDetailFragment
}> = ({ project }) => {
  return (
    <div>{JSON.stringify(project)}</div>
    // <section
    //   ref={ref}
    //   key={'section_' + section.id}
    //   className="grid w-full grid-cols-2 grid-rows-3 gap-x-12 mb-7 last:mb-0"
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
    //   <h2 className="self-start mt-4 text-2xl leading-5 font-display">{section.title}</h2>
    //   <div className="flex justify-end row-start-3 mt-6">
    //     <ViewersStrip index={index} />
    //   </div>
    //   <div className="z-10 flex-1 col-start-2 row-span-2 row-start-2 mt-6">
    //     <CourseSectionBody section={section} key={'section__' + section.title} />
    //   </div>
    // </section>
  )
}

export const query = graphql`
  fragment ProjectDetails on StrapiProject {
    strapiId
    slug
    title
    description
    # images
    # seo
    # strapiTags {
    #   name
    # }
    images {
      localFile {
        childImageSharp {
          fixed(width: 600) {
            srcSet
          }
        }
      }
    }
    strapiFields {
      name
    }
  }
`
