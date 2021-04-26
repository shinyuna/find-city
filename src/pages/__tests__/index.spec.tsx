import React from "react"
import { render, RenderResult, waitFor } from "@testing-library/react"
import { useStaticQuery } from "gatsby"
import IndexPage from ".."

describe("<IndexPage />", () => {
  let renderResult: RenderResult
  beforeEach(() => {
    renderResult = render(<IndexPage />)
  })
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
  it("renders OK", async () => {
    await waitFor(() => {
      expect(document.title).toBe("찰떡궁합 도시 찾기")
    })
  })
  it("renders OK with button", async () => {
    const { getByText } = renderResult

    getByText("나랑 찰떡궁합 도시 알아보기")
    expect(document.querySelector("a")?.getAttribute("href")).toBe("/qna/")
  })
})
