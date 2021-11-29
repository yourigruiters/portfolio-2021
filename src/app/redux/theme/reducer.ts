import { SWITCH_THEME, SET_THEME } from './types';
import { ReduxActionState } from '../../typings/state';
import { ThemeType } from 'app/styles/theme';

export interface ThemeState {
  theme: ThemeType;
}

const initialState: ThemeState = {
  theme: 'dark', // SET LIGHT BY DEFAULT
};

const themeReducer = (
  state = initialState,
  action: ReduxActionState,
) => {
  const { type, payload } = action;

  switch (type) {
    case SET_THEME: {
      return {
        ...state,
        theme: payload,
      };
    }
    case SWITCH_THEME: {
      localStorage.setItem(
        'theme',
        state.theme === 'light' ? 'dark' : 'light',
      );

      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
