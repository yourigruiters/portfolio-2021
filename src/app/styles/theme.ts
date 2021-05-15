export type ThemeType = 'light' | 'dark';

export interface ITheme {
  colors: {
    backgroundColor: string;
    color: string;
  };
}

export const lightTheme = {
  colors: {
    backgroundColor: '#fff',
    color: '#000',
  },
};

export const darkTheme = {
  colors: {
    backgroundColor: '#000',
    color: '#fff',
  },
};

export const ColorTheme: Record<ThemeType, ITheme> = {
  light: lightTheme,
  dark: darkTheme,
};
