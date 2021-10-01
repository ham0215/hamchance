import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppBar, IconButton, Link, Toolbar, useTheme } from '@mui/material';
import { TogglePaletteModeContext } from 'providers/PaletteModeProvider';
import Menu from './Menu';

export default function Header() {
  const theme = useTheme();
  const togglePaletteMode = useContext(TogglePaletteModeContext);

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Menu />
        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" color="inherit" underline="none">
            Hamchance.com
          </Link>
        </Typography>
        <IconButton sx={{ ml: 1 }} color="inherit" onClick={togglePaletteMode}>
          {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
