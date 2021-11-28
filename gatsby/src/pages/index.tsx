import { ContourChart } from '../features/viz/ContourChart'
import { Helmet } from 'react-helmet'
import { HomeDataQuery } from '../../graphql-types'
import { Link, graphql } from 'gatsby'
import { PATH } from '../common/constants/paths'
import Layout from '../common/components/Layout'
import React, { FC, useMemo } from 'react'

// markup
const HomePage: FC<{ data: HomeDataQuery }> = ({ data: { strapiHome, allStrapiField } }) => {
  const { title, subtitle, intro, strapiFields, seo } = strapiHome

  const displayFields = useMemo(
    () => allStrapiField.edges.filter(({ node }) => strapiFields.map((field) => 'Field_' + field.id).includes(node.id)),
    [allStrapiField.edges, strapiFields]
  )

  console.log('all', allStrapiField)
  console.log('selection', strapiFields)

  return (
    <>
      <Helmet>
        <title>{seo.metaTitle}</title>
      </Helmet>
      <Layout>
        <div className="relative">
          <div className="h-[500px] w-full absolute top-0 left-0">
            <ContourChart data={[{ x: 30, y: 30 }]} margin={200} />
          </div>
          <div className="relative z-10">
            <h1 className="text-3xl font-semibold mb-4 color-primary tracking-wider">{title}</h1>
            <div>{subtitle}</div>
            <div>{intro}</div>
            {displayFields.map(({ node: field }) => (
              <div key={field.id}>
                <div>{field.name}</div>
                <div className="ml-3 text-secondary">
                  {field.projects.map((project) => (
                    <Link to={`${PATH.PROJECT}/${project.slug}`} key={project.id}>
                      {project.title}
                    </Link>
                  ))}
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
