import styled from '@emotion/styled';
import React from 'react';

const Content = styled.div`
  ${({ theme: { colors, fonts } }) => `
      color: ${colors.text03};
      font-family: ${fonts.header};
      font-size: 12px;
      line-height: 20px;
  `}
`;

interface Props {}

const Text: React.FC<Props> = ({ children }) => {
  return <Content>{children}</Content>;
};

export default Text;
