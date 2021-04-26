<template>
  <div id="root ">
    <Header :pageTitle="categorie.headerTtl" :pageColor="categorie.headerClr" :textDark="categorie.darkenTxt"/>
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

<style>
header {
  position: relative;
  width: 100%;
  height: 22.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1em;
}

header h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
@media only screen and (min-width: 640px) {
}
@media only screen and (min-width: 768px) {
  header h1 {
    font-size: 2.5em;
  }
}
@media only screen and (min-width: 1024px) {
  header h1 {
    font-size: 3em;
  }
}
</style>
