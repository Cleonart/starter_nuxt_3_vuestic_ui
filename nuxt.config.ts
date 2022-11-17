// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vuestic/nuxt", "underscore"],
  css: ["vuestic-ui/css"],
  vuestic: {
    config: {
      // Config here
    },
  },
  vite: {
    // @ts-expect-error: Missing ssr key
    ssr: {
      noExternal: ["moment", "chart.js"],
    },
  },
});
