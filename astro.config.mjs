// @ts-check
import { defineConfig, envField } from 'astro/config'

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
    env: {
        schema: {
            SECRET_POSTHOG_KEY: envField.string({ context: 'client', access: 'public' }),
            SECRET_POSTHOG_HOST: envField.string({ context: 'client', access: 'public' }),
            ENV: envField.string({ context: 'client', access: 'public', default: 'production' }),
        },
    },
})
