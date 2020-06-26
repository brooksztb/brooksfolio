<template>
  <!-- <div class="post-card">
    <div class="meta">
      <div class="photo" :style="`--bg-img:url(${postImageUrl})`"></div>
      <ul class="details">
      </ul>
    </div>
    <div class="description">
      <h1 class="font-display" v-html="post.title" />
      <block-content class="font-body" :blocks="post._rawExcerpt" />
      <arrow-link :path="post.path" arrowDirection="right">Read More</arrow-link>
    </div>
  </div> -->

  <div class="my-4 hover:opacity-100">
    <li
      class="flex md:flex-row flex-col justify-center md:min-h-px250 min-h-38 md:h-screen-1/3 mb-0 opacity-inherit"
    >
      <div class="w-full md:h-full h-screen-1/3 overflow-hidden bg-primary">
        <g-image
          alt="Cover image"
          v-if="post.mainImage"
          class="object-cover opacity-100 rounded-t-md lg:rounded-l-md lg:rounded-tr-none md:h-full min-h-full md:min-h-0 md:min-w-full md:w-auto"
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
        class="flex flex-col justify-center p-4 border rounded-b-md lg:rounded-r-md lg:rounded-bl-none border-primary md:min-w-70"
      >
        <h3 class="font-display m-0 text-primary md:translate-x-px10" v-html="post.title" />
        <block-content
          class="font-body max-w-px900 text-secondary md:translate-x-px10"
          :blocks="post._rawExcerpt"
        />

        <post-meta :post="post" />
        <post-tags :post="post" />
        <arrow-link
          class="flex justify-start lg:justify-end"
          :path="post.path"
          arrowDirection="right"
        >
          Read More
        </arrow-link>
      </div>
    </li>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import BlockContent from '~/components/BlockContent'
import ArrowLink from '~/components/ArrowLink'

export default {
  components: {
    PostMeta,
    PostTags,
    BlockContent,
    ArrowLink
  },
  props: {
    post: Object
  },
  computed: {
    postImageUrl() {
      return this.$urlForImage(this.post.mainImage, this.$page.metadata.sanityOptions)
        .height(300)
        .width(300)
        .quality(75)
        .auto('format')
        .url()
    }
  }
}
</script>

<style lang="scss"></style>
