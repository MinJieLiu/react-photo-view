import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import mdx from 'vite-plugin-mdx';
import pages from 'vite-plugin-react-pages';
import pkg from './package.json';

export default defineConfig({
  base: '/react-photo-view/',
  server: {
    fs: {
      allow: ['..'],
    },
  },
  optimizeDeps: {
    include: Object.keys(pkg.dependencies),
  },
  plugins: [
    mdx(),
    react(),
    pages({
      pagesDir: path.join(__dirname, 'pages'),
      useHashRouter: true,
    }),
  ],
});
