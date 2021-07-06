import styled from '@emotion/styled';
import ThemeSwitcher from '../../containers/components/ThemeSwitcher';
import React from 'react';

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) =>
    colors.backgroundLight};
`;

interface Props {}

const Landing: React.FC<Props> = () => {
  return (
    <Container>
      <ThemeSwitcher />
    </Container>
  );
};

export default Landing;
