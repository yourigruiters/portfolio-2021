import styled from '@emotion/styled';
import React from 'react';
import { ThemeType } from 'app/styles/theme';
import light from '../../media/images/light.png';
import dark from '../../media/images/dark.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: auto;

  .theme-switch-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0px 5px;
  }

  .theme-switch {
    display: inline-block;
    height: 22px;
    position: relative;
    width: 40px;
  }

  .theme-switch input {
    display: none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 2px;
    content: '';
    height: 18px;
    left: 2px;
    position: absolute;
    transition: 0.4s;
    width: 18px;
  }

  input:checked + .slider {
    background-color: #66bb6a;
  }

  input:checked + .slider:before {
    transform: translateX(18px);
  }

  .slider.round {
    border-radius: 18px;
  }

  .slider.round:before {
    border-radius: 50%;
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
  setTheme: () => void;
}

const ThemeSwitcher: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <Container>
      <Logo
        src={dark}
        alt="dark mode"
        active={theme === 'dark'}
        onClick={setTheme}
      />
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            checked={theme === 'light'}
            onChange={setTheme}
          />
          <div className="slider round"></div>
        </label>
      </div>
      <Logo
        src={light}
        alt="light mode"
        active={theme === 'light'}
        onClick={setTheme}
      />
    </Container>
  );
};

export default ThemeSwitcher;
