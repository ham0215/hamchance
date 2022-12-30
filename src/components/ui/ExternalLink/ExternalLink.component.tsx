import { ReactNode } from 'react';
import Link from '@mui/material/Link';

type Props = { href: string; children: ReactNode };

export default function ExternalLink({ href, children }: Props) {
  return (
    <Link href={href} color="inherit" underline="none" target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
