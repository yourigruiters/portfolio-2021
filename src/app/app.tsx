import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import HomePage from './modules/home/home.view';
import { Theme, ThemeType } from '../styles/theme';

interface AppProps {}

const App = ({}: AppProps) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={Theme[theme]}>
      <Switch>
        <Route
          path="/"
          component={() => (
            <HomePage setTheme={setTheme} theme={theme} />
          )}
        />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
