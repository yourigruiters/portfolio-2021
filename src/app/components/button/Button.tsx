import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <Container>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </Container>
  );
};

export default Button;
