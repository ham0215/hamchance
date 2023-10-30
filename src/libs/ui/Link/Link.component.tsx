import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

type Props = { href: string; prefetch?: boolean };

export function Link({ href, prefetch = false, children }: PropsWithChildren<Props>) {
  return (
    <NextLink href={href} prefetch={prefetch} passHref legacyBehavior>
      <MuiLink color="inherit" underline="none">
        {children}
      </MuiLink>
    </NextLink>
  );
}
