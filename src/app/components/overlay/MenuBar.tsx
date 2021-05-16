import styled from '@emotion/styled';
import React from 'react';
import logo from '../../media/images/logo.png';

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
`;

interface Props {}

const MenuBar: React.FC<Props> = () => {
  return (
    <Menu>
      <Logo src={logo} alt="logo" />
      <div>123</div>
      <div>123</div>
    </Menu>
  );
};

export default MenuBar;
