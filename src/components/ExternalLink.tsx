import React from 'react';
import Link from '@material-ui/core/Link';

type Props = {
  href: string;
  name: string;
};

export default (props: Props) => {
  const { href, name } = props;

  return (
    <Link href={href} underline="none" variant="body2" target="_blank" rel="noopener noreferrer">
      {name}
    </Link>
  );
};
