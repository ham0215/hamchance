import { act, render, screen } from '@testing-library/react';
import { useContext } from 'react';

import PaletteModeProvider, { PaletteModeContext, TogglePaletteModeContext } from '.';

function Consumer() {
  const mode = useContext(PaletteModeContext);
  const toggle = useContext(TogglePaletteModeContext);
  return (
    <button type="button" onClick={toggle}>
      {mode}
    </button>
  );
}

function renderWithProvider() {
  return render(
    <PaletteModeProvider>
      <Consumer />
    </PaletteModeProvider>
  );
}

describe('PaletteModeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('defaults to light when nothing is saved', () => {
    renderWithProvider();
    expect(screen.getByRole('button')).toHaveTextContent('light');
  });

  it('restores dark from localStorage', () => {
    localStorage.setItem('paletteMode', 'dark');
    renderWithProvider();
    expect(screen.getByRole('button')).toHaveTextContent('dark');
  });

  it('falls back to light for an invalid saved value', () => {
    localStorage.setItem('paletteMode', 'blue');
    renderWithProvider();
    expect(screen.getByRole('button')).toHaveTextContent('light');
  });

  it('toggles the mode and persists it', () => {
    renderWithProvider();
    const button = screen.getByRole('button');

    act(() => button.click());
    expect(button).toHaveTextContent('dark');
    expect(localStorage.getItem('paletteMode')).toBe('dark');

    act(() => button.click());
    expect(button).toHaveTextContent('light');
    expect(localStorage.getItem('paletteMode')).toBe('light');
  });

  it('follows changes made in another tab', () => {
    renderWithProvider();
    act(() => {
      localStorage.setItem('paletteMode', 'dark');
      window.dispatchEvent(new StorageEvent('storage', { key: 'paletteMode' }));
    });
    expect(screen.getByRole('button')).toHaveTextContent('dark');
  });
});

// ストレージ不可の判定はモジュール内に残り以降のケースへ持ち越されるため、このファイルの最後に置く。
// 書き込み失敗は判定が残っていると経路を通らないので別ファイル（storageWriteFailure.test.tsx）で検証する
describe('PaletteModeProvider when storage is unavailable', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('keeps the last read mode when storage becomes unreadable', () => {
    localStorage.setItem('paletteMode', 'dark');
    const { unmount } = renderWithProvider();
    expect(screen.getByRole('button')).toHaveTextContent('dark');
    unmount();

    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('SecurityError');
    });
    renderWithProvider();
    expect(screen.getByRole('button')).toHaveTextContent('dark');
  });
});
