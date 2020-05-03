<template>
  <g-link class="no-highlight-anchor my-4 hover:opacity-100" :to="project.slug.current">
    <li class="flex flex-col justify-center min-h-38 md:h-screen-1/3 mb-0 opacity-inherit">
      <div class="w-full md:h-full h-screen-1/3 overflow-hidden bg-white">
        <g-image
          alt="Cover image"
          v-if="project.image"
          class="object-cover opacity-100 md:h-full min-h-full md:min-h-0 md:min-w-full md:w-auto transition-opacity duration-300 ease-in-out hover:opacity-80"
          :src="
            $urlForImage(project.image, $page.metadata.sanityOptions)
              .height(300)
              .width(300)
              .quality(75)
              .auto('format')
              .url()
          "
        />
      </div>
      <div
        class="flex flex-col justify-center py-6 px-5 xl:p-12 border border-solid border-gray-300 md:min-w-70"
      >
        <h2
          class="font-display mb-2 md:translate-x-px10 translate-x-0 transition-transform duration-500 ease-out"
          v-html="project.title"
        />
        <block-content
          class="font-body max-w-px900 text-gray-700 md:translate-x-px10 translate-x-0 transition-transform duration-500 ease-out"
          :blocks="project._rawExcerpt"
        />

        <project-meta :project="project" />
        <project-tags :project="project" />
      </div>
    </li>
  </g-link>
</template>

<script>
import ProjectMeta from '~/components/ProjectMeta'
import ProjectTags from '~/components/ProjectTags'
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    ProjectMeta,
    ProjectTags,
    BlockContent
  },
  props: {
    project: Object
  }
}
</script>

<style lang="scss" scoped></style>
