import ThemeProvider from 'providers/ThemeProvider';
import PaletteModeProvider from 'providers/PaletteModeProvider';

export const decorators = [
  (Story) => (
    <PaletteModeProvider>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </PaletteModeProvider>
  ),
];
