/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
const config = require('./tailwind.config')

const mediaQueries = Object.fromEntries(
  Object.entries(config.theme.screens).map(([bp, size]) => [bp, `(min-width: ${size})`])
)

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  singleTypes: [
    {
      singularName: 'home',
      queryParams: {
        populate: { seo: '*', contact: { populate: '*' }, profile: { populate: '*' }, areas: '*' }
      }
    }
  ],
  collectionTypes: ['area', 'organization', 'project', 'tag']
}

module.exports = {
  siteMetadata: {
    siteURL: process.env.GATSBY_ROOT_URL,
    title: 'Philip Hradecsni'
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    'gatsby-plugin-use-query-params',
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: mediaQueries
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-strapi',
      options: strapiConfig
    }
  ]
}
