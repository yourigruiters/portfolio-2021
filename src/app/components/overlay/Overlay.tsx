import styled from '@emotion/styled';
import React from 'react';
import Text from '../text/Text';
import MenuBar from './MenuBar';
import ThemeSwitcher from '../../containers/components/themeSwitcher';

const TopBar = styled.div`
  ${({ theme: { colors } }) => `
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0px 40px 0px 130px;
    background-color: ${colors.neutral00};
  `}
`;

const BottomBar = styled.div`
  ${({ theme: { colors } }) => `
  z-index: 2;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0px 40px 0px 130px;
    background-color: ${colors.neutral00};
`}
`;

const RightBar = styled.div`
  ${({ theme: { colors } }) => `
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    width: 40px;
    height: 100vh;
    padding: 40px 0px;
    background-color: ${colors.neutral00};
`}
`;

interface Props {}

const Overlay: React.FC<Props> = () => {
  return (
    <>
      <TopBar>
        <ThemeSwitcher />
      </TopBar>
      <MenuBar />
      <RightBar />
      <BottomBar>
        <Text>© | Youri Gruiters | 2021</Text>
      </BottomBar>
    </>
  );
};

export default Overlay;
