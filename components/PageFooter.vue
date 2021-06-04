<template>
  <footer class="flex-grow-0 flex-shrink bg-gray-800">
    <div class="container flex flex-col items-center">

<!--    <div class="md:w-11/12 xl:w-4/5 2xl:w-4/6 h-0.5 m-5" :style="{ backgroundColor: pageColor }"></div>-->

      <p class="text-center text-gray-400 py-4">{{ copyrights }}</p>

    </div>
  </footer>
</template>

<script>
// import CatService from "~/services/CatService";

export default {
  // name: 'PageFooter',
  props: {
    pageColor: {
      type: String,
      default: ''
    },
/*    textDark: {
      type: Boolean,
      default: false
    }*/
  },
  data() {
    return {
      copyrights: '© 2020 Lutherie Urbaine 9.3 tous droits réservés'
    }
  }
}
</script>

<style scoped>
footer {
  flex-basis: auto
}
</style>
