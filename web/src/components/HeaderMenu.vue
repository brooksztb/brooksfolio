<template>
  <div class="text-sm flex-grow">
    <g-link
      class="no-highlight-anchor inline-flex items-center justify-center hover:bg-inverse hover:text-tertiary text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
      to="/"
      active-class="border border-primary"
      exact
    >
      <font-awesome class="mr-2" :icon="['fas', 'home']" size="lg" />
      <span class="block">Home</span>
    </g-link>
    <g-link
      class="no-highlight-anchor inline-flex items-center justify-center hover:bg-inverse hover:text-tertiary text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
      to="/about"
      active-class="border border-primary"
      exact
    >
      <font-awesome class="mr-2" :icon="['fas', 'user']" size="lg" />
      <span class="block">About</span>
    </g-link>
    <g-link
      class="no-highlight-anchor inline-flex items-center justify-center hover:bg-inverse hover:text-tertiary text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
      to="/blog"
      active-class="border border-primary"
    >
      <font-awesome class="mr-2" :icon="['fas', 'newspaper']" size="lg" />
      <span class="block">Blog</span>
    </g-link>
    <g-link
      class="no-highlight-anchor flex md:inline-flex items-center justify-center hover:bg-inverse hover:text-tertiary text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
      to="/projects"
      active-class="border border-primary"
      exact
    >
      <font-awesome class="mr-2" :icon="['fas', 'code']" size="lg" />
      <span class="block">Projects</span>
    </g-link>

    <g-link
      class="no-highlight-anchor inline-flex items-center justify-center hover:bg-inverse hover:text-tertiary text-primary font-bold my-1 py-2 lg:px-6 rounded w-full"
      to="/contact"
      active-class="border border-primary"
      exact
    >
      <font-awesome class="mr-2" :icon="['fa', 'envelope']" size="lg" />
      <span class="block">Contact</span>
    </g-link>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
