<template>
  <div class="flex flex-wrap my-2">
    <g-link
      class="mr-2"
      v-for="category in content.categories"
      :key="category.id"
      :to="`/categories/${category.slug.current}`"
    >
      <font-awesome class="mr-1" :icon="['fas', 'tag']" size="1x" />
      {{ category.title }}
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
