import Typography from '@mui/material/Typography';

import { Container } from './Footer.styles';

export function Footer() {
  return (
    <Container>
      <Typography variant="body2">
        {'Copyright © Ham '}
        {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}
