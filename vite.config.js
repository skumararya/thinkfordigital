// File: vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/ACL/',
  build: {
    outDir: 'build',
  },
  server: {
    port: 5550,
    proxy: {
      '/api': {
        target: 'https://drt.velocis.in/ACL_application/public',
        changeOrigin: true,
        secure: false, // Add this to disable SSL verification
        rewrite: (path) => path.replace(/^\/api/, '/api/v1')
      }
    }
  }
});