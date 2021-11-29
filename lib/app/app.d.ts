import React from 'react';
import { ThemeType } from './styles/theme';
interface Props {
    reduxTheme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}
declare const App: React.FC<Props>;
export default App;
