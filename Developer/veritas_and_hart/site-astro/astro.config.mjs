import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://veritasandhart.com',
  integrations: [svelte()],
  output: 'static',
});
