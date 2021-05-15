import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  ${({ theme: { colors } }) => `
    background-color: ${colors.backgroundColor};
  `}
`;

const Button = styled.button`
  background-color: pink;
  padding: 20px;
`;

interface Props {
  setTheme: () => void;
}

const HomeView: React.FC<Props> = ({ setTheme }) => {
  const testing = 'Toggle Theme';
  return (
    <Container>
      <Button onClick={setTheme}>{testing}</Button>
    </Container>
  );
};

export default HomeView;
