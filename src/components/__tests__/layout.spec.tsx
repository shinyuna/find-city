import React from "react"
import { render } from "@testing-library/react"
import Layout from "../layout"

describe("<Layout />", () => {
  it("should render OK with props children", () => {
    const { getByText } = render(
      <Layout>
        <p>test layout children</p>
      </Layout>
    )
    getByText("test layout children")
  })
})
