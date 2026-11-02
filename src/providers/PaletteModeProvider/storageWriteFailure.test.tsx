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

// ストレージ不可の判定はモジュール内に残るため、書き込み失敗の経路は新しいモジュール状態で検証する
describe('PaletteModeProvider when saving to storage fails', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('still toggles the mode', () => {
    localStorage.clear();
    const setItem = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    render(
      <PaletteModeProvider>
        <Consumer />
      </PaletteModeProvider>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('light');

    act(() => button.click());
    expect(setItem).toHaveBeenCalledWith('paletteMode', 'dark');
    expect(button).toHaveTextContent('dark');

    act(() => button.click());
    expect(button).toHaveTextContent('light');
  });
});
