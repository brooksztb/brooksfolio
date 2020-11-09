<template>
  <Layout page="blog">
    <article class="w-full mx-auto max-w-900">
      <!-- Post Header -->
      <!-- <img
        alt="Cover image"
        v-if="$page.post.mainImage"
        class="object-cover w-full rounded-md max-h-400"
        :src="
          $urlForImage($page.post.mainImage, $page.metadata.sanityOptions)
            .height(400)
            .auto('format')
            .url()
        "
      /> -->
      <h1 class="pt-4 text-center border-b font-display border-primary">
        {{ $page.post.title }}
      </h1>

      <div class="w-full font-body">
        <!-- Post Topbar -->
        <div class="pb-4 text-sm">
          <meta-info
            v-if="$page.post"
            :content="$page.post"
            :timeToRead="timeToRead($page.post._rawBody)"
          />
          <categories v-if="$page.post" :content="$page.post" />
          <arrow-link path="/blog" arrowDirection="left">See all blog posts</arrow-link>
        </div>

        <!-- Post Body -->
        <block-content :blocks="$page.post._rawBody" v-if="$page.post._rawBody" />
      </div>
      <div class="flex items-center justify-between w-full py-4 mx-auto max-w-900">
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
      title: this.$page.post.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$toPlainText(this.$page.post._rawExcerpt)
        },
        {
          key: 'keywords',
          name: 'keywords',
          content: this.$page.post.categories.map(category => category.title).join(',')
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
      const plainText = this.$toPlainText(content)
      return readingTime(plainText)
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

<style></style>
