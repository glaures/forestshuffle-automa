<template>
  <ErrorCapture>
    <RouterView/>
  </ErrorCapture>
  <Footer v-if="$route.name === 'home'"/>
  <CookieConsent/>
  <Version/>
</template>

<script>
import {RouterView} from 'vue-router'
import ErrorCapture from "@/components/common/ErrorCapture.vue";
import CookieConsent from "@/components/common/CookieConsent.vue";
import Footer from "@/components/common/Footer.vue";
import Version from "@/components/common/Version.vue";

export default {
  head() {
    return {
      title: this.$t('meta.title'),
      meta: [
        {
          name: 'description',
          content: this.$t('meta.description'),
        },
        {
          name: 'keywords',
          content: this.$t('meta.keywords'),
        },
      ]
    }
  },
  components: {
    RouterView, ErrorCapture, CookieConsent, Footer, Version
  },
  data() {
    return {
      currentMode: import.meta.env.MODE,
    }
  },
  mounted() {
    console.log('running in mode ' + this.currentMode)
    console.log('base url is ' + import.meta.env.VITE_BASE_URL)
  }
}
</script>


<style>
</style>
