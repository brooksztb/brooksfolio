<template>
  <layout>
    <h1 class="font-display">LETS GET IN TOUCH</h1>
    <div>
      <div class="w-1/2">
        <!-- Social Media Links from the Contact Page query-->
      </div>
      <contact-form class="w-1/2"></contact-form>
    </div>
  </layout>
</template>

<page-query>
</page-query>

<script>
import ContactForm from '~/components/ContactForm'

export default {
  metaInfo: {
    title: 'Contact'
  },
  components: {
    ContactForm
  }
}
</script>

<style></style>
