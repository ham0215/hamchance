'use client';

import { QrModal } from 'libs/ui/QrModal';
import { QrButton } from './QrButton';
import { useQrButtonPresenter } from './QrButtonPresenter';

type Props = {
  src: string;
  alt?: string;
};

export function QrButtonContainer({ src, alt }: Props) {
  const { openQrModal, handleOpenQrModal, handleCloseQrModal } = useQrButtonPresenter();

  return (
    <>
      <QrButton onClick={handleOpenQrModal} />
      <QrModal open={openQrModal} src={src} alt={alt} onClose={handleCloseQrModal} />
    </>
  );
}
