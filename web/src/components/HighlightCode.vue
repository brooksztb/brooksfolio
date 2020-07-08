<template>
  <deckgo-highlight-code
    :theme="theme"
    :language="language"
    :highlight-lines="highlightedLines.join()"
    :line-numbers="showLineNumbers"
  >
    <code slot="code">{{ code }}</code>
  </deckgo-highlight-code>
</template>

<script>
export default {
  data() {
    return {
      theme: 'cobalt'
    }
  },
  computed: {
    showLineNumbers() {
      return this.highlightedLines.length > 0 ? true : false
    }
  },
  props: {
    language: String,
    code: String,
    highlightedLines: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
