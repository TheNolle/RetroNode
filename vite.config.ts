import { defineConfig } from 'vite'
import path from 'node:path'

import react from '@vitejs/plugin-react'
import tsconfig from 'vite-tsconfig-paths'
import electron from 'vite-plugin-electron/simple'

export default defineConfig({
  plugins: [
    react(),
    tsconfig(),
    electron({
      main: {
        entry: 'electron/main.ts',
      },
      preload: {
        input: path.resolve(__dirname, 'electron/preload.ts'),
      },
      renderer: process.env.NODE_ENV === 'development' ? undefined : {},
    }),
  ],
})
