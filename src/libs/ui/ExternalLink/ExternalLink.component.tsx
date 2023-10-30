import Link from '@mui/material/Link';
import { ReactNode } from 'react';

type Props = { href: string; children: ReactNode };

export function ExternalLink({ href, children }: Props) {
  return (
    <Link href={href} color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
