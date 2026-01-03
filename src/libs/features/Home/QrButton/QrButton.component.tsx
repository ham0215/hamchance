'use client';

import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useCallback, useState } from 'react';

import { QrModal } from '../QrModal';

export function QrButton() {
  const [openQrModal, setOpenQrModal] = useState(false);

  const handleOpenQrModal = useCallback(() => {
    setOpenQrModal(true);
  }, []);

  const handleCloseQrModal = useCallback(() => {
    setOpenQrModal(false);
  }, []);

  return (
    <>
      <div onClick={handleOpenQrModal}>
        <QrCode2Icon fontSize="medium" />
      </div>
      <QrModal open={openQrModal} onClose={handleCloseQrModal} />
    </>
  );
}
