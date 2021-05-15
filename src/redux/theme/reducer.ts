import { ReduxActionState } from './../../typings/state';
import { ThemeType } from 'styles/theme';

export interface ThemeState {
  theme: ThemeType;
}

const initialState: ThemeState = {
  theme: 'light',
};

const themeReducer = (
  state = initialState,
  _action: ReduxActionState,
) => {
  return state;
};

export default themeReducer;
