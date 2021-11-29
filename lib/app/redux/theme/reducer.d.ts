import { ReduxActionState } from '../../typings/state';
import { ThemeType } from 'app/styles/theme';
export interface ThemeState {
    theme: ThemeType;
}
declare const themeReducer: (state: ThemeState | undefined, action: ReduxActionState) => {
    theme: any;
};
export default themeReducer;
