import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: 'express admin panel',
    title: 'express admin panel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/global'
  ],

  plugins: [
    '~/plugins/services',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
  ],

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  axios: {
    proxy: true
  },

  env: {
    baseUrl: process.env.NUXT_ENV_BASE_URL || 'http://localhost:8097'
  },

  proxy: {
    '/api': 'http://localhost:8097/',
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
  }
}