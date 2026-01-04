import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  addons: ["@storybook/addon-links", "@storybook/addon-docs"],

  framework: {
    name: "@storybook/nextjs-vite",
    options: {}
  },

  staticDirs: ['../public'],

  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      providers: path.resolve(__dirname, '../src/providers'),
      libs: path.resolve(__dirname, '../src/libs'),
    };
    return config;
  }
};
