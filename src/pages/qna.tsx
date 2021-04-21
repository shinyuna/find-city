import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Layout from "../components/layout";
import StatusBar from "../components/statusBar";

const QnA = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f4f6;
  padding: 40px 20px;
`;

const QnqPage: React.VFC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const {
    questions: { edges: questionList },
  } = useStaticQuery(graphql`
    {
      questions: allQnaItemsJson {
        edges {
          node {
            question
            answer
          }
        }
      }
    }
  `);
  const totalCount = questionList.length;
  return (
    <Layout>
      <Helmet>
        <title>찰떡궁합 도시 찾는중</title>
      </Helmet>
      <QnA>
        <StatusBar totalCount={totalCount} currentCount={} />
      </QnA>
    </Layout>
  );
};

export default QnqPage;
