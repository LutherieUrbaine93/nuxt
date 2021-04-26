<template>
  <div id="root ">
    <header>
      <h1>Ateliers & Stages</h1>
    </header>
    <Nuxt />
    <Footer />
  </div>
</template>


<script>
export default {
  head: {
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lora%7cRoboto%7cOpen+Sans:400,800&display=swap ",
      }
    ]
  },
  data () {
    return {
      categorie: []
    }
  },
  async fetch() {
    this.categorie = await fetch('https://lutherieurbaine93.herokuapp.com/categories')
      .then(resp => resp.json())
      .then(resp => {
        return {
          headerTtl: resp.find(cat => cat.Lien_page === this.$route.name)?.Entete,
          headerClr: resp.find(cat => cat.Lien_page === this.$route.name)?.Couleur,
          darkenTxt: resp.find(cat => cat.Lien_page === this.$route.name)?.Texte_foncer
        }
      })
  }
}
</script>

<style scoped>
header {
  background-color: purple;
}
</style>
