import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://beautyspecialists.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
