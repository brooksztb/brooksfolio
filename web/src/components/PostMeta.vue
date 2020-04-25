<template>
  <div class="text-sm opacity-80">
    <span>Posted {{ post.publishedAt }}</span>
    <template v-if="timeToRead">
      <span class="post-ttr">
        <strong> {{ timeToRead }} min read</strong>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
    timeToRead: Number
  }
}
</script>

<style lang="scss">
.post-ttr::before {
  content: ' \2014 ';
}
</style>
