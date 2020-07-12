<template>
  <layout page="Home">
    <div class="title-container flex flex-1 items-center">
      <h1 class="title-animated">Front end Developer, looking to JAM!</h1>
    </div>

    <!-- TODO: Query the featured projects and posts
      <div class="flex flex-col items-start">
      <h1 class="font-display uppercase">
        Category: <span class="text-initial">{{ $page.category.title }}</span>
      </h1>

      <section v-if="$page.category.posts && $page.category.posts.length > 0" class="w-full">
        <h2>
          Blog Posts
        </h2>
        <ul class="flex flex-col ml-0">
          <post-card
            v-for="post in $page.category.posts"
            :key="post.id"
            :post="post"
            :metadata="$page.metadata"
          />
        </ul>
      </section>
      <section v-if="$page.category.projects && $page.category.projects.length > 0" class="w-full">
        <h2>
          Projects
        </h2>
        <ul class="flex flex-row justify-between ml-0">
          <project-card
            v-for="project in $page.category.projects"
            :key="project.id"
            :project="project"
            :metadata="$page.metadata"
          />
        </ul>
      </section>
      <ul>
      <li v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul>
    </div> -->
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
}

</page-query>

<script>
export default {
  components: {},
  metaInfo() {
    return {
      title: 'Home',
      meta: [
        {
          name: 'description',
          content: this.$page.metadata.siteInfo.description
        }
      ]
    }
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
  font-size: 4rem;
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
