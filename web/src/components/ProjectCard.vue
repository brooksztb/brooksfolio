<template>
  <div class="w-full my-4 md:w-1/2 lg:w-full lg:max-w-500">
    <li
      class="flex flex-col justify-center w-full mb-0 transition-all duration-300 transform rounded-md shadow-lg md:min-h-px250 min-h-38 bg-secondary hover:scale-105"
    >
      <div class="w-full overflow-hidden rounded-t-md">
        <g-image
          alt="Cover image"
          v-if="project.mainImage"
          class="object-cover object-top"
          immediate="true"
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
        <h3 class="m-0 font-display text-primary" v-html="project.title" />
        <block-content class="font-body max-w-px900 text-secondary" :blocks="project._rawExcerpt" />

        <categories v-if="project.categories" :content="project" />
        <arrow-link class="flex justify-end" :path="project.path" arrowDirection="right">
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

<style></style>
