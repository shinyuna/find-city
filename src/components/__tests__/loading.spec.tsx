import React from "react"
import { render } from "@testing-library/react"
import { Loading } from "../loading"

describe("<Loading />", () => {
  it("should render OK", () => {
    const { getByText } = render(<Loading />)
    getByText("결과 기다리는 중 ~")
  })
})
