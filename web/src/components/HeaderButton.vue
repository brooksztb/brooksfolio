<template>
  <g-link
    class="flex items-center justify-center text-primary font-bold w-full"
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
