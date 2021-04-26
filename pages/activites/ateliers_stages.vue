<template>
  <div class="container md mx-auto py-10">
    <h2 class="text-center text-gray-400">Expositions d’instruments de musique</h2>
    <h1 class="text-center my-px"></h1>

    <div id="ateliers-stages">
      {{ categorie }}
    </div>

  </div>

</template>

<script>
import axios from 'axios'

export default {
  layout: 'ateliers_stages',
  head () {
    return {
      title: 'Lutherie Urbaine 9.3 - Ateliers & Stages',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Les stages et ateliers artistiques proposés par l'association Lutherie Urbaine 9.3"
        }
      ]
    }
  },
  data () {
    return {
      categorie: {}
    }
  }
 /* async asyncData() {
    const api = `https://lutherieurbaine93.herokuapp.com/ateliers_stages`
    const response = await axios.get(api)
    const atelData = response.data

    return {
      atelData
    }
  }*/,
  async fetch() {
    this.categorie = await fetch('https://lutherieurbaine93.herokuapp.com/categories')
      .then(resp => resp.json())
      .then(response => {
        return {
          categorie: response.data/*
          headerTtl: resp.find(cat => cat.Lien_page === this.$route.name)?.Entete,
          headerClr: resp.find(cat => cat.Lien_page === this.$route.name)?.Couleur,
          darkenTxt: resp.find(cat => cat.Lien_page === this.$route.name)?.Texte_foncer*/
        }
      })
  }

}
</script>

