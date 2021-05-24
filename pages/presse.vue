<template>
  <div>
    <MenuNav :pageRoute="route"/>

    <PageHeader :pageTitle="pageData.Entete" :pageColor="pageMenu.Couleur" :textDark="pageMenu.Texte_foncer"/>

    <div class="container mx-auto py-10 flex flex-col items-center">

      <div v-for="parution in parutions"
           class="lg:w-1/2 mb-14">
        <h4 class="mb-2">{{ parution.Titre }}</h4>
        <div v-html="$md.render(parution.Texte)"></div>
        <p class="text-right"><span class="font-bold">{{ parution.Magazine }}</span> – {{ parution.Auteur }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
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
  },
  data() {
    return {
      route: this.$route.name,
    }
  },
  async asyncData({$strapi, route}) {
    // Fetch page data:
    const pageData = await $strapi.find(route.name)
    const pageMenu = pageData.menu
    // Sorted contents:
    const sort = '?_sort=Date:DESC'
    const parutions = await $strapi.find(`parutions${sort}`)

    return {
      pageMenu,
      pageData,
      parutions
    }
  }
}
</script>

<style scoped>
a {
  @apply italic underline;
  text-decoration: underline;
}
</style>
