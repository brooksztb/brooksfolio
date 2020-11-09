<template>
  <header
    class="fixed top-0 left-0 right-0 block w-full py-3 leading-8 shadow theme-transition z-1000 bg-secondary"
  >
    <a href="#content" id="skip-navigation" class="sr-only">Skip to Content</a>
    <div
      class="relative flex flex-wrap items-center mx-auto my-0 lg:justify-between w-90 max-w-1250"
    >
      <header-logo class="order-1"></header-logo>
      <transition name="slide">
        <nav
          v-show="menuVisible"
          class="relative flex flex-col items-start order-3 w-full py-4 lg:flex-row lg:items-center lg:h-auto lg:w-auto lg:order-2 lg:py-0"
        >
          <div
            class="flex flex-col items-start justify-start mb-0 ml-0 lg:flex-row lg:justify-center lg:items-center lg:relative"
          >
            <header-link :route="{ path: '/', exact: true }" :icon="['fas', 'home']">
              Home
            </header-link>
            <header-link :route="{ path: '/about', exact: true }" :icon="['fas', 'user']">
              About
            </header-link>
            <header-link :route="{ path: '/blog', exact: false }" :icon="['fas', 'newspaper']">
              Blog
            </header-link>
            <header-link :route="{ path: '/projects', exact: false }" :icon="['fas', 'code']">
              Projects
            </header-link>
            <header-link :route="{ path: '/contact', exact: true }" :icon="['fas', 'envelope']">
              Contact
            </header-link>
          </div>
        </nav>
      </transition>

      <div class="flex items-center order-2 h-full lg:order-3">
        <toggle-theme></toggle-theme>
        <button
          @click="clickMenu"
          class="flex items-center lg:hidden text-primary hover:text-secondary"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderLogo from '~/components/HeaderLogo'
import HeaderLink from '~/components/HeaderLink'
import ToggleTheme from '~/components/ToggleTheme'

const tailwindConfig = require('../../tailwind.config.js')

export default {
  name: 'TheHeader',
  data() {
    return {
      windowWidth: 0,
      menuOpen: false,
      lgBreakpoint: Number(tailwindConfig.theme.screens.lg.replace('px', ''))
    }
  },
  computed: {
    menuVisible() {
      return this.windowWidth > this.lgBreakpoint ? true : this.menuOpen
    }
  },
  methods: {
    updateWindowSize() {
      this.windowWidth = window.innerWidth
    },
    clickMenu() {
      this.menuOpen = !this.menuOpen
    }
  },
  mounted() {
    this.updateWindowSize()
    window.addEventListener('resize', this.updateWindowSize)
  },
  beforeDestroyed() {
    window.removeEventListener('resize', this.updateWindowSize)
  },
  components: {
    HeaderLogo,
    HeaderLink,
    ToggleTheme
  }
}
</script>

<style></style>
