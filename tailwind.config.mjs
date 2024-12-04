/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', ...fontFamily.sans],
                heading: ['Domine', ...fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
