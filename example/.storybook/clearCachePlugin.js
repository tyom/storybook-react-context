import fs from 'fs';

/**
 * Clears the Storybook cache as Storybook manager. This ensures that the addon is
 * reloaded on each build.
 */
export default function clearCachePlugin() {
  return {
    name: 'clear-cache-plugin',
    configResolved(config) {
      console.log('🧹 Clearing Storybook cache');
      const cacheDir = config.cacheDir || 'node_modules/.cache';
      if (fs.existsSync(cacheDir)) {
        fs.rmSync(cacheDir, { recursive: true });
      }
    },
  };
}
