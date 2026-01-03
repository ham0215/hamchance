'use client';

import QrCode2Icon from '@mui/icons-material/QrCode2';

import { QrModal } from '../QrModal';
import { useQrButtonPresenter } from './QrButtonPresenter';

export function QrButton() {
  const { openQrModal, handleOpenQrModal, handleCloseQrModal } = useQrButtonPresenter();

  return (
    <>
      <div onClick={handleOpenQrModal}>
        <QrCode2Icon fontSize="medium" />
      </div>
      <QrModal open={openQrModal} onClose={handleCloseQrModal} />
    </>
  );
}
