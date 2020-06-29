<template>
  <div class="text-sm opacity-80">
    <span>{{ content.publishedAt }}</span>
    <template v-if="timeToRead">
      <span class="time-to-read">
        <strong> {{ timeToRead }} min read</strong>
      </span>
    </template>
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

<style lang="scss"></style>
