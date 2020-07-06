<template>
  <div class="my-4">
    <li
      class="flex md:flex-row flex-col justify-center md:min-h-px250 min-h-38 md:h-screen-1/4 mb-0 bg-secondary shadow-lg rounded-md transform hover:scale-105 transition-all duration-300"
    >
      <div
        class="w-full md:h-full h-screen-1/3 overflow-hidden rounded-t-md lg:rounded-l-md lg:rounded-tr-none"
      >
        <g-image
          alt="Cover image"
          v-if="post.mainImage"
          class="object-cover md:h-full min-h-full md:min-h-0 md:min-w-full md:w-auto"
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
        class="flex flex-col justify-center p-4 rounded-b-md lg:rounded-r-md lg:rounded-bl-none md:min-w-70"
      >
        <h3 class="font-display m-0 text-primary" v-html="post.title" />
        <block-content class="font-body max-w-px900 text-secondary" :blocks="post._rawExcerpt" />

        <meta-info v-if="post" :content="post" :timeToRead="timeToRead(post._rawBody)" />
        <categories v-if="post.categories" :content="post" />
        <arrow-link class="flex justify-end" :path="post.path" arrowDirection="right">
          Read More
        </arrow-link>
      </div>
    </li>
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
      return readingTime(content)
    }
  }
}
</script>

<style lang="scss"></style>
