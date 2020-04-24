<template>
  <Layout page="blog">
    <article class="grid article">
      <div class="w-full md:col-start-1 md:col-end-3">
        <img
          alt="Cover image"
          v-if="$page.post.mainImage"
          :src="
            $urlForImage($page.post.mainImage, $page.metadata.sanityOptions)
              .width(600)
              .auto('format')
              .url()
          "
        />
        <div class="py-2">
          <h1 class="text-4xl font-bold font-display text-center">{{ $page.post.title }}</h1>
        </div>
      </div>

      <!-- Post Sidebar -->
      <div class="pr-8 pb-2">
        <post-meta :post="$page.post" v-if="$page.post" />
        <post-tags :post="$page.post" v-if="$page.post.tags" />
        <g-link to="/blog">See more blog posts</g-link>
      </div>

      <!-- Post Body -->
      <div>
        <block-content
          class="border rounded border-primary p-4"
          :blocks="$page.post._rawBody"
          v-if="$page.post._rawBody"
        />

        <div class="flex items-center justify-between w-full py-4">
          <g-link class="flex items-center text-primary no-highlight-anchor" :to="previousBlogPath">
            <font-awesome :icon="['fa', 'arrow-left']" size="lg" />
            <span class="no-highlight-anchor ml-1">previous post</span>
          </g-link>
          <g-link class="flex items-center text-primary no-highlight-anchor" :to="nextBlogPath">
            <span class="no-highlight-anchor mr-1">next post</span>
            <font-awesome :icon="['fa', 'arrow-right']" size="lg" />
          </g-link>
        </div>
        <div class="post-comments">
          <!-- Add comment widgets here -->
        </div>
      </div>
    </article>
  </Layout>
</template>

<script>
import BlockContent from '~/components/BlockContent'
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import AuthorCard from '~/components/AuthorCard'

export default {
  components: {
    AuthorCard,
    PostMeta,
    PostTags,
    BlockContent
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
    categories {
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
    },
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
.article {
  @media (min-width: 768px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 5fr);
  }
  grid-template-columns: 100%;
}
</style>
