// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      fakeStoreApiUrl: "https://fakestoreapi.com/",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
