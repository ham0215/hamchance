import React from 'react';
import RootRouter from 'pages';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/global';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RootRouter />
    </ThemeProvider>
  );
}
