import { graphql } from 'gatsby'

export const query = graphql`
  fragment ExternalLink on StrapiComponentSharedLinks {
    id
    link
    label
  }
  fragment ImageBase on StrapiUploadFile {
    id
    alternativeText
    caption
  }
  fragment AreaBase on StrapiArea {
    id
    slug
    name
    description
    color
  }
  fragment AreaDetail on StrapiArea {
    ...AreaBase
    projects {
      id
      images {
        ...ImageBase
        file {
          childImageSharp {
            gatsbyImageData(height: 25, placeholder: BLURRED)
          }
        }
      }
    }
    tags {
      id
      name
    }
  }
  fragment Organization on StrapiOrganization {
    id
    name
    link
  }
  fragment ProjectDetail on StrapiProject {
    id
    title
    name
    slug
    description
    organization {
      ...Organization
    }
    coverImage {
      ...ImageBase
      file {
        childImageSharp {
          gatsbyImageData(width: 600, placeholder: BLURRED)
        }
      }
    }
    images {
      ...ImageBase
      file {
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED)
        }
      }
    }
    tags {
      id
      name
    }
    areas {
      ...AreaBase
    }
    links {
      ...ExternalLink
    }
  }
  fragment Profile on StrapiComponentSharedProfile {
    picture {
      ...ImageBase
      file {
        childImageSharp {
          gatsbyImageData(height: 200, placeholder: DOMINANT_COLOR)
        }
      }
    }
    qualities {
      text
    }
  }
  fragment Contact on StrapiComponentSharedContact {
    text
    button {
      ...ExternalLink
    }
  }
`
