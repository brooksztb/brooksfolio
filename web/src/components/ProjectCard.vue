<template>
  <div class="my-4 w-full lg:w-1/2 lg:max-w-500">
    <li
      class="flex flex-col justify-center md:min-h-px250 min-h-38 w-full mb-0 bg-secondary shadow-lg rounded-md transform hover:scale-105 transition-all duration-300"
    >
      <div class="w-full md:h-full overflow-hidden rounded-t-md">
        <g-image
          alt="Cover image"
          v-if="project.mainImage"
          class="object-cover object-top md:h-full min-h-full md:min-h-0 md:min-w-full md:w-auto"
          :src="
            $urlForImage(project.mainImage, $page.metadata.sanityOptions)
              .height(300)
              .width(600)
              .quality(75)
              .auto('format')
              .url()
          "
        />
      </div>
      <div class="flex flex-col justify-center p-4 rounded-b-md">
        <h3 class="font-display m-0 text-primary" v-html="project.title" />
        <block-content class="font-body max-w-px900 text-secondary" :blocks="project._rawExcerpt" />

        <categories v-if="project.categories" :content="project" />
        <arrow-link
          class="flex justify-start lg:justify-end"
          :path="project.path"
          arrowDirection="right"
        >
          Read More
        </arrow-link>
      </div>
    </li>
  </div>
</template>

<script>
import Categories from '~/components/Categories'
import BlockContent from '~/components/BlockContent'
import ArrowLink from '~/components/ArrowLink'

export default {
  components: {
    Categories,
    BlockContent,
    ArrowLink
  },
  props: {
    project: Object
  }
}
</script>

<style lang="scss" scoped></style>
