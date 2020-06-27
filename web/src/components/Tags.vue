<template>
  <div class="my-2">
    <g-link class="mx-2 first:ml-0" v-for="tag in block.tags" :key="tag.id" :to="tag.path">
      <font-awesome :icon="['fas', 'tag']" size="md" />
      <span class="ml-1">{{ tag.title }}</span>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    block: Object
  }
}
</script>

<style lang="scss"></style>
