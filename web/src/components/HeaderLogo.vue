<template>
  <g-link to="/">
    <g-image
      class="flex md:inline-flex w-full h-10 sm:h-8 md:h-16 lg:h-logo p-0 sm:p-2 lg:pb-5"
      :src="theme"
      alt="zachary brooks logo"
      immediate="true"
    />
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
<style lang="scss"></style>
