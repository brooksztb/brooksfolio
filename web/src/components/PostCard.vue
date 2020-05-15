<template>
  <g-link class="no-highlight-anchor my-4 hover:opacity-100" :to="post.slug.current">
    <li
      class="flex md:flex-row flex-col justify-center md:min-h-px250 min-h-38 md:h-screen-1/3 mb-0 opacity-inherit"
    >
      <div class="w-full md:h-full h-screen-1/3 overflow-hidden bg-primary">
        <g-image
          alt="Cover image"
          v-if="post.mainImage"
          class="object-cover opacity-100 rounded-l md:h-full min-h-full md:min-h-0 md:min-w-full md:w-auto transition-opacity duration-300 ease-in-out hover:opacity-80"
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
        class="flex flex-col justify-center py-6 px-5 xl:p-12 border rounded-r border-primary md:min-w-70"
      >
        <h2
          class="font-display mb-2 text-primary md:translate-x-px10 translate-x-0 transition-transform duration-500 ease-out"
          v-html="post.title"
        />
        <block-content
          class="font-body max-w-px900 text-secondary md:translate-x-px10 translate-x-0 transition-transform duration-500 ease-out"
          :blocks="post._rawExcerpt"
        />

        <post-meta :post="post" />
        <post-tags :post="post" />
      </div>
    </li>
  </g-link>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    PostMeta,
    PostTags,
    BlockContent
  },
  props: {
    post: Object
  }
}
</script>

<style lang="scss"></style>
