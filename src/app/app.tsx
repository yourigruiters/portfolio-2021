import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Theme, ThemeType } from './styles/theme';
import HomePage from './containers/pages/home';

interface Props {
  reduxTheme: ThemeType;
}

const App: React.FC<Props> = ({ reduxTheme }) => {
  useEffect(() => {
    console.log(reduxTheme);
  }, [reduxTheme]);

  return (
    <ThemeProvider theme={Theme[reduxTheme]}>
      <Switch>
        <Route path="/" component={() => <HomePage />} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
