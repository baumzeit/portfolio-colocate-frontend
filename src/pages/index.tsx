import { graphql, PageProps } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet'

import { HomeDataQuery } from '../../graphql-types'
import { Container } from '../common/components/Container'
import Layout from '../common/components/Layout'
import { Main } from '../common/components/Main'
import { Navbar } from '../common/components/Navbar'
import { assertAndExtractNodes } from '../common/utility/assertAndExtractNodes'
import notEmpty from '../common/utility/notEmpty'
import { FieldsMap } from '../features/home/FieldsMap'
import { Intro } from '../features/home/Intro'
import { HomeNavContent } from '../features/home/NavContent'
import { Profile } from '../features/home/Profile'

// markup
const HomePage = ({ data: { strapiHome, allStrapiArea } }: PageProps<HomeDataQuery>) => {
  const displayFields = useMemo(() => {
    if (allStrapiArea && strapiHome) {
      console.log(allStrapiArea, strapiHome)
      const homeAreas = strapiHome.areas?.filter(notEmpty)
      if (homeAreas) {
        return assertAndExtractNodes(allStrapiArea).filter((area) =>
          homeAreas.find((homeArea) => homeArea.id === area.id)
        )
      }
    }
  }, [allStrapiArea, strapiHome])

  if (!(strapiHome && allStrapiArea && displayFields)) {
    return <div>No Data</div>
  }
  const { title, introText, seo, profile } = strapiHome

  return (
    title &&
    introText &&
    profile && (
      <>
        <Helmet>
          <title>{seo?.metaTitle}</title>
        </Helmet>
        <Layout>
          <Navbar>
            <HomeNavContent />
          </Navbar>
          <Main fullWidth className="pt-6 overflow-y-auto">
            <Container>
              <div className="flex flex-col gap-24 sm:flex-row">
                <div className="flex-1">
                  <Intro title={title} text={introText} />
                </div>
                <div className="w-auto shrink-0">
                  <Profile profile={profile} />
                </div>
              </div>
              <div className="mt-24">
                <FieldsMap fields={displayFields} />
              </div>
            </Container>
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
      introText
      profile {
        ...Profile
      }
      seo {
        metaTitle
      }
      areas {
        id
        name
        description
      }
    }
    allStrapiArea(sort: { fields: name, order: DESC }) {
      edges {
        node {
          projects {
            id
            title
            slug
          }
          ...AreaDetail
        }
      }
    }
  }
`

export default HomePage
