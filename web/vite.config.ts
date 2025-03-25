import dns from 'dns'

import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

import redwood from '@redwoodjs/vite'

// So that Vite will load on localhost instead of `127.0.0.1`.
// See: https://vitejs.dev/config/server-options.html#server-host.
dns.setDefaultResultOrder('verbatim')

const viteConfig: UserConfig = {
  server: {
    proxy: {
      '/graphql': 'http://localhost:8911', // Added to connect to graphql
    },
  },
  plugins: [redwood()],
}

export default defineConfig(viteConfig)
