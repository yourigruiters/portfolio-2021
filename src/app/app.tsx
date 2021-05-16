import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { ColorTheme, ThemeType } from './styles/theme';
import HomePage from './containers/pages/home';

interface Props {
  reduxTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const App: React.FC<Props> = ({ reduxTheme, setTheme }) => {
  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme !== 'undefined') {
      setTheme(theme as ThemeType);
    } else {
      setTheme('light');
    }
  }, []);

  return (
    <ThemeProvider theme={ColorTheme[reduxTheme]}>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
