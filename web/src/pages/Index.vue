<template>
  <layout page="Home">
    <div class="flex flex-col items-start">
      <div class="flex items-center title-container">
        <h1 class="uppercase font-display title-animated">{{ $page.home.introHeader }}</h1>
      </div>
      <div class="flex flex-row pt-8 pb-4 text-lg md:max-w-1/2">
        <div class="flex flex-col justify-center p-4 rounded-md shadow-lg bg-secondary">
          <block-content :blocks="$page.home._rawIntroBody" />
        </div>
      </div>
      <!--
        Need to take a couple photos and have one animate up only once when the site is loaded and have that tracked.
        <img
        alt="Cover image"
        v-if="$page.home.mainImage"
        class="object-cover w-full rounded-md max-h-400"
        :src="
          $urlForImage($page.home.mainImage, $page.metadata.sanityOptions)
            .height(400)
            .auto('format')
            .url()
        "
      /> -->
      <section
        v-if="$page.home.posts && $page.home.posts.length > 0"
        class="flex flex-col w-full py-4"
      >
        <h2 class="uppercase font-display">My <span class="text-initial">Blog</span> Posts</h2>
        <ul class="flex flex-col ml-0 list-none">
          <li v-for="post in $page.home.posts" :key="post.id">
            <post-card :post="post" :metadata="$page.metadata" />
          </li>
        </ul>
        <arrow-link class="self-end" path="/blog" arrowDirection="right"
          >See all blog posts</arrow-link
        >
      </section>
      <section
        v-if="$page.home.projects && $page.home.projects.length > 0"
        class="flex flex-col w-full py-4"
      >
        <h2 class="uppercase font-display">My <span class="text-initial">Projects</span></h2>
        <ul class="flex flex-row justify-between ml-0 list-none">
          <li v-for="project in $page.home.projects" :key="project.id">
            <project-card :project="project" :metadata="$page.metadata" />
          </li>
        </ul>
        <arrow-link class="self-end" path="/projects" arrowDirection="right"
          >See all projects</arrow-link
        >
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
    siteInfo {
      description
    }
  }
  home: sanityHomePage(id: "homePage") {
    introHeader,
    _rawIntroBody,
    projects: highlightedProjects {
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
    },
    posts: highlightedBlogPosts {
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

<script>
import BlockContent from '~/components/BlockContent'
import PostCard from '~/components/PostCard'
import ProjectCard from '~/components/ProjectCard'
import ArrowLink from '~/components/ArrowLink'

export default {
  name: 'Home',
  metaInfo() {
    return {
      title: 'Software Engineer',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.metadata.siteInfo.description
        }
      ]
    }
  },
  components: {
    BlockContent,
    PostCard,
    ProjectCard,
    ArrowLink
  }
}
</script>
<style></style>
