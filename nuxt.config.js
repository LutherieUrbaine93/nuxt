export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
/*  router: {
    base: '/nuxt/'
  },*/

  // add the URL of lu93 API
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://lutherieurbaine93.github.io/nuxt/'
  },
  privateRuntimeConfig: {
  },

  // Avoid Trailing slash problems at the end of urls, by NOT generating html pages in folders
  generate: {
    subFolders: false
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lutherie Urbaine 9.3',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Site de l\'association Lutherie Urbaine 9.3'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lora%7cRoboto%7cOpen+Sans:400,800&display=swap",
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-final-modal.js',
    '~plugins/lightGallery.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/strapi',
    ['nuxt-mail', {
      message: {
        to: 'tasticed@gmail.com',
      },
      smtp: {
        host: "smtp.gmail.com",
        port: 465,
      },
    }],
    '@nuxtjs/markdownit'
  ],
  strapi: {
    url : 'https://lutherieurbaine93.herokuapp.com',
    entities: [
      'menus',
      { name: 'presentation',             type: 'single' },
      'collaborateurs',
      'associes',
      'partenaires',
      { name: 'pedagogie-de-la-creation', type: 'single' },
      { name: 'actualites',               type: 'single' },
      'actus',
      { name: 'creations-tous-terrains',  type: 'single' },
      'creations',
      { name: 'activites',                type: 'single' },
      'ateliers-stages',
      { name: 'instrumentarium',          type: 'single' },
      { name: 'ecouter-voir',             type: 'single' },
      'videos',
      { name: 'presse',                   type: 'single' },
      'parutions',
      'messages'
    ]
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    // use: ['markdown-it-div', 'markdown-it-attrs'],
    runtime: true // Support `$md()`
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: "https://lutherieurbaine93.com",
    transpile: ['vue-final-modal']
  },
}
