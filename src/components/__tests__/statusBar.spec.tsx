import React from "react"
import { render } from "@testing-library/react"
import StatusBar from "../status-bar"

describe("<StatusBar />", () => {
  it("should render OK with props", () => {
    const { getByText } = render(<StatusBar currentCount={3} totalCount={5} />)
    getByText("3")
  })
})
