import ThemeProvider from 'providers/ThemeProvider';
import PaletteModeProvider from 'providers/PaletteModeProvider';
import * as nextImage from 'next/image';

import { withThemes } from "@react-theming/storybook-addon"

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

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
