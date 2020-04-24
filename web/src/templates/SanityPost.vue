<template>
  <Layout page="blog">
    <div class="post-title">
      <h1 class="post-title__text">{{ $page.post.title }}</h1>

      <post-meta :post="$page.post" v-if="$page.post" />
    </div>

    <div class="post content-box">
      <div class="post__header">
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
      </div>

      <block-content
        class="post__content"
        :blocks="$page.post._rawBody"
        v-if="$page.post._rawBody"
      />

      <div class="post__footer">
        <post-tags :post="$page.post" v-if="$page.post" />
        <g-link class="no-highlight-anchor" :to="nextBlogPath">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 26 26"
            enable-background="new 0 0 26 26"
            fill="var(--color-text-primary)"
          >
            <path
              d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z"
            />
          </svg>
        </g-link>
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>

    <author-card class="post-author" />
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
  }
  // computed: {
  // 	nextBlogPath() {
  // 		const allPosts = this.$page.all.edges;
  // 		const firstBlogPath = allPosts[0].node.path;
  // 		const currentBlog = allPosts.filter(
  // 			node => node.node.title === this.$page.post.title,
  // 		);
  // 		return this.isNull(currentBlog[0].next)
  // 			? firstBlogPath
  // 			: currentBlog[0].next.path;
  // 	},
  // },
  // methods: {
  // 	isNull(item) {
  // 		return item == null || item == undefined;
  // 	},
  // },
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
    }
  }
  all: allSanityPost {
        edges {
            node {
                path
                title
            }
            next {
                path
            }
        }
    }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
