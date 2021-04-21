import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/layout';
import mainImage from '../images/back_b.jpg';

const Lading = styled.div`
  width: 100%;
  height: 100%;
  background-color: #009bfb;
`;
const LadingTop = styled.div`
  padding: 60px 20px 0;
  height: 50%;
`;
const Title = styled.h1`
  font-size: 4em;
  color: #fff;
  font-weight: 300;
  margin-bottom: 0.5em;
  & > span {
    font-weight: 600;
  }
`;
const Button = styled(props => <Link {...props} />)`
  display: block;
  width: 80%;
  padding: 1em;
  border: none;
  border-radius: 5em;
  font-size: 1.25em;
  font-weight: 600;
  color: #009bfb;
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
`;
const LandingBottom = styled.img.attrs({
  src: mainImage,
})`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

const IndexPage: React.VFC = () => {
  return (
    <Layout>
      <Helmet>
        <title>찰떡궁합 도시 찾기</title>
      </Helmet>
      <Lading>
        <LadingTop>
          <Title>
            <span>나</span>를 <br />
            <span>도시</span>로 <br />
            <span>표현</span>한다면?
          </Title>
          <Button to="/question/">나랑 찰떡궁합 도시 알아보기</Button>
        </LadingTop>
        <LandingBottom />
      </Lading>
    </Layout>
  );
};

export default IndexPage;
