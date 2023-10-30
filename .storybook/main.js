const path = require("path");

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules.push(path.resolve(__dirname, '../src'));

    return config;
  },

  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {}
  },

  staticDirs: ['../public'],

  docs: {
    autodocs: true
  }
}
