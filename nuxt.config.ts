export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'light',
  },
  css: ['@unocss/reset/tailwind.css'],
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  extends: 'nuxt-seo-kit',
  runtimeConfig: {
    lastfmKey: '',
    public: {
      siteUrl: 'https://arumxchan.vercel.app',
      siteName: 'Arumxchan\'s Portfolio',
      siteDescription:
        'Art portfolio of Arumxchan, a freelance illustrator based in Spain.',
      language: 'es-ES',
    },
  },
  devtools: { enabled: true },
})
