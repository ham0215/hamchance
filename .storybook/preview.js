import ThemeProvider from 'providers/ThemeProvider';
import PaletteModeProvider from 'providers/PaletteModeProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <PaletteModeProvider>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </PaletteModeProvider>
  ),
];
export const tags = ['autodocs'];
