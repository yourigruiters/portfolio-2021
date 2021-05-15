export type ThemeType = 'light' | 'dark';

interface ITheme {
  backgroundColor: string;
  color: string;
}

const lightTheme = {
  backgroundColor: '#fff',
  color: '#000',
};

const darkTheme = {
  backgroundColor: '#000',
  color: '#fff',
};

export const Theme: Record<ThemeType, ITheme> = {
  light: lightTheme,
  dark: darkTheme,
};
