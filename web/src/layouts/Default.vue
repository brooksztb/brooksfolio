<template>
  <div id="portfolio" class="font-display theme-transition">
    <header
      id="header"
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
          <toggleTheme></toggleTheme>
          <button
            @click="clickMenu"
            class="flex items-center lg:hidden text-primary hover:text-secondary"
          >
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <main
      id="content"
      class="flex items-center flex-1 h-full min-h-screen pt-20 text-left theme-transition font-body pb-15 lg:pt-30 bg-primary text-primary"
    >
      <div class="relative h-full min-h-screen mx-auto my-0 w-90 max-w-1250">
        <slot></slot>
      </div>
    </main>
    <footer id="footer" class="w-full py-4 leading-8 shadow-lg bg-primary">
      <div
        class="flex flex-col items-center mx-auto my-0 lg:flex-row lg:justify-between w-90 max-w-1250"
      >
        <span class="flex flex-col items-center md:flex-row lg:w-full text-primary--muted"
          >© Zachary Brooks {{ new Date().getFullYear() }} - &nbsp;
          <a
            rel="noreferrer"
            title="Site Source Code"
            href="https://github.com/brooksztb/brooksfolio"
            target="_blank"
            >See the Source Code</a
          >
        </span>
        <div class="flex flex-row items-center w-full justify-evenly lg:justify-end">
          <a
            rel="noreferrer"
            class="mx-2 my-2 no-highlight-anchor text-initial--muted hover:text-initial"
            title="Email"
            href="mailto:brooksztb@gmail.com"
          >
            <font-awesome :icon="['fa', 'envelope']" size="lg" />
          </a>
          <a
            href="https://github.com/brooksztb"
            rel="noreferrer"
            target="_blank"
            title="Github Profile"
            class="mx-2 my-2 no-highlight-anchor text-initial--muted hover:text-initial"
          >
            <font-awesome :icon="['fab', 'github']" size="lg" />
          </a>
          <a
            href="https://dev.to/zacann0n"
            rel="noreferrer"
            target="_blank"
            title="Dev.to Profile"
            class="mx-2 my-2 no-highlight-anchor text-initial--muted hover:text-initial"
          >
            <font-awesome :icon="['fab', 'dev']" size="lg" />
          </a>
          <a
            href="https://twitter.com/zacann0n"
            rel="noreferrer"
            target="_blank"
            title="Twitter Profile"
            class="mx-2 my-2 no-highlight-anchor text-initial--muted hover:text-initial"
          >
            <font-awesome :icon="['fab', 'twitter']" size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/zachary-brooks-3b8b5b84/"
            rel="noreferrer"
            target="_blank"
            title="Linkedin Profile"
            class="mx-2 my-2 no-highlight-anchor text-initial--muted hover:text-initial lg:mr-0"
          >
            <font-awesome :icon="['fab', 'linkedin']" size="lg" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderLogo from '~/components/HeaderLogo'
import HeaderLink from '~/components/HeaderLink'
import ToggleTheme from '~/components/ToggleTheme'

const tailwindConfig = require('../../tailwind.config.js')

export default {
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
