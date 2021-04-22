import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Layout from "../components/layout";
import StatusBar from "../components/statusBar";

const Qna = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f3f4f6;
  padding: 40px 20px;
`;
const QnaBox = styled.div`
  flex: 4;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Question = styled.h4`
  font-size: 1.8rem;
  margin: 2rem 0;
`;
const Answer = styled.div`
  margin: 2rem 0;
  button {
    width: 100%;
    padding: 2rem;
    font-size: 1.25rem;
    border: none;
    border-radius: 5rem;
    background-color: #fff;
    cursor: pointer;
    & + button {
      margin-top: 1rem;
    }
    &:hover {
      transform: scale(1.025);
    }
    &:focus {
      outline: none;
    }
  }
`;
const QnqPage: React.VFC = () => {
  const [current, setCurrent] = useState(1);
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
  const totalCount: number = questionList.length;
  return (
    <Layout>
      <Helmet>
        <title>찰떡궁합 도시 찾는중</title>
      </Helmet>
      <Qna>
        <StatusBar totalCount={totalCount} currentCount={current} />
        <QnaBox>
          <Question>{questionList[current - 1]?.node.question}</Question>
          <Answer>
            {questionList[current - 1]?.node.answer.map(
              (answer: string, index: number) => (
                <button
                  key={index}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              )
            )}
          </Answer>
        </QnaBox>
      </Qna>
    </Layout>
  );
};

export default QnqPage;
