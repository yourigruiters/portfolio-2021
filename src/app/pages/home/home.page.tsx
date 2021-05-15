import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  ${({ theme: { colors } }) => `
    background-color: ${colors.red08};
  `}
`;

const Button = styled.button`
  ${({ theme: { colors } }) => `
  background-color: ${colors.neutral00};
  color: ${colors.text00};
  margin: 40px;
  padding: 20px;
`}
`;

interface Props {
  setTheme: () => void;
}

const HomePage: React.FC<Props> = ({ setTheme }) => {
  const testing = 'Toggle Theme';

  return (
    <Container>
      <Button onClick={setTheme}>{testing}</Button>
    </Container>
  );
};

export default HomePage;
