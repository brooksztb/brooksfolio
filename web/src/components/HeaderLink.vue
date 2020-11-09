<template>
  <g-link
    class="flex items-center justify-center h-full m-2 font-bold nav-link text-primary lg:my-0"
    :to="route.path"
    :exact="route.exact"
  >
    <font-awesome class="mr-2" :icon="icon" size="lg" />
    <span class="block">
      <slot></slot>
    </span>
  </g-link>
</template>

<script>
export default {
  props: {
    route: {
      type: Object,
      required: true
    },
    icon: Array
  }
}
</script>

<style></style>
