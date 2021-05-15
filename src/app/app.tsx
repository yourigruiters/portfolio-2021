import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { ColorTheme, ThemeType } from './styles/theme';
import HomePage from './containers/pages/home';

const GlobalStyles = styled.div`
  * {
    transition: background 0.25s linear;
  }
`;

interface Props {
  reduxTheme: ThemeType;
}

const App: React.FC<Props> = ({ reduxTheme }) => {
  return (
    <ThemeProvider theme={ColorTheme[reduxTheme]}>
      <GlobalStyles>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </GlobalStyles>
    </ThemeProvider>
  );
};

export default App;
