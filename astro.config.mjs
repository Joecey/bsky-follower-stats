// @ts-check
import { defineConfig } from 'astro/config'

import node from '@astrojs/node'

import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
    adapter: node({
        mode: 'standalone',
    }),

    server: {
        host: '0.0.0.0',
    },

    integrations: [tailwind(), react()],
})
