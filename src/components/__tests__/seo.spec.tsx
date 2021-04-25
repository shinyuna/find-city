import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Helmet from "react-helmet"
import SEO from "../seo"

describe("<SEO />", () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: `Gatsby Starter Blog`,
          description: `A starter blog demonstrating what Gatsby can do.`,
        },
      },
    })
  })
  it("renders the tests correctly", () => {
    render(<SEO />)

    const { title, metaTags } = Helmet.peek()

    expect(title).toBe("Gatsby Starter Blog")
    expect(metaTags[0].content).toBe(
      "A starter blog demonstrating what Gatsby can do."
    )
    expect(metaTags.length).toBe(4)
  })
  it("should render OK with props", () => {
    const propsTitle = "Props seo title"
    render(<SEO title={propsTitle} />)

    const { title } = Helmet.peek()

    expect(title).toBe(propsTitle)
  })
})
