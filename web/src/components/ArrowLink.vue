<template>
  <div class="arrow-link">
    <g-link :to="path">
      <font-awesome
        v-show="arrowDirection === 'left'"
        :class="arrowDirection"
        :icon="['fa', `arrow-${arrowDirection}`]"
        size="md"
      />
      <span>
        <slot></slot>
      </span>
      <font-awesome
        v-show="arrowDirection === 'right'"
        :class="arrowDirection"
        :icon="['fa', `arrow-${arrowDirection}`]"
        size="md"
      />
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    arrowDirection: {
      type: String,
      default: 'right'
    }
  }
}
</script>

<style></style>
