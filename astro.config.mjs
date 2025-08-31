import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      https: {
        key: './cert/localhost-key.pem',
        cert: './cert/localhost.pem',
      },
    },
  },
  server: {
    port: 3000,
  },
});
