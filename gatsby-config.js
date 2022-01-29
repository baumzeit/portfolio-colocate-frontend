/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const config = require('./tailwind.config')

const mediaQueries = Object.fromEntries(Object.entries(config.theme.screens).map(([bp, size]) => [bp, `(min-width: ${size})`]))


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
    'gatsby-plugin-use-query-params',
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: mediaQueries
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: './src/images/'
    //   },
    //   __key: 'images'
    // },
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
        collectionTypes: ['Project', 'Tag', 'Area'],
        singleTypes: ['Home'],
        // Extract images from markdown fields.
        // markdownImages: {
        //   typesToParse: {
        //     Article: ['body'],
        //     ComponentBlockBody: ['text'],
        //   },
        // },
        // Only include specific locale.
        //locale: 'en', // default to all
        // Include drafts in build.
        //preview: true, // defaults to false
        //headers: {},
      },
    },
  ]
}
