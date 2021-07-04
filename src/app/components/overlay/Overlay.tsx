import styled from '@emotion/styled';
import React from 'react';
import ThemeSwitcher from '../../containers/components/themeSwitcher';
import instagram from '../../media/images/instagram.png';
import linkedin from '../../media/images/linkedin.png';

const TopBar = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0px 40px 0px 40px;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

const BottomBar = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0px 40px 0px 40px;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

const RightBar = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  width: 40px;
  height: 100vh;
  padding: 40px 0px;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

const LeftBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.text03};
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-size: 12px;
  line-height: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
`;

const Title = styled.p`
  color: ${({ theme: { colors } }) => colors.text03};
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-size: 18px;
  line-height: 40px;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 75px;
  height: auto;
`;

const SMIcon = styled.img`
  display: flex;
  width: 18px;
  height: 18px;
  cursor: pointer;
  filter: grayscale(100%);
  transition: filter 0.4s linear;

  &:hover {
    filter: grayscale(0%);
  }
`;

interface Props {}

const Overlay: React.FC<Props> = () => {
  return (
    <>
      <TopBar>
        <TitleContainer>
          <Title>Youri.IO</Title>
        </TitleContainer>
        <ThemeSwitcher />
      </TopBar>
      <LeftBar />
      <RightBar />
      <BottomBar>
        <SocialMedia>
          <SMIcon src={instagram} alt="instagram" />
          <SMIcon src={linkedin} alt="linkedin" />
        </SocialMedia>
        <Text>© | Youri Gruiters | 2021</Text>
      </BottomBar>
    </>
  );
};

export default Overlay;
