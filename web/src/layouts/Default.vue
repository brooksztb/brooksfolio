<template>
  <div id="portfolio" class="font-display theme-transition">
    <the-header></the-header>
    <main>
      <section
        id="content"
        class="flex items-center flex-1 h-full min-h-screen pt-20 text-left theme-transition font-body pb-15 lg:pt-30 bg-primary text-primary"
      >
        <div class="relative h-full min-h-screen mx-auto my-0 w-90 max-w-1250">
          <slot></slot>
        </div>
      </section>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
