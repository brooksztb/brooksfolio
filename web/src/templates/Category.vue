<template>
  <Layout page="Categories">
    <article class="flex flex-col items-start">
      <h1>Category: {{ $page.category.title }}</h1>

      <div v-if="$page.category.posts && $page.category.posts.length > 0" class="w-full">
        <h2>
          Blog Posts
        </h2>
        <section>
          <ul class="flex flex-col ml-0">
            <post-card
              v-for="post in $page.category.posts"
              :key="post.id"
              :post="post"
              :metadata="$page.metadata"
            />
          </ul>
        </section>
      </div>
      <div v-if="$page.category.projects && $page.category.projects.length > 0" class="w-full">
        <h2>
          Projects
        </h2>
        <section>
          <ul class="flex flex-row justify-between ml-0">
            <project-card
              v-for="project in $page.category.projects"
              :key="project.id"
              :project="project"
              :metadata="$page.metadata"
            />
          </ul>
        </section>
      </div>
      <!-- <ul>
      <li v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul> -->
    </article>
  </Layout>
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
