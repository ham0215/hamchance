import { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ExternalLink } from 'libs/ui/ExternalLink';

type Props = {
  href: string;
  productName: string;
  name: string;
  children: ReactNode;
};

export function ProductLink({ href, productName, name, children }: Props) {
  return (
    <Grid item xs={12}>
      <ExternalLink href={href}>
        <Grid container spacing={4}>
          <Grid item>{children}</Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              {productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {name}
            </Typography>
          </Grid>
        </Grid>
      </ExternalLink>
    </Grid>
  );
}
