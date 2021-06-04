<template>
  <div class="flex flex-col min-h-screen">

    <MenuNav :page-route="route"/>

    <PageHeader :page-title="pageData.Entete" :page-color="pageMenu.Couleur" :text-dark="pageMenu.Texte_foncer"/>

    <div class="container-lt flex-grow flex-shrink mx-auto py-10">
      <h3 class="text-center pb-10">{{ pageData.titre1 }}</h3>

      <div v-for="actu in actus" class="bg-gray-800 rounded p-5 mb-5 sm:p-10 sm:mb-10">
        <h4 class="">{{ actu.titre }}</h4>
        <p class="text-gray-400 italic">{{ actu.genre }}</p>
        <p v-if="actu.periode" class="my-1">
          <CaleIcon class="text-gray-400 float-left mr-1"/>
          {{ actu.periode }}
        </p>
        <p v-if="actu.lieu" class="my-1">
          <LocaIcon class="text-gray-400 float-left mr-1"/>
          {{ actu.lieu }}
        </p>
        <div v-if="actu.description" class="my-4">
          <div class="w-1/12 border-t-2 bg-gray-200 mb-4"></div>
          <p v-html="$md.render(actu.description)"></p>
        </div>
        <a v-for="image in actu.images" :href="image.url" target="_blank">
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-2 rounded inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Article</span>
          </button>
        </a>

      </div>

      <!--      <pre>{{ pageData }}</pre>-->
    </div>

    <PageFooter :page-color="pageMenu.Couleur"/>

  </div>
</template>

<script>
import LocaIcon from "~/assets/svg/location.svg?inline"
import CaleIcon from "~/assets/svg/calendar.svg?inline"

export default {
  components: {
    LocaIcon,
    CaleIcon
  },
  async asyncData({$strapi, route}) {
    // Fetch page data
    const pageData = await $strapi.find(route.name)
    const pageMenu = pageData.menu
    // Fetch actus data (array)
    const sort = '?_sort=date:ASC'
    const actus = await $strapi.find(`actus${sort}`)
    return {
      pageMenu,
      pageData,
      actus
    }
  },
  data() {
    return {
      route: this.$route.name
    }
  },
  head() {
    return {
      title: 'Lutherie Urbaine 9.3 - Actualités',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Les actus au sein de l'association Lutherie Urbaine 9.3"
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
