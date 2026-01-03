import Link from '@mui/material/Link';
import { PropsWithChildren } from 'react';

type Props = { href: string };

export function ExternalLink({ href, children }: PropsWithChildren<Props>) {
  return (
    <Link href={href} color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
