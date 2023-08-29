export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
  },
  css: ['@unocss/reset/tailwind.css'],
  extends: ['nuxt-seo-kit', 'nuxt-lego'],
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
