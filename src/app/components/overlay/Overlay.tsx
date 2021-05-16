import styled from '@emotion/styled';
import React from 'react';
import Text from '../text/Text';
import MenuBar from './MenuBar';
import ThemeSwitcher from '../../containers/components/themeSwitcher';

const Container = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Bars = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const TopBar = styled.div`
  ${({ theme: { colors } }) => `
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 40px;
        padding: 0px 40px;
        background-color: ${colors.neutral00};
    `}
`;

const BottomBar = styled.div`
  ${({ theme: { colors } }) => `
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 40px;
        padding: 0px 40px;
        background-color: ${colors.neutral00};
    `}
`;

const RightBar = styled.div`
  ${({ theme: { colors } }) => `
        display: flex;
        width: 40px;
        background-color: ${colors.neutral00};
    `}
`;

interface Props {}

const Overlay: React.FC<Props> = () => {
  return (
    <Container>
      <TopBar>
        <ThemeSwitcher />
      </TopBar>
      <Bars>
        <MenuBar />
        <RightBar />
      </Bars>
      <BottomBar>
        <Text>© | Youri Gruiters | 2021</Text>
      </BottomBar>
    </Container>
  );
};

export default Overlay;
