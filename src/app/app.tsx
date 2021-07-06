import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { ColorTheme, ThemeType } from './styles/theme';
import HomePage from './containers/pages/home';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.background};
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
      setTheme('dark'); // Light by default
    }
  }, []);

  return (
    <ThemeProvider theme={ColorTheme[reduxTheme || 'dark']}>
      {/* SET THE ABOVE TO LIGHT BY DEFAULT */}
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
