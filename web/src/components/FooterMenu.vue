<template>
  <footer class="footer flex flex-col lg:hidden items-center">
    <div class="flex flex-row items-center justify-evenly pt-6 pb-3 px-12 w-full">
      <a
        class="header-footer-anchor text-primary mx-2 my-2"
        title="Email"
        href="mailto:brooksztb@gmail.com"
      >
        <font-awesome :icon="['fa', 'envelope']" size="lg" />
      </a>
      <a
        href="https://github.com/brooksztb"
        target="_blank"
        title="Github Profile"
        class="header-footer-anchor text-primary mx-2 my-2"
      >
        <font-awesome :icon="['fab', 'github']" size="lg" />
      </a>
      <a
        href="https://dev.to/zacann0n"
        target="_blank"
        title="Dev.to Profile"
        class="header-footer-anchor text-primary mx-2 my-2"
      >
        <font-awesome :icon="['fab', 'dev']" size="lg" />
      </a>
      <a
        href="https://twitter.com/zacann0n"
        target="_blank"
        title="Twitter Profile"
        class="header-footer-anchor text-primary mx-2 my-2"
      >
        <font-awesome :icon="['fab', 'twitter']" size="lg" />
      </a>
      <a
        href="https://www.linkedin.com/in/zachary-brooks-3b8b5b84/"
        target="_blank"
        title="Linkedin Profile"
        class="header-footer-anchor text-primary mx-2 my-2"
      >
        <font-awesome :icon="['fab', 'linkedin']" size="lg" />
      </a>
    </div>
    <span class="text-primary pb-3">© Zachary Brooks {{ new Date().getFullYear() }} </span>
  </footer>
</template>

<script>
export default {
  name: 'FooterMenu'
}
</script>

<style lang="scss" scoped>
.footer {
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
  border-top: 1px solid var(--color-border-secondary);
}
</style>
