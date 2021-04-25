import React from "react"
import { render, RenderResult, waitFor } from "@testing-library/react"
import { useStaticQuery } from "gatsby"
import ResultPage from "../result"
import { Provider } from "react-redux"
import { store } from "../../state"

describe("<ResultPage />", () => {
  let renderResult: RenderResult
  beforeEach(() => {
    const location = {
      pathname: "/result",
      search: "?city=seoul",
    }
    renderResult = render(
      <Provider store={store}>
        <ResultPage location={location} />
      </Provider>
    )
  })
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: `말랑찰떡 성향 테스트`,
          description: `나의 성향과 맞는 도시 찾기 테스트`,
        },
      },
      images: {
        nodes: [
          {
            publicURL:
              "/static/07040e068d0d2c60693e7cd67514e2f5/result-london.jpg",
          },
          {
            publicURL:
              "/static/1ec54076c07cae694067856f5afc461a/result-newyork.jpg",
          },
          {
            publicURL:
              "/static/57aabdf4d0a552d75da3e3f2cfd9720c/result-seoul.jpg",
          },
        ],
      },
    })
    jest.useFakeTimers()
  })
  afterAll(() => {
    jest.useRealTimers()
  })
  it("renders OK", async () => {
    await waitFor(() => {
      expect(document.title).toBe("나의 찰떡궁합 도시 결과 🍡")
    })
  })
  it("display text", async () => {
    const { getByText, debug } = renderResult
    await getByText("결과 기다리는 중 ~")
    await waitFor(() => getByText("테스트 다시 해보기"), {
      timeout: 3000,
    })
  })
})
