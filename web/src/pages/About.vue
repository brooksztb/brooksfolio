<template>
  <Layout page="about">
    <div class="flex-wrap">
      <div class="flex flex-col lg:flex-row max-w-sm w-full lg:max-w-full">
        <g-image
          class="w-full lg:w-1/3 lg:mr-4 h-full rounded mr-0"
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
            <div class="text-primary font-bold text-xl mb-2"></div>
            <block-content class="text-primary" :blocks="$page.about._rawBiography" />
          </div>
        </div>
      </div>
      <timeline :data="$page.about.workHistory"></timeline>
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
