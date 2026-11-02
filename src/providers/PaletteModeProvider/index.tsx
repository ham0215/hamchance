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

// ストレージが使えない環境（サイトデータのブロック・容量超過等）ではアクセスが例外になる。
// 表示状態の正をストレージに置いているため、一度失敗したら以降はメモリの値を正にしてトグルを効かせる
let storageUsable = true;
let memoryMode: PaletteMode = 'light';

function getSnapshot(): PaletteMode {
  if (!storageUsable) return memoryMode;
  try {
    return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    storageUsable = false;
    return memoryMode;
  }
}

function saveMode(mode: PaletteMode) {
  memoryMode = mode;
  if (!storageUsable) return;
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    storageUsable = false;
  }
}

function getServerSnapshot(): PaletteMode {
  return 'light';
}

export default function PaletteModeProvider({ children }: PropsWithChildren) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const togglePaletteMode = useCallback(() => {
    const nextMode = mode === 'dark' ? 'light' : 'dark';
    saveMode(nextMode);
    listeners.forEach((listener) => listener());
  }, [mode]);

  return (
    <PaletteModeContext.Provider value={mode}>
      <TogglePaletteModeContext.Provider value={togglePaletteMode}>{children}</TogglePaletteModeContext.Provider>
    </PaletteModeContext.Provider>
  );
}
