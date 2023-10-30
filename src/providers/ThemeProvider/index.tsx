import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { PaletteModeContext } from 'providers/PaletteModeProvider';
import { PropsWithChildren, useContext } from 'react';

import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

export default function HamThemeProvider({ children }: PropsWithChildren) {
  const paletteMode = useContext(PaletteModeContext);
  const theme = paletteMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
