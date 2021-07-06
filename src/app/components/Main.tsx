import styled from '@emotion/styled';
import React from 'react';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

interface Props {}

const Main: React.FC<Props> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
