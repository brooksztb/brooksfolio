<template>
  <Layout page="about">
    <div class="text-primary">
      <div class="flex flex-col lg:flex-row max-w-sm w-full lg:max-w-full">
        <g-image
          class="w-full h-1/2 lg:h-full lg:w-1/3 lg:mr-4 h-full rounded mr-0 mb-4 lg:mb-0"
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
          class=" w-full lg:w-2/3 border rounded border-white-400 p-4 flex flex-col justify-between leading-normal"
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
      positionDescription {
      	_rawText
      },
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
