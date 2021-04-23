import React, { useEffect, useState } from "react"
import { graphql, Link, PageProps, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Layout, { pointColor } from "../components/layout"
import { useSelector } from "react-redux"
import { IRootState } from "../state"
import { Loading } from "../components/loading"
import SEO from "../components/seo"

interface IMap {
  publicURL: string
}

const Result = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  img {
    width: 100%;
  }
`
const Button = styled(props => <Link {...props} />)`
  display: block;
  width: 90%;
  padding: 1.5rem 0;
  margin: 2rem auto;
  border: none;
  border-radius: 5rem;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: ${pointColor};
  cursor: pointer;
`

const ResultPage: React.VFC<PageProps> = ({ location }) => {
  const tempData = useSelector((state: IRootState) => state.temp)
  const [loading, setLoading] = useState(false)
  const [, city] = location.search.split("=")
  const [img, setImg] = useState<string | null>(null)
  const {
    images: { nodes: resultImages },
  } = useStaticQuery(graphql`
    {
      images: allFile(filter: { base: { regex: "/result/" } }) {
        nodes {
          publicURL
        }
      }
    }
  `)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const { publicURL: resultImg } = resultImages.find((item: IMap) =>
        item.publicURL.includes(city)
      )
      setLoading(false)
      setImg(resultImg)
    }, 3000)
  }, [img])
  return (
    <Layout>
      <SEO title="나의 찰떡궁합 도시 결과 🍡" />
      {loading ? (
        <Loading />
      ) : (
        <Result>
          {img && <img src={img} alt={city} />}
          <Button to="/qna">테스트 다시 해보기</Button>
        </Result>
      )}
    </Layout>
  )
}

export default ResultPage
