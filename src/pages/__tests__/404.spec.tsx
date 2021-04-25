import React from "react"
import { render, waitFor } from "@testing-library/react"
import { useStaticQuery } from "gatsby"
import NotFoundPage from "../404"

describe("<NotFoundPage />", () => {
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
    const { container, getByText } = render(<NotFoundPage />)

    await waitFor(() => {
      expect(document.title).toBe("404: Page not found")
      getByText("Page not found")
      expect(container).toHaveTextContent(
        "we couldn’t find what you were looking for."
      )
    })
  })
})
