import { graphql, PageProps } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import chunk from 'lodash.chunk'
import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet'

import { HomeDataQuery } from '../../graphql-types'
import Layout from '../common/components/Layout'
import { Main } from '../common/components/Main'
import { Navbar } from '../common/components/Navbar'
import { assertAndExtractNodes } from '../common/utility/assertAndExtractNodes'
import notEmpty from '../common/utility/notEmpty'
import { Field } from '../features/home/Field'
import { Intro } from '../features/home/Intro'
import { HomeNavContent } from '../features/home/NavContent'
import { Profile } from '../features/home/Profile'

// markup
const HomePage = ({ data: { strapiHome, allStrapiField } }: PageProps<HomeDataQuery>) => {
  const breakpoints = useBreakpoint()

  const displayFields = useMemo(() => {
    if (allStrapiField && strapiHome) {
      const strapiFields = strapiHome.strapiFields?.filter(notEmpty)
      if (strapiFields) {
        return assertAndExtractNodes(allStrapiField).filter((field) =>
          strapiFields.map((homeField) => 'Field_' + homeField.id).includes(field.id)
        )
      }
    }
  }, [allStrapiField, strapiHome])

  if (!(strapiHome && allStrapiField && displayFields)) {
    return <div>No Data</div>
  }
  const { title, intro, seo, profile } = strapiHome

  return (
    title &&
    intro &&
    profile && (
      <>
        <Helmet>
          <title>{seo?.metaTitle}</title>
        </Helmet>
        <Layout>
          <Navbar>
            <HomeNavContent />
          </Navbar>
          <Main className="mt-6">
            <div className="grid grid-cols-11">
              <div className="col-start-1 col-end-5">
                <Intro title={title} text={intro} />
              </div>
              <div className="col-start-6 col-end-12">
                <Profile profile={profile} />
              </div>
            </div>

            <div className="mt-[100px]">
              {chunk(displayFields, 3).map((fields, idx) => (
                <div key={`fields-grid-${idx}`} className="grid gap-x-[80px] xl:gap-x-[120px] gap-y-14 grid-cols-12">
                  {fields.map((field, idx) => {
                    const one = idx % 3 === 0
                    const two = idx % 3 === 1
                    const three = idx % 3 === 2
                    return (
                      <div
                        key={field.id}
                        className={`${
                          one
                            ? 'row-start-1 col-start-1'
                            : two
                            ? 'row-start-2 col-start-1 lg:row-start-1 xl:mt-[80px] lg:col-start-7'
                            : three
                            ? 'row-start-3 col-start-1 lg:row-start-2 lg:col-start-4 xl:col-start-3 '
                            : ''
                        } col-end-12 lg:col-span-6`}
                      >
                        <Field
                          field={field}
                          alignment={
                            breakpoints.lg ? (one ? 'right' : two ? 'left' : three ? 'center' : 'left') : 'left'
                          }
                        />
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </Main>
        </Layout>
      </>
    )
  )
}

export const query = graphql`
  query HomeData {
    strapiHome {
      title
      intro
      profile {
        ...HomeProfile
      }
      seo {
        metaTitle
      }
      strapiFields {
        id
        name
        description
      }
    }
    allStrapiField(sort: { fields: name, order: DESC }) {
      edges {
        node {
          projects {
            id
            title
            slug
          }
          ...FieldDetail
        }
      }
    }
  }
`

export default HomePage
