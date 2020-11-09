<template>
  <Layout page="blog">
    <article class="w-full mx-auto max-w-900 ">
      <!-- project Header -->
      <!-- <img
        alt="Cover image"
        v-if="$page.project.image"
        class="object-cover object-top w-full rounded-md max-h-400"
        :src="
          $urlForImage($page.project.image, $page.metadata.sanityOptions)
            .height(600)
            .auto('format')
            .url()
        "
      /> -->
      <h1 class="pt-4 text-center border-b font-display border-primary">
        {{ $page.project.title }}
      </h1>

      <div class="flex flex-col w-full font-body">
        <!-- project Topbar -->
        <div class="pb-4 text-sm">
          <meta-info
            :content="$page.project"
            :timeToRead="timeToRead($page.project._rawBody)"
            v-if="$page.project"
          />
          <categories :content="$page.project" v-if="$page.project" />
          <arrow-link path="/projects" arrowDirection="left">See all projects</arrow-link>
        </div>

        <!-- project Body -->
        <block-content :blocks="$page.project._rawBody" v-if="$page.project._rawBody" />
      </div>
      <div class="flex items-center justify-between w-full py-4 mx-auto max-w-900">
        <arrow-link :path="previousProjectPath" arrowDirection="left">Previous Project</arrow-link>

        <arrow-link :path="nextProjectPath" arrowDirection="right">Next Project</arrow-link>
      </div>
      <!-- Add comment widgets here
        <div class="project-comments">
        </div>
        -->
    </article>
  </Layout>
</template>

<script>
import BlockContent from '~/components/BlockContent'
import MetaInfo from '~/components/MetaInfo'
import Categories from '~/components/Categories'
import ArrowLink from '~/components/ArrowLink'
import readingTime from '../utils/timeToRead'

export default {
  components: {
    MetaInfo,
    Categories,
    BlockContent,
    ArrowLink
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.project.description
        }
      ]
    }
  },
  computed: {
    nextProjectPath() {
      const allProjects = this.$page.all.edges
      const firstProjectPath = allProjects[0].node.path
      const currentProject = allProjects.filter(
        node => node.node.title === this.$page.project.title
      )
      return this.isNull(currentProject[0].next) ? firstProjectPath : currentProject[0].next.path
    },
    previousProjectPath() {
      const allProjects = this.$page.all.edges
      const lastProjectPath = allProjects[allProjects.length - 1].node.path
      const currentProject = allProjects.filter(
        node => node.node.title === this.$page.project.title
      )
      return this.isNull(currentProject[0].previous)
        ? lastProjectPath
        : currentProject[0].previous.path
    }
  },
  methods: {
    isNull(item) {
      return item == null || item == undefined
    },
    timeToRead(content) {
      const plainText = this.$toPlainText(content)
      return readingTime(plainText)
    }
  }
}
</script>

<page-query>
query Project ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  project: sanityProject (id: $id) {
    title
    publishedAt (format: "MMMM D YYYY")
    categories {
      id
      title
      slug {
        current
      }
    }
    _rawExcerpt
    _rawBody
    mainImage {
      asset {
        _id
        url
      }
      caption
      alt
      hotspot {
        x
        y
        height
        width
      }
      crop {
        top
        bottom
        left
        right
      }
    }
    path
  }
  all: allSanityProject {
        edges {
            node {
                path
                title
            }
            next {
                path
            },
            previous {
              path
            },
        }
    }
}
</page-query>

<style></style>
