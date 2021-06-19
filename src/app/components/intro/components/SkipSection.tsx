import styled from '@emotion/styled';
import Checkbox from '../../checkbox/Checkbox';
import React, { useState } from 'react';
import Button from '../..//button/Button';

const Container = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 300px;
  height: 50px;
  perspective: 2000px;
  overflow: hidden;
`;

const RememberContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const Text = styled.p`
  ${({ theme: { colors } }) => `
      color: ${colors.neutral00};
      font-size: 12px;
      line-height: 20px;

      span {
        font-weight: bold;
      }
  `}
`;

interface Props {
  skipIntro: () => void;
}

const SkipSection: React.FC<Props> = ({ skipIntro }) => {
  const [isChecked, setIsChecked] = useState(false);

  // TODO - Setup localStorage for remember Checkbox

  return (
    <Container>
      <Button onClick={skipIntro}>Skip intro</Button>
      <RememberContainer>
        <Checkbox
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <Text>
          <span>Check me</span> to skip this intro in the future
        </Text>
      </RememberContainer>
    </Container>
  );
};

export default SkipSection;
