/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

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
    title: 'Philip Hradecsni',
    description: `Philip Hradecsni Homepage`,
    // twitterUsername: `@gatsbyjs`,
    // image: `/gatsby-icon.png`,
    siteUrl: `https://philhradecs.com`
  },
  graphqlTypegen: { typesOutputPath: 'gatsby-types.d.ts' },
  trailingSlash: 'never',
  flags: {
    DEV_SSR: true,
    FAST_DEV: true
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    'gatsby-plugin-use-dark-mode',
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
