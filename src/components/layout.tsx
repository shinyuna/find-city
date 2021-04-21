import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  div {
    box-sizing: border-box;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 100vh;
  margin: 0 auto;
  flex: 0;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 800px;
`;

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrap>
        <Container>{children}</Container>
      </Wrap>
    </React.Fragment>
  );
};

export default Layout;
