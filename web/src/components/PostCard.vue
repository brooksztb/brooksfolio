<template>
  <div class="my-4">
    <div
      class="flex flex-col justify-center h-full mb-0 transition-all duration-300 transform rounded-md shadow-lg md:flex-row md:h-screen-1/3 md:max-h-300 bg-secondary hover:scale-105"
    >
      <div
        class="w-full overflow-hidden md:h-full h-screen-1/4 rounded-t-md md:rounded-l-md md:rounded-tr-none"
      >
        <g-image
          alt="Cover image"
          v-if="post.mainImage"
          class="object-cover object-top w-full md:h-full"
          :immediate="true"
          :src="
            $urlForImage(post.mainImage, $page.metadata.sanityOptions)
              .height(300)
              .width(300)
              .quality(75)
              .auto('format')
              .url()
          "
        />
      </div>
      <div
        class="flex flex-col justify-center p-4 rounded-b-md md:rounded-r-md md:rounded-bl-none md:min-w-70"
      >
        <h3 class="m-0 font-display text-primary" v-html="post.title" />
        <block-content class="font-body max-w-px900 text-secondary" :blocks="post._rawExcerpt" />

        <meta-info v-if="post" :content="post" :timeToRead="timeToRead(post._rawBody)" />
        <div class="flex flex-col md:flex-row md:justify-between">
          <categories v-if="post.categories" :content="post" />
          <arrow-link
            class="flex items-center justify-end"
            :path="post.path"
            arrowDirection="right"
          >
            Read this Blog Post
          </arrow-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MetaInfo from '~/components/MetaInfo'
import Categories from '~/components/Categories'
import BlockContent from '~/components/BlockContent'
import ArrowLink from '~/components/ArrowLink'
import readingTime from '../utils/timeToRead.js'

export default {
  components: {
    MetaInfo,
    Categories,
    BlockContent,
    ArrowLink
  },
  props: {
    post: Object
  },
  methods: {
    timeToRead(content) {
      const plainText = this.$toPlainText(content)
      return readingTime(plainText)
    }
  }
}
</script>

<style></style>
