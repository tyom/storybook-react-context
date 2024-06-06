module.exports = {
  core: { builder: 'webpack5' },
  features: { postcss: false },
  stories: ['../**/*.stories.js'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-storysource'],
};
