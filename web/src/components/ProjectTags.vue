<template>
  <div class="rounded-md my-2">
    <div
      class="border rounded-md border-primary p-1 no-highlight-anchor text-initial text-sm mr-2"
      v-for="(tag, index) in project.tags"
      :key="index"
    >
      <span>#{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>

<style lang="scss"></style>
