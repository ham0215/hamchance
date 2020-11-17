import React, { ReactNode } from 'react';
import { Link, TypographyVariant } from '@material-ui/core';

type Props = {
  children: ReactNode;
  href: string;
  variant: TypographyVariant;
};

export default ({ children, variant, href }: Props) => (
  <Link href={href} underline="none" variant={variant} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);
