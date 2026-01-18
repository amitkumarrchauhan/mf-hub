import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig(({ mode }) => {
  // In development, remoteEntry.js is served at root
  // In production (after build), it's in assets folder
  const isDev = mode === 'development';
  const accountRemote = isDev 
    ? 'http://localhost:5001/remoteEntry.js'
    : 'http://localhost:5001/assets/remoteEntry.js';
  const customerRemote = isDev
    ? 'http://localhost:5002/remoteEntry.js'
    : 'http://localhost:5002/assets/remoteEntry.js';

  return {
    plugins: [
      react(),
      federation({
        name: 'hub_app',
        remotes: {
          account_app: {
            type: 'module',
            name: 'account_app',
            entry: accountRemote,
          },
          customer_app: {
            type: 'module',
            name: 'customer_app',
            entry: customerRemote,
          },
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
      origin: 'http://localhost:5000',
    },
    build: {
      target: 'esnext',
      minify: true,
      cssCodeSplit: true,
    },
  };
});
