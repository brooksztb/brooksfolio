<template>
  <Layout page="blog">
    <article class="w-full">
      <!-- Post Header -->
      <img
        alt="Cover image"
        v-if="$page.post.mainImage"
        class="object-cover w-full max-h-400 rounded-md"
        :src="
          $urlForImage($page.post.mainImage, $page.metadata.sanityOptions)
            .height(400)
            .auto('format')
            .url()
        "
      />
      <h1 class="font-display text-center pt-4">{{ $page.post.title }}</h1>

      <div class="w-full font-body">
        <!-- Post Topbar -->
        <div class="pb-4 text-sm">
          <post-meta
            :post="$page.post"
            :timeToRead="timeToRead($page.post._rawBody)"
            v-if="$page.post"
          />
          <tags :post="$page.post" v-if="$page.post" />
          <g-link to="/blog" exact>See more blog posts</g-link>
        </div>

        <!-- Post Body -->
        <block-content :blocks="$page.post._rawBody" v-if="$page.post._rawBody" />
      </div>
      <div class="flex items-center justify-between w-full py-4">
        <arrow-link :path="previousBlogPath" arrowDirection="left">Previous Post</arrow-link>

        <arrow-link :path="nextBlogPath" arrowDirection="right">Next Post</arrow-link>
      </div>
      <!-- Add comment widgets here
        <div class="post-comments">
        </div>
        -->
    </article>
  </Layout>
</template>

<script>
import BlockContent from '~/components/BlockContent'
import PostMeta from '~/components/PostMeta'
import Tags from '~/components/Tags'
import ArrowLink from '~/components/ArrowLink'
import readingTime from '../utils/timeToRead.js'

export default {
  components: {
    PostMeta,
    Tags,
    BlockContent,
    ArrowLink
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  },
  computed: {
    nextBlogPath() {
      const allPosts = this.$page.all.edges
      const firstBlogPath = allPosts[0].node.path
      const currentBlog = allPosts.filter(node => node.node.title === this.$page.post.title)
      return this.isNull(currentBlog[0].next) ? firstBlogPath : currentBlog[0].next.path
    },
    previousBlogPath() {
      const allPosts = this.$page.all.edges
      const lastBlogPath = allPosts[allPosts.length - 1].node.path
      const currentBlog = allPosts.filter(node => node.node.title === this.$page.post.title)
      return this.isNull(currentBlog[0].previous) ? lastBlogPath : currentBlog[0].previous.path
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
query Post ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  post: sanityPost (id: $id) {
    title
    publishedAt (format: "MMMM D YYYY")
    tags {
      id
      title
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
  all: allSanityPost {
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
