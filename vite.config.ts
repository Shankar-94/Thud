/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts({ include: ['src'], exclude: ['src/**/*.test.tsx', 'src/**/*.stories.tsx', 'src/test'] })],
  css: {
    modules: { generateScopedName: 'neo_[name]__[local]' },
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assetFileNames: (asset: any) =>
          (asset.name ?? asset.names?.[0] ?? '').endsWith('.css') ? 'styles.css' : 'assets/[name][extname]',
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
});
