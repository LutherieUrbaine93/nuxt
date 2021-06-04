<template>

  <header class="flex-grow-0 flex-shrink bg-gray-900" :style="{ backgroundColor: pageColor }">
<!--    <h1 classe="text-center" v-if="$fetchState.pending" style="color:#212121">Lutherie Urbaine 9.3</h1>-->
    <h1 v-if="textDark" class="text-center" style="color:#212121">{{ pageTitle }}</h1>
    <h1 v-else class="text-center">{{ pageTitle }}</h1>
  </header>

</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: ''
    },
    pageColor: {
      type: String,
      default: ''
    },
    textDark: false
  }
}
</script>

<style scoped>
header {
  position: relative;
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 4em 1em 1em;

  flex-basis: auto;
}

@media only screen and (min-width: 640px) {
  header {
    height: 22.5vh;
    padding: 1em;
  }
}
</style>
