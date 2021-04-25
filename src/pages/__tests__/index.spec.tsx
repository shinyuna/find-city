import React from "react"
import { render, waitFor } from "@testing-library/react"
import { useStaticQuery } from "gatsby"
import IndexPage from ".."

describe("<IndexPage />", () => {
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
    const { getByText } = render(<IndexPage />)

    await waitFor(() => {
      expect(document.title).toBe("찰떡궁합 도시 찾기")
      getByText("나랑 찰떡궁합 도시 알아보기")
    })
  })
})
