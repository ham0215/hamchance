'use client';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppBar, IconButton, Toolbar, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'libs/ui/Link';
import { TogglePaletteModeContext } from 'providers/PaletteModeProvider';
import { useContext } from 'react';

export function Header() {
  const theme = useTheme();
  const togglePaletteMode = useContext(TogglePaletteModeContext);

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">Hamchance.com</Link>
        </Typography>
        <IconButton sx={{ ml: 1 }} color="inherit" onClick={togglePaletteMode}>
          {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
