import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import { Link } from '@mui/material';

type Props = { href: string, prefetch?: boolean, children: ReactNode };

export default function LinkComponent({ href, prefetch = false, children }: Props) {
  return (
    <NextLink href={href} prefetch={prefetch} >
      <Link color="inherit" underline="none">
        {children}
      </Link>
    </NextLink>
  );
}
