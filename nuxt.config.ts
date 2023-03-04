// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
css:[
  'assets/global.css'
],
vite:{
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "~/assets/_variables.css";'
      }
    }
  }
}
})
