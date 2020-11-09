<template>
  <footer class="w-full py-4 leading-8 shadow-lg bg-primary">
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
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style></style>
