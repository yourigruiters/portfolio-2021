import styled from '@emotion/styled';
import React from 'react';
import { DividerIcon } from '../../media/icons/Icons';

const Container = styled.div<Props>`
  display: flex;
  width: 100%;
  height: auto;
  background-color: ${({ theme: { colors }, background }) => {
    switch (background) {
      case 'lightest':
        return colors.backgroundLightest;
      case 'light':
        return colors.backgroundLight;
      case 'dark':
        return colors.backgroundDark;
      case 'darkest':
        return colors.backgroundDarkest;
      default:
        return colors.background;
    }
  }};

  path {
    fill: ${({ theme: { colors }, fill }) => {
      switch (fill) {
        case 'lightest':
          return colors.backgroundLightest;
        case 'light':
          return colors.backgroundLight;
        case 'dark':
          return colors.backgroundDark;
        case 'darkest':
          return colors.backgroundDarkest;
        default:
          return colors.background;
      }
    }};
  }
`;

interface Props {
  fill?: 'lightest' | 'light' | 'default' | 'dark' | 'darkest';
  background?: 'lightest' | 'light' | 'default' | 'dark' | 'darkest';
}

const Divider: React.FC<Props> = ({
  fill = 'default',
  background = 'default',
}) => {
  return (
    <Container fill={fill} background={background}>
      <DividerIcon />;
    </Container>
  );
};

export default Divider;
