import QrCode2Icon from '@mui/icons-material/QrCode2';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ExternalLink } from 'libs/ui/ExternalLink';
import { PropsWithChildren } from 'react';

type Props = {
  href: string;
  productName: string;
  name: string;
  onClickQr?: () => void;
};

export function ProductLink({ href, productName, name, onClickQr, children }: PropsWithChildren<Props>) {
  return (
    <>
      <Grid item xs={10}>
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
      {onClickQr && (
        <Grid item alignItems="center">
          <div onClick={onClickQr}>
            <QrCode2Icon fontSize="large" />
          </div>
        </Grid>
      )}
    </>
  );
}
