<template>
  <div>
    <MenuNav :pageRoute="route"/>

    <PageHeader :pageTitle="pageData.Entete" :pageColor="pageMenu.Couleur" :textDark="pageMenu.Texte_foncer"/>

    <div class="container mx-auto py-10">
      <h1>Page "Actualités"</h1>
      <pre>{{ pageData }}</pre>
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Lutherie Urbaine 9.3 - Écouter Voir',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Les diffusions audios et vidéos de Lutherie Urbaine 9.3'
        }
      ]
    }
  },
  data () {
    return {
      route: this.$route.name
    }
  },
  async asyncData({$strapi, route}) {
    // Fetch page data:
    const pageData = await $strapi.find(route.name)
    const pageMenu = pageData.menu

    return {
      pageMenu,
      pageData
    }
  }
}
</script>
