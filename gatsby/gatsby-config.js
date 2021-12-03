/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    siteURL: process.env.GATSBY_ROOT_URL,
    title: 'Portfolio Canopies'
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    'gatsby-plugin-graphql-codegen',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
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
      options: {
        apiURL: process.env.GATSBY_API_URL,
        collectionTypes: ['project', 'tag', 'field'],
        singleTypes: ['global', 'home']
      }
    }
  ]
}
