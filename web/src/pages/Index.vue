<template>
  <Layout>
    <div>
      <div class="title-container flex flex-1">
        <h1 class="title-animated">Front end Developer, looking to JAM!</h1>
      </div>
      <h2>Site is a work in progress</h2>
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
      node {
        id
        title
        slug {
          current
        }
        tags {
          id
          title
        }
        publishedAt(format: "D. MMMM YYYY")
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
export default {
  components: {},
  metaInfo: {
    title: 'Home'
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
