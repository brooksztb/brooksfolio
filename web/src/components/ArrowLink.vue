<template>
  <div class="flex arrow-link" :class="arrowDirection">
    <g-link :to="path">
      <font-awesome
        v-show="arrowDirection === 'left'"
        :class="arrowDirection"
        :icon="['fa', `arrow-${arrowDirection}`]"
        size="1x"
      />
      <span>
        <slot></slot>
      </span>
      <font-awesome
        v-show="arrowDirection === 'right'"
        :class="arrowDirection"
        :icon="['fa', `arrow-${arrowDirection}`]"
        size="1x"
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
