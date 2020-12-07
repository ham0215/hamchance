import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import MaterialLink from '@material-ui/core/Link';
import { TypographyVariant } from '@material-ui/core';

type Props = {
  children: ReactNode;
  to: string;
  variant: TypographyVariant;
};

export default ({ children, to, variant }: Props) => (
  <MaterialLink component={Link} to={to} underline="none" color="inherit" variant={variant}>
    {children}
  </MaterialLink>
);
