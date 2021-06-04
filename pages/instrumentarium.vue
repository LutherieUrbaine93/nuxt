<template>
  <div class="flex flex-col min-h-screen">

    <MenuNav :page-route="route"/>

    <PageHeader :page-title="pageData.Entete" :page-color="pageMenu.Couleur" :text-dark="pageMenu.Texte_foncer"/>

    <div class="container-lt flex-grow flex-shrink mx-auto py-10">
      <h4 class="md:w-2/3 text-center mx-auto">{{ pageData.Introduction }}</h4>
    </div>

    <PageFooter :page-color="pageMenu.Couleur"/>

  </div>
</template>

<script>
export default {
  async asyncData({$strapi, route}) {
    // Fetch page data:
    const pageData = await $strapi.find(route.name)
    const pageMenu = pageData.menu

    return {
      pageMenu,
      pageData
    }
  },
  data() {
    return {
      route: this.$route.name
    }
  },
  head() {
    return {
      title: 'Lutherie Urbaine 9.3 - Instrumentarium',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Les instruments insolites exclusivements fabriqués par Lutherie Urbaine 9.3'
        }
      ]
    }
  }
}
</script>

<style scoped>
header {
  padding: 3em 0 1em;
}
</style>
