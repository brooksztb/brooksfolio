<template>
  <div id="portfolio" class="font-display">
    <header
      class="block theme-transition fixed top-0 w-full z-10 bg-secondary shadow leading-8 py-4"
    >
      <div class="relative flex items-center lg:justify-between w-90 max-w-1250 my-0 mx-auto">
        <header-logo></header-logo>
        <nav
          class="md:block relative md:h-auto md:w-auto md:top-auto md:left-auto"
          :class="mobileNavOpen ? 'block' : 'hidden'"
        >
          <ol class="md:block list-none md:relative md:top-auto md:left-auto md:float-right mb-0">
            <li class="relative md:inline-block lg:mr-4 mb-0">
              <g-link
                class="flex items-center justify-center text-primary font-bold w-full"
                to="/"
                active-class="text-secondary"
                exact
              >
                <font-awesome class="mr-2" :icon="['fas', 'home']" size="lg" />
                <span class="block">Home</span>
              </g-link>
            </li>
            <li class="relative md:inline-block lg:mr-4 mb-0">
              <g-link
                class="flex items-center justify-center text-primary font-bold w-full"
                to="/about"
                active-class="text-secondary"
                exact
              >
                <font-awesome class="mr-2" :icon="['fas', 'user']" size="lg" />
                <span class="block">About</span>
              </g-link>
            </li>
            <li class="relative md:inline-block lg:mr-4 mb-0">
              <g-link
                class="flex items-center justify-center text-primary font-bold w-full"
                to="/blog"
                active-class="text-secondary"
                exact
              >
                <font-awesome class="mr-2" :icon="['fas', 'newspaper']" size="lg" />
                <span class="block">Blog</span>
              </g-link>
            </li>
            <li class="relative md:inline-block lg:mr-4 mb-0">
              <g-link
                class="flex items-center justify-center text-primary font-bold w-full"
                to="/projects"
                active-class="text-secondary"
                exact
              >
                <font-awesome class="mr-2" :icon="['fas', 'code']" size="lg" />
                <span class="block">Projects</span>
              </g-link>
            </li>
            <li class="relative md:inline-block lg:mr-4 mb-0">
              <g-link
                class="flex items-center justify-center text-primary font-bold w-full"
                to="/contact"
                active-class="text-secondary"
                exact
              >
                <font-awesome class="mr-2" :icon="['fas', 'envelope']" size="lg" />
                <span class="block">Contact</span>
              </g-link>
            </li>
          </ol>
        </nav>
        <div class="block h-full z-3">
          <toggleTheme></toggleTheme>
          <button
            @click="mobileNavOpen = !mobileNavOpen"
            class="lg:hidden flex items-center px-3 py-2 border rounded text-primary border-primary hover:text-tertiary hover:border-inverse"
          >
            <svg
              class="fill-current h-3 w-3"
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
    <div
      class="theme-transition font-body flex flex-1 items-center pl-3 pr-3 pt-px82 lg:pt-5 lg:pl-px320 xl:pl-px340 lg:pr-5 py-5 h-full min-h-screen mx-auto bg-primary text-primary"
    >
      <main>
        <slot></slot>
      </main>
    </div>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import HeaderLogo from '~/components/HeaderLogo'
import ToggleTheme from '~/components/ToggleTheme'
import HeaderMenu from '~/components/HeaderMenu'
import FooterMenu from '~/components/FooterMenu'

export default {
  data() {
    return {
      mobileNavOpen: false
    }
  },
  components: {
    HeaderLogo,
    ToggleTheme,
    FooterMenu
  }
}
</script>

<style lang="scss" scoped></style>
