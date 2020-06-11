<template>
  <g-link
    class="nav-link flex items-center justify-center text-primary font-bold w-full h-full m-2 lg:my-0"
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
