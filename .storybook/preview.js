import { ThemeRegistry } from 'providers/ThemeProvider';
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
      <ThemeRegistry options={{ key: 'mui' }}>
        <Story />
      </ThemeRegistry>
    </PaletteModeProvider>
  ),
];
export const tags = ['autodocs'];
