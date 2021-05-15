import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { ColorTheme, ThemeType } from './styles/theme';
import HomePage from './containers/pages/home';

interface Props {
  reduxTheme: ThemeType;
}

const App: React.FC<Props> = ({ reduxTheme }) => {
  useEffect(() => {
    console.log(reduxTheme);
  }, [reduxTheme]);

  return (
    <ThemeProvider theme={ColorTheme[reduxTheme]}>
      <Switch>
        <Route path="/" component={() => <HomePage />} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
