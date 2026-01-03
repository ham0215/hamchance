import { useCallback, useState } from 'react';

export function useQrButtonPresenter() {
  const [openQrModal, setOpenQrModal] = useState(false);

  const handleOpenQrModal = useCallback(() => {
    setOpenQrModal(true);
  }, []);

  const handleCloseQrModal = useCallback(() => {
    setOpenQrModal(false);
  }, []);

  return {
    openQrModal,
    handleOpenQrModal,
    handleCloseQrModal,
  } as const;
}
