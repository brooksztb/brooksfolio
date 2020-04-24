<template>
  <div class="text-sm opacity-80">
    <span>Posted {{ post.publishedAt }}</span>
    <template v-if="post.timeToRead">
      <span class="post-ttr"
        ><strong>{{ post.timeToRead }} min read</strong></span
      >
    </template>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style lang="scss">
.post-ttr::before {
  content: ' \2014';
}
</style>
