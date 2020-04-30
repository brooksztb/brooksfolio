<template>
  <div class="rounded my-2">
    <g-link
      class="border rounded border-primary p-1 no-highlight-anchor text-primary text-sm mr-2"
      v-for="tag in post.categories"
      :key="tag.id"
      :to="tag.path"
    >
      <span>#</span>
      {{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style lang="scss"></style>
