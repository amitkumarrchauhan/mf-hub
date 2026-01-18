import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'hub_app',
      remotes: {
        account_app: 'http://localhost:5001/assets/remoteEntry.js',
        customer_app: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^19.2.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^19.2.0',
        },
      },
    }),
  ],
  server: {
    port: 5000,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: true,
    cssCodeSplit: true,
  },
});
