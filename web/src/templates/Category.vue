<template>
  <layout page="Categories">
    <div class="flex flex-col items-start">
      <h1 class="uppercase font-display">
        Category: <span class="text-initial">{{ $page.category.title }}</span>
      </h1>

      <section v-if="$page.category.posts && $page.category.posts.length > 0" class="w-full">
        <h2>
          Blog Posts
        </h2>
        <ul class="flex flex-col ml-0 list-none">
          <li v-for="post in $page.category.posts" :key="post.id">
            <post-card :post="post" :metadata="$page.metadata" />
          </li>
        </ul>
      </section>
      <section v-if="$page.category.projects && $page.category.projects.length > 0" class="w-full">
        <h2>
          Projects
        </h2>
        <ul class="flex flex-row justify-between ml-0 list-none">
          <li v-for="project in $page.category.projects" :key="project.id">
            <project-card :project="project" :metadata="$page.metadata" />
          </li>
        </ul>
      </section>
      <!-- <ul>
      <li v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul> -->
    </div>
  </layout>
</template>

<script>
import PostCard from '~/components/PostCard'
import ProjectCard from '~/components/ProjectCard'

export default {
  metaInfo() {
    return {
      title: `Category: ${this.$page.category.title}`
    }
  },
  components: {
    PostCard,
    ProjectCard
  }
}
</script>

<page-query>
query Category ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  category: sanityCategory(id: $id) {
    id
    title
    posts {
      id
      title
      path
      publishedAt(format: "MMMM D YYYY")
      _rawExcerpt
      _rawBody
      categories
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
    projects {
      id
      title
      path
      publishedAt(format: "MMMM D YYYY")
      _rawExcerpt
      categories
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
</page-query>
<style></style>
