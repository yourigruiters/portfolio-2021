import React from 'react';
import { ThemeType } from 'app/styles/theme';
interface Props {
    theme: ThemeType;
    switchTheme: () => void;
}
declare const ThemeSwitcher: React.FC<Props>;
export default ThemeSwitcher;
