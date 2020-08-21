<template>
  <div class="text-sm opacity-80">
    <span>Posted {{ content.publishedAt }}</span>
    <span v-if="timeToRead" class="time-to-read">
      <strong> {{ timeToRead }} min read</strong>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    content: Object,
    timeToRead: Number
  }
}
</script>

<style></style>
