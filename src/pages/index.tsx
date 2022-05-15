import { SparklesIcon } from '@heroicons/react/outline'
import { MailIcon } from '@heroicons/react/solid'
import { graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet'

import { HomeDataQuery } from '../../graphql-types'
import { Container } from '../common/components/Container'
import Layout from '../common/components/Layout'
import { Main } from '../common/components/Main'
import { Navbar } from '../common/components/Navbar'
import { assertAndExtractNodes } from '../common/utility/assertAndExtractNodes'
import notEmpty from '../common/utility/notEmpty'
import { AreasMap } from '../features/home/AreasMap'
import { Contact } from '../features/home/Contact'
import { Intro } from '../features/home/Intro'
import { HomeNavContent } from '../features/home/NavContent'
import { Profile } from '../features/home/Profile'

// markup
const HomePage = ({ data: { strapiHome, allStrapiArea } }: PageProps<HomeDataQuery>) => {
  const displayAreas = useMemo(() => {
    if (allStrapiArea && strapiHome) {
      const homeAreas = strapiHome.areas?.filter(notEmpty)
      if (homeAreas) {
        return assertAndExtractNodes(allStrapiArea).filter((area) =>
          homeAreas.find((homeArea) => homeArea.id === area.id)
        )
      }
    }
  }, [allStrapiArea, strapiHome])

  if (!(strapiHome && allStrapiArea && displayAreas)) {
    return <div>No Data</div>
  }
  const { title, introText, seo, profile, contact } = strapiHome

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
          <Main className="pt-6 pb-20 overflow-x-hidden overflow-y-auto md:pt-10">
            <Container>
              <div className="grid grid-cols-8 gap-y-8">
                <div className="col-start-1 col-end-9 md:col-end-5">
                  <Intro title={title} text={introText} />
                </div>
                <div className="col-start-1 col-end-9 md:col-start-6 lg:mt-0">
                  <Profile profile={profile} />
                </div>
                <div className="col-start-1 col-end-9 mt-6 mb-8 md:mt-10 md:mb-14 lg:mt-14 lg:mb-20">
                  <AreasMap areas={displayAreas} />
                </div>
                {contact && (
                  <>
                    <div className="col-start-1 col-end-9 md:col-end-5">
                      <div className="text-secondary">{contact.text}</div>
                    </div>
                    <div className="col-start-1 col-end-9 md:col-start-6 lg:mt-0">
                      <a href={contact.button.link} target="_blank" rel="noreferrer">
                        <button className="px-5 py-3 tracking-wide transition-colors ease-out border rounded border-highlight hover:bg-highlight hover:text-bg-primary">
                          <div className="flex items-center gap-x-2">
                            {contact.button.label || contact.button.link}
                            <MailIcon className="w-4 h-4" />
                          </div>
                        </button>
                      </a>
                    </div>
                  </>
                )}
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
      contact {
        ...Contact
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
