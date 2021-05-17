import styled from '@emotion/styled';
import React from 'react';
import logo from '../../media/images/logo.png';
import instagram from '../../media/images/instagram.png';
import linkedin from '../../media/images/linkedin.png';
import Menu from './Menu';

const Container = styled.div`
  ${({ theme: { colors } }) => `
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    height: 100%;
    padding: 40px 0px;
    background-color: ${colors.neutral00};
  `}
`;

const LogoHolder = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 0px 20px;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0px 20px;
`;

const SMIcon = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;
  filter: grayscale(100%);
  transition: filter 0.25s linear;

  &:hover {
    filter: grayscale(0%);
  }
`;

interface Props {}

const MenuBar: React.FC<Props> = () => {
  return (
    <Container>
      <LogoHolder>
        <Logo src={logo} alt="logo" />
      </LogoHolder>
      <Menu />
      <SocialMedia>
        <SMIcon src={instagram} alt="instagram" />
        <SMIcon src={linkedin} alt="linkedin" />
      </SocialMedia>
    </Container>
  );
};

export default MenuBar;
