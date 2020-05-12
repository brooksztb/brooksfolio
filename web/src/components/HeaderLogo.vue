<template>
  <div class="flex items-center flex-grow w-auto text-base">
    <g-image class="h-8 w-auto mr-2" :src="theme" alt="zachary brooks logo" immediate="true" />
    <g-link class="no-highlight-anchor text-2xl" to="/" exact>
      Zachary Brooks
    </g-link>
  </div>
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
<style lang="scss"></style>
