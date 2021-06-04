<template>
  <!--  <vue-picture-swipe :items="imgs" :options="options"></vue-picture-swipe>-->
  <vue-picture-swipe :items="imgs"></vue-picture-swipe>
</template>

<script>
import VuePictureSwipe from 'vue-picture-swipe'

export default {
  name: 'ImageGallery',
  components: {
    VuePictureSwipe
  },
  props: {
    imgs: {
      type: Array,
      required: true
    },
    /*    options: {
          type: Object,
          required: false,
          default () {
            return {
              bgOpacity: 0.95,
              shareEl: true,
              zoomEl: true
            }
          }
        }*/
  }
}
</script>

<style scoped>

</style>
