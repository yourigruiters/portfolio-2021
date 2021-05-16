import styled from '@emotion/styled';
import React from 'react';
import { ThemeType } from 'app/styles/theme';
import light from '../../media/images/light.png';
import dark from '../../media/images/dark.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Switcher = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 5px;
  cursor: pointer;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
`;

const Input = styled.input`
  display: none;

  &:checked + .slider {
    background-color: #66bb6a;
  }

  &:checked + .slider:before {
    transform: translateX(18px);
  }
`;

const Slider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: #ccc;
  border-radius: 18px;
  cursor: pointer;
  transition: 0.4s;

  &:before {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

const Logo = styled.img<{ active: boolean }>`
  ${({ active }) => `
    display: flex;
    width: 18px;
    height: 18px;
    cursor: pointer;
    filter: grayscale(${active ? '0%' : '100%'});
  `}
`;

interface Props {
  theme: ThemeType;
  switchTheme: () => void;
}

const ThemeSwitcher: React.FC<Props> = ({ theme, switchTheme }) => {
  return (
    <Container>
      <Logo
        src={dark}
        alt="dark mode"
        active={theme === 'dark'}
        onClick={switchTheme}
      />
      <Switcher>
        <Label htmlFor="checkbox">
          <Input
            type="checkbox"
            id="checkbox"
            checked={theme === 'light'}
            onChange={switchTheme}
          />
          <Slider className="slider" />
        </Label>
      </Switcher>
      <Logo
        src={light}
        alt="light mode"
        active={theme === 'light'}
        onClick={switchTheme}
      />
    </Container>
  );
};

export default ThemeSwitcher;
