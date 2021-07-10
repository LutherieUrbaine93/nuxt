<template>
  <div class="flex flex-col min-h-screen">

    <MenuNav :page-route="route"/>

    <PageHeader :page-title="pageData.Entete" :page-color="pageMenu.Couleur" :text-dark="pageMenu.Texte_foncer"/>

    <div class="container-lt flex-grow flex-shrink mx-auto py-10">

      <h4 class="md:w-2/3 text-center mx-auto">{{ pageData.Introduction }}</h4>

      <h3 class="text-center mx-auto py-14">{{ pageData.Periode }}</h3>

      <div class="flex flex-wrap items-stretch">

        <div v-for="creation in creations" class="py-3 sm:py-5">

          <div>
            <div class="inline-block rounded-t py-2 px-4" :style="{ backgroundColor: pageMenu.Couleur }">
              <h4>{{ creation.Titre }}</h4>
            </div>
            <div class="rounded-b border-2 p-4 whitespace-pre-line" :style="{ borderColor: pageMenu.Couleur }">
              <div v-html="$md.render(creation.Texte)"/>
              <div>
                <a v-if="creation.Lien && creation.Lien.startsWith('http')"
                   :href="creation.Lien" target="_blank"
                   class="border border-gray-500 hover:border-gray-300 text-white py-2 px-4 rounded-full"
                   :style="{ backgroundColor: pageMenu.Couleur }">{{ pageData.Cliquable }}</a>
                <nuxt-link v-else-if="creation.Lien"
                           :to="creation.Lien"
                           class="border border-gray-500 hover:border-gray-300 text-white py-2 px-4 rounded-full"
                           :style="{ backgroundColor: pageMenu.Couleur }">{{ pageData.Cliquable }}
                </nuxt-link>
              </div>

            </div>

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
