import styled from '@emotion/styled';
import React from 'react';
import logo from '../../media/images/logo.png';
import instagram from '../../media/images/instagram.png';
import linkedin from '../../media/images/linkedin.png';

const Menu = styled.div`
  ${({ theme: { colors } }) => `
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 130px;
        padding: 20px;
        background-color: ${colors.neutral00};
    `}
`;

const Logo = styled.img`
  display: flex;
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
`;

const SMLogo = styled.img`
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
    <Menu>
      <Logo src={logo} alt="logo" />
      {/* Menu */}
      <div>123</div>
      <SocialMedia>
        <SMLogo src={instagram} alt="instagram" />
        <SMLogo src={linkedin} alt="linkedin" />
      </SocialMedia>
    </Menu>
  );
};

export default MenuBar;
