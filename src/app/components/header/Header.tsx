import styled from '@emotion/styled';
import ThemeSwitcher from '../../containers/components/ThemeSwitcher';
import React from 'react';

const Container = styled.header`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0px 28px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 28px;
`;

const Logo = styled.p`
  font-size: 24px;
  font-family: ${({ theme: { fonts } }) => fonts.header};
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.text00};

  span {
    font-weight: 700;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 28px;
`;

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo>
          <span>Y</span>ouri.<span>IO</span>
        </Logo>
      </LogoWrapper>
      <MenuWrapper>
        <ThemeSwitcher />
      </MenuWrapper>
    </Container>
  );
};

export default Header;
