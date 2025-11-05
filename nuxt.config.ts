// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineNuxtConfig({
  // vite: {
  //   plugins: [tsconfigPaths()],
  // },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ]
})