import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Helmet from "react-helmet"
import SEO from "../seo"

describe("SEO component", () => {
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
    const mockTitle = "Gatsby Starter Blog"
    const mockDescription = "A starter blog demonstrating what Gatsby can do."

    render(<SEO title={mockTitle} />)
    const { title, metaTags } = Helmet.peek()

    expect(title).toBe(mockTitle)
    expect(metaTags[0].content).toBe(mockDescription)
    expect(metaTags.length).toBe(4)
  })
})
