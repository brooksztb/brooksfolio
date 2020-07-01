<template>
  <div class="my-2">
    <g-link
      class="mx-2 first:ml-0"
      v-for="category in content.categories"
      :key="category.id"
      :to="`/categories/${category.slug.current}`"
    >
      <font-awesome :icon="['fas', 'tag']" size="sm" />
      <span class="ml-1">{{ category.title }}</span>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  }
}
</script>

<style lang="scss"></style>
