import { useContext } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Box from '@mui/material/Box';
import Copyright from 'components/Copyright';
import { IconButton, useTheme } from '@mui/material';
import { TogglePaletteModeContext } from 'providers/PaletteModeProvider';

export default function Home() {
  const theme = useTheme();
  const togglePaletteMode = useContext(TogglePaletteModeContext);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <IconButton sx={{ ml: 1 }} color="inherit" onClick={togglePaletteMode}>
          {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <Copyright />
      </Box>
    </Container>
  );
}
