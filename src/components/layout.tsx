import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
  div {
    box-sizing: border-box;
  }
`

export const pointColor = "#009bfb"

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 100vh;
  margin: 0 auto;
  flex: 0;
  @media (max-width: 576px) {
    display: block;
    overflow: none;
    width: 100%;
  }
`
const Container = styled.main`
  width: 100%;
  height: 100%;
  max-height: 800px;
`

interface IProps {
  children?: React.ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrap>
        <Container>{children}</Container>
      </Wrap>
    </React.Fragment>
  )
}

export default Layout
