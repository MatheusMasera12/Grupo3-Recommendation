import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'recommendation_mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './RecommendationView': './src/pages/RecommendationView',
      },
      // singleton is a valid runtime option; cast bypasses incomplete type definitions
      shared: {
        react: { singleton: true, requiredVersion: '^19.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
        'react-router-dom': { singleton: true, requiredVersion: '^6.0.0' },
        '@mui/material': { singleton: true, requiredVersion: '^6.0.0' },
        '@emotion/react': { singleton: true, requiredVersion: '^11.0.0' },
        '@emotion/styled': { singleton: true, requiredVersion: '^11.0.0' },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5173,
    cors: true,
  },
  preview: {
    port: 5173,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
