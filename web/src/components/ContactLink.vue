<template>
  <a
    class="flex items-center justify-center mx-2 my-2"
    :title="link.title"
    :href="link.href"
    :target="link.blank ? '_blank' : ''"
    :rel="link.blank ? 'noopener' : ''"
  >
    <font-awesome :icon="[icon.library, icon.name]" size="lg" />
    <span v-if="link.urlText" class="block text-md lg:text-2xl ml-4">
      {{ link.urlText }}
    </span>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true
    },
    icon: Array
  }
}
</script>

<style></style>
