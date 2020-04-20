import React from 'react';
import RootRouter from 'pages';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ColorModeProvider>
          <RootRouter />
        </ColorModeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
