<template>
  <section class="px-10 py-2">
    <ul
      class="relative before:absolute before:top-0 before:left-0 before:content-none before:h-full"
    >
      <li
        class="relative w-full leading-6 list-none mx-35 my-75 first:mt-5"
        v-for="(info, index) in data"
        :key="index"
      >
        <span
          class="absolute top-0 h-full border-2 border-solid -left-25 content-none border-text-primary before:absolute before:-top-15 before:-left-7 before:content-none before:h-14 before:w-14 before:border-solid before:border-2 before:border-text-primary before:rounded-1/2 before:bg-accent after:absolute after:top-full after:-left-7 after:content-none after:h-14 after:w-14 after:border-solid after:border-2 after:border-text-primary after:rounded-1/2 after:bg-accent"
        ></span>
        <div class="text-xl">{{ info.organization }} - {{ info.location }}</div>
        <div class="italic text-secondary">{{ info.positionTitle }}</div>
        <div v-if="info._rawPositionDescription" class="flex flex-row items-center pl-4">
          <block-content :blocks="info._rawPositionDescription" />
        </div>
        <div>
          <span class="absolute w-10 text-base text-right -top-20 -left-85">{{
            info.endDate
          }}</span>
          <span class="absolute w-10 text-base text-right top-full -left-85">{{
            info.startDate
          }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import BlockContent from './BlockContent'
export default {
  name: 'Timeline',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {
    BlockContent
  }
}
</script>

<style scoped></style>
