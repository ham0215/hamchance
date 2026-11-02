import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

type Props = { href: string; prefetch?: boolean };

export function Link({ href, prefetch = false, children }: PropsWithChildren<Props>) {
  return (
    <MuiLink component={NextLink} href={href} prefetch={prefetch} color="inherit" underline="none">
      {children}
    </MuiLink>
  );
}
