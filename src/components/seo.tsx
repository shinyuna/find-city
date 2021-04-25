import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface IProps {
  title?: string
}

const SEO: React.FC<IProps> = ({ title }) => {
  const { site } = useStaticQuery(query)

  const seo = {
    title: title || site.siteMetadata.title,
    description: site.siteMetadata.description,
    author: site.siteMetadata.author,
  }

  return (
    <Helmet
      title={seo.title}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: `author`,
          content: seo.author,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
      ]}
    />
  )
}
export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
