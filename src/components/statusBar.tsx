import React, { useEffect } from "react";
import styled from "styled-components";
import airplane from "../images/airplane.png";

interface IProps {
  currentCount: number;
  totalCount: number;
}
interface IStyleProps {
  total: number;
  current: number;
}

const Status = styled.div`
  position: relative;
  width: 100%;
  height: 0.5em;
  border-radius: 5em;
  background-color: #fff;
  margin: 15px 0;
`;
const Bar = styled.div<IStyleProps>`
  width: ${(props) => ((100 / props.total) * props.current).toFixed(2)}%;
  height: 100%;
  border-radius: 5em;
  background-color: #009bfb;
  transition: 0.5s ease-in-out;
`;
const IconBox = styled.div<IStyleProps>`
  width: ${(props) => ((100 / props.total) * props.current).toFixed(2)}%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: center;
  & > p {
    color: #009bfb;
    font-weight: 600;
    font-size: 1em;
    line-height: 1.25em;
  }
`;
const Icon = styled.img.attrs({
  src: airplane,
})`
  width: 2em;
`;

const StatusBar: React.FC<IProps> = ({ totalCount, currentCount }) => {
  useEffect(() => {
    return true;
  }, [currentCount]);
  return (
    <>
      <IconBox total={totalCount} current={currentCount}>
        <p>{currentCount}</p>
        <Icon />
      </IconBox>
      <Status>
        <Bar total={totalCount} current={currentCount}></Bar>
      </Status>
    </>
  );
};

export default StatusBar;
