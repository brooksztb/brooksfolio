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
  props: {
    language: String,
    code: String,
    highlightedLines: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      theme: 'cobalt'
    }
  },
  computed: {
    showLineNumbers() {
      return this.highlightedLines.length > 0 ? true : false
    }
  }
}
</script>

<style></style>
