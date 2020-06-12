<template>
  <layout>
    <!-- Header Text -->
    <div class="flex flex-col items-start">
      <h1 class="font-display uppercase">{{ $page.contact.header }}</h1>
      <div class="flex flex-row w-full">
        <div class="flex flex-col items-start justify-start w-full lg:w-1/2">
          <!-- Body Text -->
          <block-content :blocks="$page.contact._rawInformation"></block-content>
          <!-- Social Media Links from the Contact Page query-->
          <div class="flex">
            <!-- TODO: Loop for each contact link from the query-->
            <contact-link
              v-for="(index, link) in $page.contact.contactLinks.links"
              :key="index"
              :link="link"
              :icon="icon"
            ></contact-link>
          </div>
        </div>
        <div class="flex justify-end w-full lg:w-1/2">
          <contact-form class="w-full"></contact-form>
        </div>
      </div>
    </div>
  </layout>
</template>

<page-query>
{
    metadata {
    sanityOptions {
      projectId
      dataset
    }
  },
  contact: sanityContactPage(id: "contactPage") {
    header,
    _rawInformation,
    contactLinks {
      links {
        icon
        link
      }
    }
  }
}
</page-query>

<script>
import ContactForm from '~/components/ContactForm'
import BlockContent from '~/components/BlockContent'
import ContactLink from '~/components/ContactLink'

export default {
  metaInfo: {
    title: 'Contact'
  },
  components: {
    ContactForm,
    BlockContent,
    ContactLink
  }
}
</script>

<style></style>
