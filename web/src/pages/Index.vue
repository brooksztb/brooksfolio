<template>
  <layout page="Home">
    <div class="flex flex-col items-start">
      <div class="title-container flex items-center">
        <h1 class="font-display uppercase title-animated">{{ $page.home.introHeader }}</h1>
      </div>
      <div class="flex flex-row text-lg md:max-w-1/2 py-4">
        <block-content :blocks="$page.home._rawIntroBody" />
      </div>
      <!--
        Need to take a couple photos and have one animate up only once when the site is loaded and have that tracked.
        <img
        alt="Cover image"
        v-if="$page.home.mainImage"
        class="object-cover w-full max-h-400 rounded-md"
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
        <h3 class="font-display uppercase">My <span class="text-initial">Blog</span> Posts</h3>
        <ul class="flex flex-col ml-0">
          <post-card
            v-for="post in $page.home.posts"
            :key="post.id"
            :post="post"
            :metadata="$page.metadata"
          />
        </ul>
        <arrow-link class="self-end" path="/blog" arrowDirection="right"
          >See all blog posts</arrow-link
        >
      </section>
      <section
        v-if="$page.home.projects && $page.home.projects.length > 0"
        class="flex flex-col w-full py-4"
      >
        <h3 class="font-display uppercase">My <span class="text-initial">Projects</span></h3>
        <ul class="flex flex-row justify-between ml-0">
          <project-card
            v-for="project in $page.home.projects"
            :key="project.id"
            :project="project"
            :metadata="$page.metadata"
          />
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
<style lang="scss" scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.title-animated {
  position: relative;
  display: block;
  margin: 0;
  line-height: 1;
  transform: translateY(6rem);
  animation: up 500ms linear forwards;
  z-index: 1;
  text-shadow: 0px 1px 1px rgba((var(--color-text-primary)), 1);

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 0px;
    height: 1px;
    left: 0;
    background-color: rgba(var(--color-bg-primary), 0.2);
    z-index: -1;
  }

  &::before {
    top: 1.4rem;
    animation: draw 500ms linear 1s forwards;
  }

  &::after {
    bottom: 0.4rem;
    animation: draw 500ms linear 1s forwards;
  }
}

.title-container {
  font-size: 0;
  position: relative;
  overflow: hidden;
  padding-bottom: 0.4rem;
}

@keyframes up {
  100% {
    transform: translateY(0);
  }
}

@keyframes draw {
  100% {
    width: 100%;
  }
}
</style>
