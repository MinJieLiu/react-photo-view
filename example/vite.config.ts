import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import mdx from 'vite-plugin-mdx';
import pages from 'vite-plugin-react-pages';
import pkg from './package.json';

export default defineConfig({
  plugins: [
    mdx(),
    react(),
    pages({
      pagesDir: path.join(__dirname, 'pages'),
    }),
  ],
  optimizeDeps: {
    include: Object.keys(pkg.dependencies),
  },
});
