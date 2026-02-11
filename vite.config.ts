import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: 'client/public',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
    },
  },
});