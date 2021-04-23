import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface IProps {
  title?: string
  description?: string
  author?: string
}

const SEO: React.FC<IProps> = ({ title, description, author }) => {
  const { site } = useStaticQuery(query)
  const { defaultTitle, defaultDescription, defaultAuthor } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: author || defaultAuthor,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
    </Helmet>
  )
}
export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultAuthor: author
      }
    }
  }
`
