export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: '%s · Librería El Tintero',
      title: 'Inicio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Librería en línea: novela, fantasía, ciencia ficción, misterio y más' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&display=swap' },
        { rel: 'preconnect', href: 'https://app.snipcart.com' },
        { rel: 'preconnect', href: 'https://cdn.snipcart.com' },
        { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.css' }
      ]
    }
  }
})
