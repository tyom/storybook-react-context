import { defineConfig, type PresetOptions, presetUno } from 'unocss';

export default defineConfig<PresetOptions>({
  presets: [presetUno()],
});
