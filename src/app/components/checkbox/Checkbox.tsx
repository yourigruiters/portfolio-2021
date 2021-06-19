import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  cursor: pointer;
`;

const StyledCheckbox = styled.input<{ checked: boolean }>`
  ${({ theme: { colors }, checked }) => `
    width: 100%;
    height: 100%;
    border: 1px solid ${colors.aqua06};
    border-radius: 8px;
    cursor: pointer;
    background: ${
      checked ? 'rgba(40,40,40,0.2)' : 'rgba(40,40,40,0.7)'
    };
  `}
`;

interface Props {
  checked: boolean;
  onChange?: () => void;
}

const Checkbox: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <Container>
      <StyledCheckbox
        checked={checked}
        type="checkbox"
        onChange={onChange}
      />
    </Container>
  );
};

export default Checkbox;
