<template>
  <g-link
    class="no-highlight-anchor flex items-center flex-grow w-auto text-initial text-base md:text-2xl"
    to="/"
    exact
  >
    <g-image class="h-12 w-auto mr-2" :src="theme" alt="zachary brooks logo" immediate="true" />
    <span class="font-bold hidden lg:flex">
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
