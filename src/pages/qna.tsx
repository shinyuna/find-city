import React, { useCallback, useState } from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import styled, { css, keyframes } from "styled-components";
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
const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;
const fadeInAnimation = css`
  animation: ${fadeIn} 1s forwards;
`;
const QnaBox = styled.div<{ fade: boolean }>`
  flex: 4;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(props) => props.fade && fadeInAnimation}
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
      margin-top: 2rem;
    }
    &:hover {
      transform: scale(1.025);
    }
    &:focus {
      outline: none;
    }
  }
`;
const QnaPage: React.VFC = () => {
  const [current, setCurrent] = useState<number>(1);
  const [selectList, setSelectList] = useState<number[]>([]);
  const [animation, setAnimation] = useState<boolean>(true);

  const data = useStaticQuery(graphql`
    {
      questions: allQnaItemsJson {
        nodes {
          question
          answer
        }
      }
      city: allCityJson {
        nodes {
          name
        }
      }
    }
  `);
  const cityList = data.city.nodes;
  const questionList = data.questions.nodes;
  const totalCount: number = questionList.length;

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max) + 1;
  };
  const onSelect = useCallback(
    (e: React.BaseSyntheticEvent) => {
      const selectAnswer: number = e.target.id;
      if (current === totalCount) {
        const cityId = getRandomInt(cityList.length);
        return navigate(`/result?city=${cityList[cityId].name}`);
      }
      setAnimation(false);
      setTimeout(() => {
        setSelectList([...selectList, selectAnswer]);
        setCurrent((prev) => prev + 1);
        setAnimation(true);
      }, 0);
    },
    [current, animation]
  );
  return (
    <Layout>
      <Helmet>
        <title>찰떡궁합 도시 찾는중</title>
      </Helmet>
      <Qna>
        <StatusBar totalCount={totalCount} currentCount={current} />
        <QnaBox fade={animation}>
          <Question>{questionList[current - 1]?.question}</Question>
          <Answer onClick={onSelect}>
            {questionList[current - 1]?.answer.map(
              (answer: string, index: number) => (
                <button
                  id={index + ""}
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

export default QnaPage;
