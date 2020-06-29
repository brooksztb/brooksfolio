<template>
  <Layout page="blog">
    <article class="w-full">
      <!-- project Header -->
      <img
        alt="Cover image"
        v-if="$page.project.image"
        class="object-cover object-top w-full max-h-400 rounded-md"
        :src="
          $urlForImage($page.project.image, $page.metadata.sanityOptions)
            .height(600)
            .auto('format')
            .url()
        "
      />
      <h1 class="font-display text-center pt-4">{{ $page.project.title }}</h1>

      <div class="w-full font-body">
        <!-- project Topbar -->
        <div class="pb-4 text-sm">
          <meta
            :content="$page.project"
            :timeToRead="timeToRead($page.project._rawBody)"
            v-if="$page.project"
          />
          <categories :content="$page.project" v-if="$page.project" />
          <g-link to="/projects" exact>See more projects</g-link>
        </div>

        <!-- project Body -->
        <block-content :blocks="$page.project._rawBody" v-if="$page.project._rawBody" />
      </div>
      <div class="flex items-center justify-between w-full py-4">
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
import Meta from '~/components/Meta'
import Categories from '~/components/Categories'
import ArrowLink from '~/components/ArrowLink'
import readingTime from '../utils/timeToRead.js'

export default {
  components: {
    Meta,
    Categories,
    BlockContent,
    ArrowLink
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
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
      return readingTime(content)
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
    }
    _rawExcerpt
    _rawBody
    image {
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

<style lang="scss" scoped>
.header::before {
  top: -6rem;

  height: calc(100% + 9rem);
  // background-image: repeating-linear-gradient(
  //     310deg,
  //     var(--color-bg-primary),
  //     var(--color-bg-primary) 20px,
  //     var(--color-bg-secondary) 20px,
  //     var(--color-bg-secondary) 40px
  //   ),
  //   repeating-linear-gradient(
  //     50deg,
  //     var(--color-primary),
  //     var(--color-primary) 20px,
  //     var(--color-secondary) 20px,
  //     var(--color-secondary) 40px
  //   );

  background-image: radial-gradient(var(--color-primary--muted) 0.075rem, transparent 0),
    radial-gradient(var(--color-primary--muted) 0.075rem, transparent 0);

  background-size: 0.75rem 0.75rem;

  background-position: 0 0, 0.375rem 0.375rem;

  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

  content: '';

  height: 100%;

  left: 50%;

  position: absolute;

  top: 0;

  -webkit-transform: translateX(-50%);

  transform: translateX(-50%);

  width: 100vw;

  z-index: -1;
}
</style>
