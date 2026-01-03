import { SiX } from '@icons-pack/react-simple-icons';
import Grid from '@mui/material/Grid';
import { QrModalButton } from 'libs/ui/QrModalButton';

import { ProductLink } from '../ProductLink';

export function XProductLink() {
  return (
    <>
      <ProductLink href="https://twitter.com/hamchance0215" productName="X" name="@hamchance0215">
        <SiX color="black" size={46} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
      </ProductLink>
      <Grid size="auto">
        <QrModalButton src="/static/images/x-qr.png" alt="X QR code" />
      </Grid>
    </>
  );
}
