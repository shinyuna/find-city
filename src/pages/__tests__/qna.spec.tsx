import React from "react"
import { render, RenderResult, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { navigate, useStaticQuery } from "gatsby"
import { Provider } from "react-redux"
import { store } from "../../state"
import QnaPage from "../qna"

describe("<QnaPage />", () => {
  let renderResult: RenderResult
  beforeEach(() => {
    renderResult = render(
      <Provider store={store}>
        <QnaPage />
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
      questions: {
        nodes: [
          {
            question: "지금 당장 떠난다면?",
            answer: [
              "느긋한 여행이 좋아!</br>  30일 동안 1개 도시",
              "알찬 여행이 좋아!</br> 30일 동안 10개 도시",
            ],
          },
          {
            question: "여행 출발 전 당신은?",
            answer: [
              "여행은 판타지지!</br> 여행지 배경의 영화를 찾아본다",
              "여행은 다큐지!</br> 가이드북과 블로그를 섭렵한다",
            ],
          },
        ],
      },
      city: {
        nodes: [
          { id: 1, name: "seoul" },
          { id: 2, name: "paris" },
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
      expect(document.title).toBe("찰떡궁합 도시 찾는 중")
    })
  })
  it("display question & action for last question", async () => {
    const { getByRole, getByText } = renderResult
    const answerButton = getByRole("answer-button-1")
    getByText("지금 당장 떠난다면?")
    userEvent.click(answerButton)
    await waitFor(
      () => {
        getByText("여행 출발 전 당신은?")
      },
      { timeout: 1000 }
    )
    userEvent.click(answerButton)
    await waitFor(
      () => {
        expect(navigate).toHaveBeenCalledTimes(1)
      },
      { timeout: 1000 }
    )
  })
})
