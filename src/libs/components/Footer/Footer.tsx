'use client';

import Typography from '@mui/material/Typography';

import { Container } from './Footer.styles';

export function Footer() {
  return (
    <Container>
      <Typography variant="body2">
        {'Copyright © Ham '}
        {/* eslint-disable-next-line @eslint-react/purity -- 表示年は描画時点の値でよく、再描画で変わっても実害がない */}
        {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}
