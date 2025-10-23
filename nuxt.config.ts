// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/tailwind.css'
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#337566',
              dark: '#2B6055'
            },
            content: '#0F0F0F'
          }
        }
      }
    }
  }
})
