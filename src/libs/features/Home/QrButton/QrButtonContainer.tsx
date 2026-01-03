'use client';

import { QrModal } from '../QrModal';
import { QrButton } from './QrButton';
import { useQrButtonPresenter } from './QrButtonPresenter';

export function QrButtonContainer() {
  const { openQrModal, handleOpenQrModal, handleCloseQrModal } = useQrButtonPresenter();

  return (
    <>
      <QrButton onClick={handleOpenQrModal} />
      <QrModal open={openQrModal} onClose={handleCloseQrModal} />
    </>
  );
}
