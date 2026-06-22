/**
 * Configuração separada do Vitest para os testes unitários.
 * O plugin @originjs/vite-plugin-federation é EXCLUÍDO aqui porque
 * ele processa arquivos de Module Federation apenas no build de produção
 * e trava o processo quando iniciado em ambiente jsdom/test.
 */
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', 'dist'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/components/**', 'src/services/**', 'src/hooks/**'],
      exclude: ['src/**/*.d.ts', 'src/test/**'],
    },
  },
})
