import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    box-sizing: border-box;
    color: ${props => (props.theme === 'purple' ? 'purple' : 'white')};
  }
`;

const Container = styled.div`
  width: 400px;
  height: 100vh;
  margin: 0 auto;
`;

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />
      <Container>{children}</Container>;
    </React.Fragment>
  );
};

export default Layout;
