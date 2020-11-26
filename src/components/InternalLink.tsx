import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import MaterialLink from '@material-ui/core/Link';

type Props = {
  children: ReactNode;
  to: string;
};

export default ({ children, to }: Props) => (
  <MaterialLink component={Link} to={to} underline="none" color="inherit">
    {children}
  </MaterialLink>
);
