<template>
  <div id="portfolio" class="font-display">
    <header
      class="theme-transition fixed w-full z-10 sm:flex md:hidden items-center justify-between flex-wrap nav-bar p-3"
    >
      <div class="flex items-center justify-between flex-shrink-0 text-primary">
        <header-logo></header-logo>
        <div class="block">
          <button
            @click="mobileNavOpen = !mobileNavOpen"
            class="flex items-center px-3 py-2 border rounded text-primary border-primary hover:text-inverse hover:border-primary"
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

      <transition>
        <div v-show="mobileNavOpen" class="w-full block flex-grow pt-3">
          <div class="text-sm flex-grow">
            <g-link
              class="inline-flex items-center justify-center hover:bg-inverse hover:text-inverse text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
              to="/"
              active-class="border border-primary"
            >
              <font-awesome class="mr-2" :icon="['fas', 'home']" size="lg" />
              <span class="block">Home</span>
            </g-link>
            <g-link
              class="inline-flex items-center justify-center hover:bg-inverse hover:text-inverse text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
              to="/about"
              active-class="border border-primary"
            >
              <font-awesome class="mr-2" :icon="['fas', 'user']" size="lg" />
              <span class="block">About</span>
            </g-link>
            <g-link
              class="inline-flex items-center justify-center hover:bg-inverse hover:text-inverse text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
              to="/blog"
              active-class="border border-primary"
            >
              <font-awesome class="mr-2" :icon="['fas', 'newspaper']" size="lg" />
              <span class="block">Blog</span>
            </g-link>
            <g-link
              class="flex md:inline-flex items-center justify-center hover:bg-inverse hover:text-inverse text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
              to="/projects"
              active-class="border border-primary"
            >
              <font-awesome class="mr-2" :icon="['fas', 'code']" size="lg" />
              <span class="block">Projects</span>
            </g-link>
            <toggleTheme></toggleTheme>
            <!-- <g-link
							class="inline-flex items-center justify-center hover:bg-inverse hover:text-inverse text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
							to="/work"
							active-class="border border-primary"
						>
							<font-awesome
								class="mr-2"
								:icon="['fas', 'project-diagram']"
								size="lg"
							/>
							<span class="block">Contact</span>
						</g-link> -->
          </div>
        </div>
      </transition>
    </header>
    <header
      class="theme-transition fixed top-0 xs:hidden md:flex flex-col items-center justify-between h-screen nav-bar md:w-15 lg:w-px300 xl:w-px320"
    >
      <div
        class="flex flex-col items-center justify-start mx-auto w-full pt-0 md:pt-9 px-0 lg:px-8 md:h-full"
      >
        <header-logo></header-logo>
        <g-link
          class="flex md:inline-flex items-center justify-center hover:bg-inverse hover:text-inverse text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
          to="/"
          active-class="border border-primary"
        >
          <font-awesome class="lg:mr-2" :icon="['fas', 'home']" size="lg" />
          <span class="hidden lg:block">Home</span>
        </g-link>
        <g-link
          class="flex md:inline-flex items-center justify-center hover:bg-inverse hover:text-inverse text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
          to="/about"
          active-class="border border-primary"
        >
          <font-awesome class="lg:mr-2" :icon="['fas', 'user']" size="lg" />
          <span class="hidden lg:block">About</span>
        </g-link>
        <g-link
          class="flex md:inline-flex items-center justify-center hover:bg-inverse hover:text-inverse text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
          to="/blog"
          active-class="border border-primary"
        >
          <font-awesome class="lg:mr-2" :icon="['fas', 'newspaper']" size="lg" />
          <span class="hidden lg:block">Blog</span>
        </g-link>
        <g-link
          class="flex md:inline-flex items-center justify-center hover:bg-inverse hover:text-inverse text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
          to="/skills"
          active-class="border border-primary"
        >
          <font-awesome class="lg:mr-2" :icon="['fas', 'code']" size="lg" />
          <span class="hidden lg:block">Projects</span>
        </g-link>
        <!-- <g-link
					class="flex md:inline-flex items-center justify-center hover:bg-inverse hover:text-inverse text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
					to="/work"
					active-class="border border-primary"
				>
					<font-awesome
						class="lg:mr-2"
						:icon="['fas', 'project-diagram']"
						size="lg"
					/>
					<span class="hidden lg:block">Contact</span>
				</g-link> -->
        <toggleTheme></toggleTheme>
      </div>
      <div
        class="flex flex-col items-center lg:flex-row justify-around md:mx-auto py-8 lg:py-10 px-4 lg:px-8 w-full"
      >
        <a
          href="https://github.com/brooksztb"
          target="_blank"
          title="Github Profile"
          class="text-primary mx-2 my-2 lg:my-0"
        >
          <font-awesome :icon="['fab', 'github']" size="lg" />
        </a>
        <a
          href="https://dev.to/zacann0n"
          target="_blank"
          title="Dev.to Profile"
          class="text-primary mx-2 my-2 lg:my-0"
        >
          <font-awesome :icon="['fab', 'dev']" size="lg" />
        </a>
        <a
          href="https://twitter.com/zacann0n"
          target="_blank"
          title="Twitter Profile"
          class="text-primary mx-2 my-2 lg:my-0"
        >
          <font-awesome :icon="['fab', 'twitter']" size="lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/zachary-brooks-3b8b5b84/"
          target="_blank"
          title="Linkedin Profile"
          class="text-primary mx-2 my-2 lg:my-0"
        >
          <font-awesome :icon="['fab', 'linkedin']" size="lg" />
        </a>
      </div>
      <span class="text-primary">Copyright © {{ new Date().getFullYear() }}.</span>
    </header>
    <div
      class="theme-transition flex flex-1 items-center pl-3 pr-3 pt-px64 md:pt-5 lg:pl-px320 xl:pl-px340 lg:pr-5 py-5 h-full min-h-screen mx-auto bg-secondary text-primary"
    >
      <slot></slot>
    </div>
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

<style lang="scss" scoped>
.nav-bar {
  background: -webkit-linear-gradient(
    121deg,
    var(--color-bg-primary) 50%,
    var(--color-bg-ternary) 50%
  );
  background: -o-linear-gradient(121deg, var(--color-bg-primary) 50%, var(--color-bg-ternary) 50%);
  background: -moz-linear-gradient(
    121deg,
    var(--color-bg-primary) 50%,
    var(--color-bg-ternary) 50%
  );
  background: linear-gradient(121deg, var(--color-bg-primary) 50%, var(--color-bg-ternary) 50%);
}
</style>
