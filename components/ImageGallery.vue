<template>

  <div class="flex flex-wrap justify-center">
    <client-only>
      <lightGallery :images="images" :index="index" :disable-scroll="true" @close="index = null"/>
      <div v-for="(thumb, thumbIndex) in thumbs"
           :key="thumb"
           @click="index = thumbIndex"
           class="inline-block cursor-pointer overflow-hidden rounded w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 m-3 border-2 border-gray-400 hover:border-gray-200"
      >
        <img :src="thumb" alt="" class="w-full h-full object-cover"/>
      </div>
    </client-only>
  </div>

</template>

<script>
export default {
  data() {
    return {
      index: null
    }
  },
  props: {
    gallery: {
      type: Array,
      default: []
    }
  },
  computed: {
    images() {
      // return this.images.map(({ url }) => url)
      return this.gallery.map(a => a.url)
    },
    thumbs() {
      let thumbnails = []
      this.images.forEach(e => {
        const urlSgmt = e.slice(0, e.lastIndexOf("/") + 1)
        const imgName = e.split("/").pop()
        const thumbnail = urlSgmt + 'thumbnail_' + imgName
        thumbnails.push(thumbnail)
      })
      return thumbnails
    }
  }
}
</script>

<style scoped>

</style>
