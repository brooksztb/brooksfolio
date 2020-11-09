<template>
  <layout page="blog">
    <div class="flex flex-col items-start">
      <h1 class="font-display uppercase">My <span class="text-initial">Projects</span></h1>
      <!-- List projects -->
      <section class="w-full">
        <ul class="flex flex-row justify-between ml-0 list-none">
          <li v-for="edge in $page.projects.edges" :key="edge.node.id">
            <project-card :project="edge.node" :metadata="$page.metadata" />
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
