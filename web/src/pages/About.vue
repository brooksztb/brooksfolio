<template>
  <layout page="about">
    <div class="flex flex-col items-start">
      <h1 class="uppercase font-display">
        A Little Bit <span class="text-initial">About</span> Me
      </h1>
      <section class="pt-4 text-primary lg:pt-0">
        <div class="flex flex-col w-full max-w-sm md:flex-row md:max-w-full">
          <g-image
            class="w-full h-full mb-4 mr-0 rounded-md h-1/2 md:h-full md:w-1/3 md:mr-4 lg:mb-0"
            :immediate="true"
            :src="
              $urlForImage($page.about.mainImage, $page.metadata.sanityOptions)
                .height(750)
                .width(750)
                .quality(75)
                .auto('format')
                .url()
            "
            :alt="$page.about.mainImage.alt"
          ></g-image>
          <div
            class="flex flex-col justify-center w-full p-4 mb-2 leading-normal rounded-md shadow-lg md:w-2/3 bg-secondary"
          >
            <block-content :blocks="$page.about._rawBiography" />
          </div>
        </div>
        <div class="flex flex-col items-center w-full">
          <h2 class="self-start text-3xl font-bold">Where I've Been</h2>
          <timeline :data="$page.about.workHistory"></timeline>
        </div>
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
  },
  about: sanityAboutPage(id: "aboutPage") {
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
    },
    workHistory {
      organization,
      positionTitle,
      _rawPositionDescription,
      location,
      startDate,
      endDate
    },
    _rawBiography
  }
}
</page-query>
<script>
import BlockContent from '~/components/BlockContent'
import Timeline from '~/components/Timeline'

export default {
  metaInfo() {
    return {
      title: 'About Me',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$toPlainText(this.$page.about._rawBiography)
        }
      ]
    }
  },
  components: {
    BlockContent,
    Timeline
  }
}
</script>

<style></style>
