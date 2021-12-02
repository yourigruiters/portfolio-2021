import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { ColorTheme, ThemeType } from './styles/theme';
import HomePage from './containers/pages/home';
import styled from '@emotion/styled';
import { init } from 'emailjs-com';
import apiKey from '../emailKey';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.background};

  *::selection {
    background-color: ${({ theme: { colors } }) =>
      colors.primaryLight};
    color: #fff;
  }
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
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    init(apiKey.USER_ID);
  }, []);

  return (
    <ThemeProvider theme={ColorTheme[reduxTheme || 'dark']}>
      <Container>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default App;
