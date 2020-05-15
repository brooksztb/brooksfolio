<template>
  <div class="rounded my-3">
    <g-link
      class="border rounded border-primary p-1 no-highlight-anchor text-primary hover:text-initial text-sm mr-2"
      v-for="tag in post.categories"
      :key="tag.id"
      :to="tag.path"
    >
      <span>#{{ tag.title }}</span>
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
