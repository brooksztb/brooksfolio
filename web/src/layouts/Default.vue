<template>
  <div id="portfolio" class="font-display theme-transition">
    <header
      class="block theme-transition fixed top-0 w-full z-10 bg-secondary shadow leading-8 py-4"
    >
      <div
        class="relative flex flex-wrap items-center lg:justify-between w-90 max-w-1250 my-0 mx-auto"
      >
        <header-logo class="order-1"></header-logo>
        <nav
          class="flex-col lg:flex lg:flex-row items-start lg:items-center relative w-full lg:h-auto lg:w-auto lg:top-auto lg:left-auto order-3 lg:order-2 py-4 lg:py-0"
          :class="mobileNavOpen ? 'flex' : 'hidden'"
        >
          <ol class="block list-none lg:relative lg:top-auto lg:left-auto lg:float-right mb-0 ml-0">
            <li class="relative lg:inline-block mb-4 lg:mb-0 lg:mr-4">
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
            <li class="relative lg:inline-block mb-4 lg:mb-0 lg:mr-4">
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
            <li class="relative lg:inline-block mb-4 lg:mb-0 lg:mr-4">
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
            <li class="relative lg:inline-block mb-4 lg:mb-0 lg:mr-4">
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
            <li class="relative lg:inline-block mb-0 lg:mr-4">
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
        <div class="flex items-center lg:block h-full order-2 lg:order-3">
          <toggleTheme></toggleTheme>
          <button
            @click="mobileNavOpen = !mobileNavOpen"
            class="lg:hidden flex items-center text-primary hover:text-secondary"
          >
            <svg
              class="fill-current h-6 w-6"
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
      class="theme-transition font-body flex flex-1 items-center py-20 lg:pt-24 h-full min-h-screen bg-primary text-primary text-left"
    >
      <div class="relative w-90 max-w-1250 my-0 mx-auto">
        <slot></slot>
      </div>
    </main>
    <footer class="bg-primary shadow w-full leading-8 py-4">
      <div
        class="flex flex-col lg:flex-row items-center lg:justify-between w-90 max-w-1250 my-0 mx-auto"
      >
        <span class="lg:w-full text-primary--muted"
          >© Zachary Brooks {{ new Date().getFullYear() }}
        </span>
        <div class="flex flex-row items-center justify-evenly lg:justify-end w-full">
          <a
            class="no-highlight-anchor text-initial--muted hover:text-initial mx-2 my-2"
            title="Email"
            href="mailto:brooksztb@gmail.com"
          >
            <font-awesome :icon="['fa', 'envelope']" size="lg" />
          </a>
          <a
            href="https://github.com/brooksztb"
            target="_blank"
            title="Github Profile"
            class="no-highlight-anchor text-initial--muted hover:text-initial mx-2 my-2"
          >
            <font-awesome :icon="['fab', 'github']" size="lg" />
          </a>
          <a
            href="https://dev.to/zacann0n"
            target="_blank"
            title="Dev.to Profile"
            class="no-highlight-anchor text-initial--muted hover:text-initial mx-2 my-2"
          >
            <font-awesome :icon="['fab', 'dev']" size="lg" />
          </a>
          <a
            href="https://twitter.com/zacann0n"
            target="_blank"
            title="Twitter Profile"
            class="no-highlight-anchor text-initial--muted hover:text-initial mx-2 my-2"
          >
            <font-awesome :icon="['fab', 'twitter']" size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/zachary-brooks-3b8b5b84/"
            target="_blank"
            title="Linkedin Profile"
            class="no-highlight-anchor text-initial--muted hover:text-initial mx-2 lg:mr-0 my-2"
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
import ToggleTheme from '~/components/ToggleTheme'

export default {
  data() {
    return {
      mobileNavOpen: false
    }
  },
  components: {
    HeaderLogo,
    ToggleTheme
  }
}
</script>

<style lang="scss" scoped></style>
