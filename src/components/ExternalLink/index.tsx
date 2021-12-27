import { ReactNode } from 'react';
import NextLink from 'next/link';
import Link from '@mui/material/Link';

type Props = { href: string; prefetch?: boolean; children: ReactNode };

export default function ExternalLink({ href, prefetch = false, children }: Props) {
  return (
    <NextLink href={href} prefetch={prefetch}>
      <Link href={href} color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    </NextLink>
  );
}
