import styled from '@emotion/styled';
import React from 'react';

const LabelsContainer = styled.div`
  display: flex;
  column-gap: 15px;
  width: 100%;
  height: auto;
  min-height: 26px;
  margin-top: 10px;
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.primaryDark};
  color: #fff;
  padding: 4px 16px;
  text-align: center;
  border-radius: 100px;
  font-size: 10px;
`;

interface Props {
  labels: string[];
}

const Labels: React.FC<Props> = ({ labels }) => {
  return (
    <LabelsContainer>
      {labels.map((label) => (
        <Label>{label}</Label>
      ))}
    </LabelsContainer>
  );
};

export default Labels;
