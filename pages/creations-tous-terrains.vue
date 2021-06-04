<template>
  <div class="flex flex-col min-h-screen">

    <MenuNav :page-route="route"/>

    <PageHeader :page-title="pageData.Entete" :page-color="pageMenu.Couleur" :text-dark="pageMenu.Texte_foncer"/>

    <div class="container-lt flex-grow flex-shrink mx-auto py-10">

      <h4 class="md:w-2/3 text-center mx-auto">{{ pageData.Introduction }}</h4>

      <h3 class="text-center mx-auto py-14">{{ pageData.Periode }}</h3>

      <div class="wrapper-row items-stretch">

        <div v-for="creation in creations" class="p-1.5 lg:w-1/3">

          <a v-if="creation.Lien && creation.Lien.startsWith('http')" :href="creation.Lien">
            <div class="rounded-t p-4 border-2" :style="{ borderColor: pageMenu.Couleur }">
              <h4 class="text-center">{{ creation.Titre }}</h4>
              <p class="whitespace-pre-line mt-5">{{ creation.Texte }}</p>
            </div>
            <div class="rounded-b p-1 border-2"
                 :style="{ borderColor: pageMenu.Couleur, backgroundColor: pageMenu.Couleur }">
              <p v-if="pageData.Texte_foncer" class="text-center text-gray-800 opacity-80">{{ pageData.Cliquable }}</p>
              <p v-else class="text-center opacity-80">{{ pageData.Cliquable }}</p>
            </div>
          </a>

          <nuxt-link v-else-if="creation.Lien" :to="creation.Lien">
            <div class="rounded-t p-4 border-2" :style="{ borderColor: pageMenu.Couleur }">
              <h4 class="text-center">{{ creation.Titre }}</h4>
              <p class="whitespace-pre-line mt-5">{{ creation.Texte }}</p>
            </div>
            <div class="rounded-b p-1 border-2"
                 :style="{ borderColor: pageMenu.Couleur, backgroundColor: pageMenu.Couleur }">
              <p v-if="pageData.Texte_foncer" class="text-center text-gray-800 opacity-80">{{ pageData.Cliquable }}</p>
              <p v-else class="text-center opacity-80">{{ pageData.Cliquable }}</p>
            </div>
          </nuxt-link>

          <div v-else class="rounded p-4 border-2" :style="{ borderColor: pageMenu.Couleur }">
            <h4 class="text-center">{{ creation.Titre }}</h4>
            <p class="whitespace-pre-line mt-5">{{ creation.Texte }}</p>
          </div>

        </div>

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
    // Page content:
    const creations = await $strapi.find('creations')

    return {
      pageMenu,
      pageData,
      creations
    }
  },
  data() {
    return {
      route: this.$route.name
    }
  },
  head() {
    return {
      title: 'Lutherie Urbaine 9.3 - Créations tous terrains',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'La variété des créations artistiques que Lutherie Urbaine 9.3 vous réserve cette saison'
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
</style>
