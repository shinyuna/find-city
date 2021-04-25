import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

// styles
const NotFound = styled.div`
  color: "#232129";
  padding: "96px";
  font-family: "-apple-system, Roboto, sans-serif, serif";
  p {
    margin-bottom: 48px;
  }
`
const PageTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 64px;
  max-width: 320px;
`

const NotFoundPage: React.VFC = () => {
  return (
    <Layout>
      <SEO title="404: Page not found" />
      <NotFound>
        <PageTitle>Page not found</PageTitle>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" && (
            <>
              <br />
              Try creating a page in src/pages/.
              <br />
            </>
          )}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </NotFound>
    </Layout>
  )
}

export default NotFoundPage
