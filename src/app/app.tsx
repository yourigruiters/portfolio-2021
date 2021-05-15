import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { ColorTheme, ThemeType } from './styles/theme';
import HomePage from './containers/pages/home';

interface Props {
  reduxTheme: ThemeType;
}

const App: React.FC<Props> = ({ reduxTheme }) => {
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
