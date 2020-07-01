<template>
  <layout page="contact">
    <!-- Header Text -->
    <div v-if="$page.contact" class="flex flex-col items-start">
      <h1 class="font-display uppercase">{{ $page.contact.header }}</h1>
      <div class="flex flex-col lg:flex-row w-full">
        <div class="flex flex-col items-start justify-start w-full lg:w-1/2 lg:pr-2">
          <!-- Body Text -->
          <block-content :blocks="$page.contact._rawInformation"></block-content>
          <!-- Social Media Links from the Contact Page query-->
          <div class="flex flex-col items-start justify-start">
            <!-- TODO: Loop for each contact link from the query-->
            <contact-link
              class="ml-0"
              v-for="(link, index) in $page.contact.contactLinks"
              :key="index"
              :link="link.link"
              :icon="link.icon"
            ></contact-link>
          </div>
        </div>
        <div class="flex justify-end w-full pt-4 lg:pt-0 lg:w-1/2 lg:pl-2">
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
      link {
        title
        href
        urlText
        blank
      }
      icon {
        library
        name
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
