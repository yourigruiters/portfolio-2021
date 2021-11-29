import { ThemeType } from './../../styles/theme';
import { SWITCH_THEME, SET_THEME } from './types';

export const setTheme = (theme: ThemeType) => ({
  type: SET_THEME,
  payload: theme,
});

export const switchTheme = () => ({
  type: SWITCH_THEME,
});
