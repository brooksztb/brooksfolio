<template>
  <Layout page="blog">
    <!-- List posts -->
    <div class="w-full">
      <section>
        <ul class="flex flex-col ml-0">
          <post-card
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
            :post="edge.node"
            :metadata="$page.metadata"
          />
        </ul>
      </section>
    </div>
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  posts: allSanityPost(sortBy: "publishedAt") {
    edges {
      next {
        path
      },
      previous {
        path
      },
      node {
        id
        title
        path
        categories {
          id
          title
        }
        publishedAt(format: "MMMM D YYYY")
        _rawExcerpt
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
    }
  }
}

</page-query>

<script>
import PostCard from '~/components/PostCard'
export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    PostCard
  }
}
</script>

<style></style>
