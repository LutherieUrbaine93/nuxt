<template>
  <div class="flex flex-col min-h-screen">

    <MenuNav :page-route="route"/>

    <PageHeader :page-title="pageData.Entete" :page-color="pageMenu.Couleur" :text-dark="pageMenu.Texte_foncer"/>

    <div class="container-lt items-center flex-grow flex-shrink mx-auto py-10">

      <div v-for="parution in parutions" class="mb-14">
        <h4 class="mb-2">{{ parution.Titre }}</h4>
        <!--warning 'v-html' directive can lead to XSS attack-->
        <div v-html="$md.render(parution.Texte)"></div>
        <p class="text-right"><span class="font-bold">{{ parution.Magazine }}</span> – {{ parution.Auteur }}</p>
      </div>

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
    // Sorted contents:
    const sort = '?_sort=Date:ASC'
    const parutions = await $strapi.find(`parutions${sort}`)

    return {
      pageMenu,
      pageData,
      parutions
    }
  },
  data() {
    return {
      route: this.$route.name,
    }
  },
  head() {
    return {
      title: 'Lutherie Urbaine 9.3 - La presse en parle',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Extraits d'articles parus sur l'association Lutherie Urbaine 9.3"
        }
      ]
    }
  }
}
</script>

<style scoped>
.container-lt {
  flex-basis: auto
}

a {
  @apply italic underline;
  text-decoration: underline;
}
</style>
