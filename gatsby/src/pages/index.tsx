import { Link, graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet'

import { HomeDataQuery } from '../../graphql-types'
import Layout from '../common/components/Layout'
import { PATH } from '../common/constants/paths'
import { HomeNavContent } from '../features/home/NavContent'
import { ContourChart } from '../features/viz/ContourChart'

// markup
const HomePage = ({ data: { strapiHome, allStrapiField } }: PageProps<HomeDataQuery>) => {
  const { title, subtitle, intro, strapiFields, seo } = strapiHome

  const displayFields = useMemo(
    () => allStrapiField.edges.filter(({ node }) => strapiFields.map((field) => 'Field_' + field.id).includes(node.id)),
    [allStrapiField.edges, strapiFields]
  )

  return (
    <>
      <Helmet>
        <title>{seo.metaTitle}</title>
      </Helmet>
      <Layout navContent={<HomeNavContent />}>
        <div className="relative">
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
                    ? field.projects.map((project) => (
                        <Link to={`${PATH.PROJECTS}#${project.slug}`} key={project.id}>
                          {project.title}
                        </Link>
                      ))
                    : null}
                </div>
              </div>
            ))}
          </div>
        </div>
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
          id
          name
          projects {
            id
            title
            slug
          }
        }
      }
    }
  }
`

export default HomePage
