import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

// const SEO: FC<{ seo?: any }> = ({ seo = {} }) => {
//   const { strapiGlobal } = useStaticQuery(query)
//   const { defaultSeo, siteName, favicon } = strapiGlobal

//   // Merge default and page-specific SEO values
//   const fullSeo = { ...defaultSeo, ...seo }

//   const getMetaTags = () => {
//     const tags = []

//     if (fullSeo.metaTitle) {
//       tags.push(
//         {
//           property: 'og:title',
//           content: fullSeo.metaTitle
//         },
//         {
//           name: 'twitter:title',
//           content: fullSeo.metaTitle
//         }
//       )
//     }
//     if (fullSeo.metaDescription) {
//       tags.push(
//         {
//           name: 'description',
//           content: fullSeo.metaDescription
//         },
//         {
//           property: 'og:description',
//           content: fullSeo.metaDescription
//         },
//         {
//           name: 'twitter:description',
//           content: fullSeo.metaDescription
//         }
//       )
//     }
//     if (fullSeo.shareImage) {
//       const imageUrl = (process.env.GATSBY_ROOT_URL || 'http://localhost:8001') + fullSeo.shareImage.localFile.publicURL
//       tags.push(
//         {
//           name: 'image',
//           content: imageUrl
//         },
//         {
//           property: 'og:image',
//           content: imageUrl
//         },
//         {
//           name: 'twitter:image',
//           content: imageUrl
//         }
//       )
//     }
//     if (fullSeo.article) {
//       tags.push({
//         property: 'og:type',
//         content: 'article'
//       })
//     }
//     tags.push({ name: 'twitter:card', content: 'summary_large_image' })

//     return tags
//   }

//   const metaTags = getMetaTags()

//   return (
//     <Helmet
//       title={fullSeo.metaTitle}
//       titleTemplate={`%s | ${siteName}`}
//       link={[
//         {
//           rel: 'icon',
//           href: favicon.publicURL
//         },
//         {
//           rel: 'stylesheet',
//           href: 'https://fonts.googleapis.com/css?family=Staatliches'
//         }
//       ]}
//       script={[]}
//       meta={metaTags}
//     />
//   )
// }

// const query = graphql`
//   query SeoData {
//     strapiGlobal {
//       siteName
//       favIcon {
//         file {
//           publicURL
//         }
//       }
//       defaultSeo {
//         metaTitle
//         metaDescription
//         shareImage {
//           file {
//             publicURL
//           }
//         }
//       }
//     }
//   }
// `

export default SEO
