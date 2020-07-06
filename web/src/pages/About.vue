<template>
  <layout page="about">
    <div class="flex flex-col items-start">
      <h1 class="font-display uppercase">
        A Little Bit <span class="text-initial">About</span> Me
      </h1>
      <section class="text-primary pt-4 lg:pt-0">
        <div class="flex flex-col md:flex-row max-w-sm w-full md:max-w-full">
          <g-image
            class="w-full h-1/2 md:h-full md:w-1/3 md:mr-4 h-full rounded-md mr-0 mb-4 lg:mb-0"
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
            class="w-full md:w-2/3 border rounded-md border-primary p-4 flex flex-col justify-between leading-normal"
          >
            <div class="mb-2">
              <div class="font-bold text-xl mb-2"></div>
              <block-content :blocks="$page.about._rawBiography" />
            </div>
          </div>
        </div>
        <div class="flex w-full flex-col items-center">
          <h2 class="self-start text-secondary font-bold text-3xl">Where I've Been</h2>
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
  metaInfo: {
    title: 'About Me'
  },
  components: {
    BlockContent,
    Timeline
  }
}
</script>

<style lang="scss" scoped>
// [class^='gb-']:not(.gb-base-icon) {
//   font-family: ;
// }
</style>
