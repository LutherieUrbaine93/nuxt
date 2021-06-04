<template>

  <header :style="{ backgroundColor: pageMenu.Couleur }">
    <!--<h1 classe="text-center" v-if="$fetchState.pending" style="color:#212121">Lutherie Urbaine 9.3</h1>-->
    <h1 v-if="pageMenu.Texte_foncer" class="text-center" style="color:#212121">{{ pageHead }}</h1>
    <h1 v-else class="text-center">{{ pageHead }}</h1>
  </header>

</template>

<script>
export default {
  async fetch() {
    const data = await this.$strapi.find(this.$route.name)
    this.pageHead = data.Entete
    this.pageMenu = data.menu
  },
  data() {
    return {
      pageHead: {},
      pageMenu: {}
    }
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
