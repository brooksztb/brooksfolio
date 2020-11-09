<template>
  <g-link
    class="flex items-center flex-grow w-auto text-base no-highlight-anchor text-initial md:text-2xl"
    to="/"
    exact
  >
    <g-image class="w-auto h-12 mr-2" :src="theme" alt="zachary brooks logo" immediate="true" />
    <span class="hidden font-bold lg:flex">
      Zachary Brooks
    </span>
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import WindowInstanceMap from '../utils/windowInstanceMap.js'

export default {
  computed: {
    theme() {
      return this.setLogoUrl(WindowInstanceMap.theme)
    }
  },
  methods: {
    setLogoUrl(imageTheme) {
      return require(`~/assets/images/logo_${imageTheme}.svg`)
    }
  }
}
</script>
<style></style>
