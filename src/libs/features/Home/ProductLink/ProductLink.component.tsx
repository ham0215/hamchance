import QrCode2Icon from '@mui/icons-material/QrCode2';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
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
      <Grid size={{ xs: 10 }}>
        <ExternalLink href={href}>
          <Stack direction="row" spacing={4}>
            <div>{children}</div>
            <div>
              <Typography variant="body2" color="text.secondary" noWrap>
                {productName}
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                {name}
              </Typography>
            </div>
          </Stack>
        </ExternalLink>
      </Grid>
      {onClickQr && (
        <Grid size="auto">
          <div onClick={onClickQr}>
            <QrCode2Icon fontSize="medium" />
          </div>
        </Grid>
      )}
    </>
  );
}
