export type ThemeType = 'light' | 'dark';

export interface ITheme {
  colors: {
    backgroundLight: string;
    background: string;
    backgroundDark: string;
    backgroundDarkest: string;
    text00: string;
    text01: string;
    text02: string;
    text03: string;
    text04: string;
  };
  fonts: {
    header: string;
    text: string;
    tag: string;
  };
}

export const lightTheme = {
  colors: {
    backgroundLight: '#ffffff',
    background: '#f7f7f7',
    backgroundDark: '#eeeeee',
    backgroundDarkest: '#dddddd',
    text00: 'rgba(0,0,0,1)',
    text01: 'rgba(0,0,0,0.85)',
    text02: 'rgba(0,0,0,0.65)',
    text03: 'rgba(0,0,0,0.45)',
    text04: 'rgba(0,0,0,0.2)',
  },
  fonts: {
    header: "'Ultra', serif",
    text: "'Open Sans', sans-serif",
    tag: "'Coming Soon', cursive",
  },
};

export const darkTheme = {
  colors: {
    backgroundLight: '#333742',
    background: '#1e2025',
    backgroundDark: '#1d1f22',
    backgroundDarkest: '#1a1c20',
    text00: 'rgba(255, 255, 255, 1)',
    text01: 'rgba(255, 255, 255, 0.85)',
    text02: 'rgba(255, 255, 255, 0.65)',
    text03: 'rgba(255, 255, 255, 0.45)',
    text04: 'rgba(255, 255, 255, 0.2)',
  },
  fonts: {
    header: "'Ultra', serif",
    text: "'Open Sans', sans-serif",
    tag: "'Coming Soon', cursive",
  },
};

export const ColorTheme: Record<ThemeType, ITheme> = {
  light: lightTheme,
  dark: darkTheme,
};
