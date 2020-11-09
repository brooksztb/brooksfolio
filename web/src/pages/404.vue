<template>
  <Layout>
    <div class="flex justify-center w-full h-screen align-center">
      <h2>
        <g-link class="no-highlight-anchor" to="/">
          Sorry, couldn't find that page...
        </g-link>
      </h2>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Not Found'
    }
  }
}
</script>

<style></style>
