import Typography from '@mui/material/Typography';
import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <Typography variant="body2">
        {'Copyright © Ham '}
        {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}