<template>
  <layout page="blog">
    <div class="flex flex-col items-start">
      <h1 class="uppercase font-display">My <span class="text-initial">Blog</span> Posts</h1>
      <!-- List posts -->
      <section class="w-full">
        <ul class="flex flex-col ml-0 list-none">
          <li v-for="edge in $page.posts.edges" :key="edge.node.id">
            <post-card :post="edge.node" :metadata="$page.metadata" />
          </li>
        </ul>
      </section>
    </div>
  </layout>
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
          slug {
            current
          }
        }
        publishedAt(format: "MMMM D YYYY")
        _rawExcerpt
        _rawBody
        mainImage {
          asset {
            _id
            url
          }
          caption
          alt
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
