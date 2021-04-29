<template>
  <div id="menu-nav">

    <!--    <div class="menu-link" style="background-color: #212121">
        </div>-->

    <nuxt-link class="menu-cat"
      v-for="category in categories"
      :key="category.id"
      :to="category.Lien_page"
      :style="{ backgroundColor: category.Couleur }">
      <h1 class="page-title my-0" v-if="category.Texte_foncer" style="color:#212121">{{ category.Nom }}</h1>
      <h1 class="page-title my-0" v-else>{{ category.Nom }}</h1>
    </nuxt-link>

  </div>
</template>

<script>
// import FetchData from '~/services/FetchData.js'

export default {
  data() {
    return {
      categories: []
    }
  },
  async fetch() {
    this.categories = await fetch('https://lutherieurbaine93.herokuapp.com/categories')
      .then(resp => resp.json())
    /*      .then(resp => {
            return {
              headerTtl: resp.find(cat => cat.Lien_page === this.$route.name)?.Entete,
              headerClr: resp.find(cat => cat.Lien_page === this.$route.name)?.Couleur,
              darkenTxt: resp.find(cat => cat.Lien_page === this.$route.name)?.Texte_foncer
            }
          })*/
  }
}
</script>

<style scoped>
#menu-nav {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  /*display: none;*/
  flex-flow: column wrap;
  align-items: stretch;
  z-index: 999;
}

.menu-link {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.menu-cat {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  opacity: .9;
  transition: opacity .2s ease;
}
.menu-cat:hover {
  opacity: 1;
  transition: opacity .2s ease;
}

/*.menu-link { order: 0; }*/
.menu-cat:nth-child(1) {
  order: 1;
}

.menu-cat:nth-child(2) {
  order: 2;
}

.menu-cat:nth-child(3) {
  order: 4;
}

.menu-cat:nth-child(4) {
  order: 3;
}

.menu-cat:nth-child(5) {
  order: 5;
}

.menu-cat:nth-child(6) {
  order: 6;
}

.menu-cat:nth-child(7) {
  order: 8;
}

.menu-cat:nth-child(8) {
  order: 7;
}
</style>
