import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div<{ ready: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${({ ready }) => (ready ? '30%' : '100%')};
  background-color: ${({ theme: { colors } }) =>
    colors.backgroundDark};
  border-left: 5px solid red;
  transition: width 1s;

  * > {
    opacity: ${({ ready }) => (ready ? '1' : '0')};
    transition: opacity 1s;
  }
`;

const Header = styled.div`
  background-color: ${({ theme: { colors } }) =>
    colors.backgroundDarkest};
  border: 1px solid rgba(88, 89, 93, 0.2);
  min-height: 53px;
  margin-bottom: 40px;
`;

interface Props {
  ready: boolean;
}

const Coding: React.FC<Props> = ({ ready }) => {
  return (
    <Container ready={ready}>
      {ready && (
        <>
          <Header>123</Header>
          <Header>123</Header>
        </>
      )}
    </Container>
  );
};

export default Coding;
