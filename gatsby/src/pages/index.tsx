import { Link, graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet'

import { HomeDataQuery } from '../../graphql-types'
import Layout from '../common/components/Layout'
import { Main } from '../common/components/Main'
import { Navbar } from '../common/components/Navbar'
import { PATH } from '../common/constants/paths'
import notEmpty from '../common/utility/notEmpty'
import { HomeNavContent } from '../features/home/NavContent'
import { ContourChart } from '../features/viz/ContourChart'

// markup
const HomePage = ({ data: { strapiHome, allStrapiField } }: PageProps<HomeDataQuery>) => {
  const displayFields = useMemo(() => {
    if (allStrapiField && strapiHome) {
      const strapiFields = strapiHome.strapiFields?.filter(notEmpty)
      if (strapiFields) {
        return allStrapiField.edges.filter((field) =>
          strapiFields.map((homeField) => 'Field_' + homeField.id).includes(field.node.id)
        )
      }
    }
  }, [allStrapiField, strapiHome])

  if (!(strapiHome && allStrapiField && displayFields)) {
    return <div>No Data</div>
  }
  const { title, subtitle, intro, seo } = strapiHome

  return (
    <>
      <Helmet>
        <title>{seo?.metaTitle}</title>
      </Helmet>
      <Layout>
        <Navbar>
          <HomeNavContent />
        </Navbar>
        <Main>
          <div className="h-[500px] w-full absolute top-0 left-0">
            <ContourChart data={[{ x: 30, y: 30 }]} margin={200} />
          </div>
          <div className="relative z-10">
            <h1 className="mb-4 text-3xl font-semibold tracking-wider color-primary">{title}</h1>
            <div>{subtitle}</div>
            <div>{intro}</div>
            {displayFields.map(({ node: field }) => (
              <div key={field.id}>
                <div>{field.name}</div>
                <div className="ml-3 text-secondary">
                  {field.projects
                    ? field.projects.filter(notEmpty).map((project) => (
                        <Link to={`${PATH.PROJECTS}?project=${project.slug}`} key={project.id}>
                          {project.title}
                        </Link>
                      ))
                    : null}
                </div>
              </div>
            ))}
          </div>
        </Main>
      </Layout>
    </>
  )
}

export const query = graphql`
  query HomeData {
    strapiHome {
      title
      subtitle
      intro
      seo {
        metaTitle
      }
      strapiFields {
        id
        name
        description
      }
    }
    allStrapiField(sort: { fields: name, order: ASC }) {
      edges {
        node {
          projects {
            id
            title
            slug
          }
          ...FieldBase
        }
      }
    }
  }
`

export default HomePage
