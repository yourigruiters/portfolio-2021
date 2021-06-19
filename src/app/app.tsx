import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { ColorTheme, ThemeType } from './styles/theme';
import HomePage from './containers/pages/home';
import styled from '@emotion/styled';

const Container = styled.div`
  ${({ theme: { colors } }) => `
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: ${colors.neutral00};
  `};
`;

interface Props {
  reduxTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const App: React.FC<Props> = ({ reduxTheme, setTheme }) => {
  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme !== 'undefined' || !theme) {
      setTheme(theme as ThemeType);
    } else {
      setTheme('light');
    }
  }, []);

  return (
    <ThemeProvider theme={ColorTheme[reduxTheme || 'light']}>
      <Container>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default App;
