<template>
  <div>
    <MenuNav :pageRoute="route"/>

    <PageHeader :pageTitle="pageData.Entete" :pageColor="pageMenu.Couleur" :textDark="pageMenu.Texte_foncer"/>

    <div class="container mx-auto py-10">

      <h4 class="md:w-2/3 text-center mx-auto">{{ pageData.Introduction }}</h4>

      <h3 class="md:w-2/3 lg:w-1/2 text-center mx-auto py-14">{{ pageData.Periode }}</h3>

      <div class="wrapper-row items-stretch">

        <div v-for="creation in creations" class="p-1.5 lg:w-1/4">

          <a v-if="creation.Lien && creation.Lien.startsWith('http')" :href="creation.Lien">
            <div class="rounded-t p-4 border-2" :style="{ borderColor: pageMenu.Couleur }">
              <h4 class="text-center">{{ creation.Titre }}</h4>
              <p class="whitespace-pre-line mt-5">{{ creation.Texte }}</p>
            </div>
            <div class="rounded-b p-1 border-2" :style="{ borderColor: pageMenu.Couleur, backgroundColor: pageMenu.Couleur }">
              <p v-if="pageData.Texte_foncer" class="text-center text-gray-800 opacity-80">{{ pageData.Cliquable }}</p>
              <p v-else class="text-center opacity-80">{{ pageData.Cliquable }}</p>
            </div>
          </a>

          <nuxt-link v-else-if="creation.Lien" :to="creation.Lien">
            <div class="rounded-t p-4 border-2" :style="{ borderColor: pageMenu.Couleur }">
              <h4 class="text-center">{{ creation.Titre }}</h4>
              <p class="whitespace-pre-line mt-5">{{ creation.Texte }}</p>
            </div>
            <div class="rounded-b p-1 border-2" :style="{ borderColor: pageMenu.Couleur, backgroundColor: pageMenu.Couleur }">
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

  </div>
</template>

<script>
export default {
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
  },
  data() {
    return {
      route: this.$route.name
    }
  },
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
  }
}
</script>
