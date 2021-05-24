<template>
  <div>
    <MenuNav :pageRoute="route"/>

    <PageHeader :pageTitle="pageData.Entete" :pageColor="pageMenu.Couleur" :textDark="pageMenu.Texte_foncer"/>

    <div class="container mx-auto py-10">
      <h4 class="md:w-2/3 text-center mx-auto">{{ pageData.Introduction }}</h4>
    </div>

  </div>
</template>

<script>
export default {
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
