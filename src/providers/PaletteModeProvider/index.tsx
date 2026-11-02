'use client';

import { PaletteMode } from '@mui/material';
import { createContext, PropsWithChildren, useCallback, useSyncExternalStore } from 'react';

export const PaletteModeContext = createContext<PaletteMode>('light');
export const TogglePaletteModeContext = createContext<(() => void) | undefined>(undefined);

const STORAGE_KEY = 'paletteMode';

// storage イベントは同一タブ内の setItem では発火しないため、トグル時の再描画は自前で通知する
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener('storage', listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', listener);
  };
}

function getSnapshot(): PaletteMode {
  return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
}

function getServerSnapshot(): PaletteMode {
  return 'light';
}

export default function PaletteModeProvider({ children }: PropsWithChildren) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const togglePaletteMode = useCallback(() => {
    const nextMode = mode === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, nextMode);
    listeners.forEach((listener) => listener());
  }, [mode]);

  return (
    <PaletteModeContext.Provider value={mode}>
      <TogglePaletteModeContext.Provider value={togglePaletteMode}>{children}</TogglePaletteModeContext.Provider>
    </PaletteModeContext.Provider>
  );
}
