import { act, renderHook } from '@testing-library/react';

import { useQrButtonPresenter } from './QrButtonPresenter';

describe('useQrButtonPresenter', () => {
  it('should initialize with modal closed', () => {
    const { result } = renderHook(() => useQrButtonPresenter());

    expect(result.current.openQrModal).toBe(false);
  });

  it('should open modal when handleOpenQrModal is called', () => {
    const { result } = renderHook(() => useQrButtonPresenter());

    act(() => {
      result.current.handleOpenQrModal();
    });

    expect(result.current.openQrModal).toBe(true);
  });

  it('should close modal when handleCloseQrModal is called', () => {
    const { result } = renderHook(() => useQrButtonPresenter());

    act(() => {
      result.current.handleOpenQrModal();
    });

    expect(result.current.openQrModal).toBe(true);

    act(() => {
      result.current.handleCloseQrModal();
    });

    expect(result.current.openQrModal).toBe(false);
  });
});
