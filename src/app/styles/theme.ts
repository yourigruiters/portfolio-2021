export type ThemeType = 'light' | 'dark';

export interface ITheme {
  colors: {
    backgroundLightest: string;
    backgroundLight: string;
    background: string;
    backgroundDark: string;
    backgroundDarkest: string;
    primaryLight: string;
    primary: string;
    primaryDark: string;
    locationOpacity: string;
    landingOpacity: string;
    text00: string;
    text01: string;
    text02: string;
    text03: string;
    text04: string;
  };
  fonts: {
    header: string;
    text: string;
  };
}

export const lightTheme = {
  colors: {
    backgroundLightest: '#ffffff',
    backgroundLight: '#ffffff',
    background: '#f7f7f7',
    backgroundDark: '#eeeeee',
    backgroundDarkest: '#dddddd',
    primaryLight: '#3F00FA',
    primary: '#17199F',
    primaryDark: '#17246D',
    locationOpacity: 'rgba(3, 22, 37, 0.85)',
    landingOpacity:
      'linear-gradient(190deg,rgb(2 3 60),rgba(255 , 255, 255, 0),rgba(255 , 255, 255, 0))',
    text00: 'rgba(0,0,0,1)',
    text01: 'rgba(0,0,0,0.85)',
    text02: 'rgba(0,0,0,0.65)',
    text03: 'rgba(0,0,0,0.45)',
    text04: 'rgba(0,0,0,0.2)',
  },
  fonts: {
    header: "'Montserrat', serif",
    text: "'Heebo', sans-serif",
  },
  theme: 'light',
};

export const darkTheme = {
  colors: {
    backgroundLightest: '#404040',
    backgroundLight: '#272A33',
    background: '#000',
    backgroundDark: '#16171A',
    backgroundDarkest: '#020203',
    primaryLight: '#ea00fa',
    primary: '#C2199F',
    primaryDark: '#C2246D',
    locationOpacity: 'rgba(37, 3, 26, 0.85)',
    landingOpacity:
      'linear-gradient(190deg,rgba(194, 25, 159, 0.4),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))',
    text00: 'rgba(255, 255, 255, 1)',
    text01: 'rgba(255, 255, 255, 0.85)',
    text02: 'rgba(255, 255, 255, 0.65)',
    text03: 'rgba(255, 255, 255, 0.45)',
    text04: 'rgba(255, 255, 255, 0.2)',
  },
  fonts: {
    header: "'Montserrat', serif",
    text: "'Heebo', sans-serif",
  },
  theme: 'dark',
};

export const ColorTheme: Record<ThemeType, ITheme> = {
  light: lightTheme,
  dark: darkTheme,
};
