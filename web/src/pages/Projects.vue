<template>
  <Layout page="blog">
    <!-- List posts -->
    <div class="w-full">
      <section>
        <ul class="flex flex-row justify-between ml-0">
          <project-card
            v-for="edge in $page.projects.edges"
            :key="edge.node.id"
            :project="edge.node"
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
  projects: allSanityProject(sortBy: "publishedAt") {
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
import ProjectCard from '~/components/ProjectCard'

export default {
  metaInfo: {
    title: 'Projects'
  },
  components: {
    ProjectCard
  }
}
</script>

<style></style>
