<template>
  <Layout page="blog">
    <!-- List posts -->
    <div class="w-full">
      <section>
        <ul class="flex flex-col"></ul>
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
  posts: allSanityProject(sortBy: "publishedAt") {
    edges {
      next {
        slug {
          current
        }
      },
      previous {
        slug {
          current
        }
      },
      node {
        id
        title
        slug {
          current
        }
        tags,
        publishedAt(format: "MMMM D YYYY")
        _rawExcerpt
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
      }
    }
  }
}

</page-query>

<script>
import ProjectCard from '~/components/ProjectCard'

export default {
  components: {
    ProjectCard
  }
}
</script>

<style></style>
