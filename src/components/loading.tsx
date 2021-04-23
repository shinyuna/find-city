import React from "react"
import styled, { css, keyframes } from "styled-components"
import airplaneImg from "../images/airplane.png"
import { pointColor } from "./layout"

const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const AirPlaneAnimation = keyframes`
  0% {
    transform: translateX(-70px);
  }
  100% {
    transform: translateX(440px);
  }
`
const animation = css`
  animation: ${AirPlaneAnimation} 4s infinite linear;
`
const Moving = styled.div`
  display: flex;
  align-items: center;
  ${animation}
  p {
    margin-right: 10px;
    color: ${pointColor};
  }
`

export const Loading: React.VFC = () => {
  return (
    <LoadingBox>
      <Moving>
        <p>결과 기다리는 중 ~</p>
        <img src={airplaneImg} alt="airplane image" />
      </Moving>
    </LoadingBox>
  )
}
