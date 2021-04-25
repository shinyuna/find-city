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
          title: `말랑찰떡 성향 테스트`,
          description: `나의 성향과 맞는 도시 찾기 테스트`,
        },
      },
    })
  })
  it("renders the tests correctly", () => {
    render(<SEO />)

    const { title, metaTags } = Helmet.peek()

    expect(title).toBe("말랑찰떡 성향 테스트")
    expect(metaTags[0].content).toBe("나의 성향과 맞는 도시 찾기 테스트")
    expect(metaTags.length).toBe(4)
  })
  it("should render OK with props", () => {
    const propsTitle = "Props seo title"
    render(<SEO title={propsTitle} />)

    const { title } = Helmet.peek()

    expect(title).toBe(propsTitle)
  })
})
