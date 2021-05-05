<template>
  <header :style="{ backgroundColor: pageColor }">
<!--    <h1 classe="text-center" v-if="$fetchState.pending" style="color:#212121">Lutherie Urbaine 9.3</h1>-->
    <h1 class="text-center" v-if="textDark" style="color:#212121">{{ pageTitle }}</h1>
    <h1 class="text-center" v-else>{{ pageTitle }}</h1>

  </header>

</template>

<script>
// import CatService from "~/services/CatService";

export default {
  // name: 'PageHeader',
  props: {
    pageTitle: '',
    pageColor: '',
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
}

@media only screen and (min-width: 640px) {
  header {
    height: 22.5vh;
    padding: 1em;
  }
}
</style>
