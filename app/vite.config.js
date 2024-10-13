

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure this matches your build directory
  },
  server: {
    port: 3000,      // Local development server port
  },
  base: '/',        // Base path for your app
});
