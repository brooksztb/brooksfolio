<template>
  <layout page="contact">
    <!-- Header Text -->
    <div v-if="$page.contact" class="flex flex-col items-start">
      <h1 class="uppercase font-display">Lets Get in <span class="text-initial">Contact</span></h1>
      <section class="flex flex-col w-full lg:flex-row">
        <div class="flex flex-col items-start justify-start w-full lg:w-1/2 lg:pr-2">
          <!-- Body Text -->
          <block-content :blocks="$page.contact._rawInformation"></block-content>
          <!-- Social Media Links from the Contact Page query-->
          <div class="flex flex-col items-start justify-start">
            <!-- Loop for each contact link from the query-->
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
      </section>
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
  metaInfo() {
    return {
      title: 'Contact',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$toPlainText(this.$page.contact._rawInformation)
        }
      ]
    }
  },
  components: {
    ContactForm,
    BlockContent,
    ContactLink
  }
}
</script>

<style></style>
