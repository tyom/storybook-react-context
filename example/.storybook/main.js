import { mergeConfig } from 'vite';
import clearCachePlugin from './clearCachePlugin';

export default {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  addons: ['@storybook/addon-essentials'],
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [clearCachePlugin()],
      optimizeDeps: {
        include: ['storybook-react-context'],
      },
    });
  },
};
