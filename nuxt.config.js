import colors from 'vuetify/es5/util/colors';

export default {
  env: {
    youtubeApiKey: 'AIzaSyCJzhgB_VxXlarxrUXzkaXr0xO-Dmvc0zI',
    ticketmasterApiKey: 'q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG',
    youtubeApiUrl: 'https://content.googleapis.com/youtube/v3',
    ticketmasterApiUrl: 'https://app.ticketmaster.com/discovery/v2',
    lastFmApiKey: '742619cd713c014891cce933b807a639',
    lastFmSharedSecret: '9b6ead8c9575f1c29f519927f68cd889',
    lastFmApiUrl: 'http://ws.audioscrobbler.com/2.0'
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Play:700&display=swap&subset=latin-ext'
      }
    ],
    script: [
      {
        src: 'https://apis.google.com/js/api.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    {
      lang: 'scss',
      src: '~assets/global.scss'
    }
  ],
  styleResources: {
    // your settings here
    scss: ['./assets/style/*.scss']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/getFormattedDate.js', '~/plugins/vueMq.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      font: true,
      icons: 'mdi',
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
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
