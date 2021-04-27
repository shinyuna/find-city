import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout, { pointColor } from "../components/layout"
import mainImage from "../images/back_b.jpg"
import SEO from "../components/seo"

const Lading = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${pointColor};
`
const LadingTop = styled.div`
  padding: 60px 20px 0;
  height: 55%;
`
const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  font-weight: 300;
  margin-bottom: 2rem;
  & > span {
    font-weight: 600;
  }
  @media (max-width: 330px) {
    font-size: 3rem;
  }
`
const Button = styled(props => <Link {...props} />)`
  display: block;
  width: 75%;
  padding: 1.5rem;
  border: none;
  border-radius: 5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${pointColor};
  text-align: center;
  text-decoration: none;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    transform: scale(1.025);
  }
  &:focus {
    outline: none;
  }
`
const LandingBottom = styled.img.attrs({
  src: mainImage,
})`
  width: 100%;
  object-fit: cover;
`

const IndexPage: React.VFC = () => {
  return (
    <Layout>
      <SEO title="찰떡궁합 도시 찾기" />
      <Lading>
        <LadingTop>
          <Title>
            <span>나</span>를 <br />
            <span>도시</span>로 <br />
            <span>표현</span>한다면?
          </Title>
          <Button to="/qna/">나랑 찰떡궁합 도시 알아보기</Button>
        </LadingTop>
        <LandingBottom />
      </Lading>
    </Layout>
  )
}

export default IndexPage
