import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  ${({ theme: { colors } }) => `
    display: flex;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${colors.neutral00};

    div:first-of-type {
      height: 100%;
      width: 100%;
      background-color: #ff5851;
    }

    div:last-of-type {
      height: 100%;
      width: 100%;
      background-color: #f8f8f8;
    }
  `}
`;

interface Props {}

const Landing: React.FC<Props> = () => {
  return (
    <Container>
      <div></div>
      <div></div>
    </Container>
  );
};

export default Landing;
