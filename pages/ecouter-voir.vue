<template>
  <div class="flex flex-col min-h-screen">

    <MenuNav :page-route="route"/>

    <PageHeader :page-title="pageData.Entete" :page-color="pageMenu.Couleur" :text-dark="pageMenu.Texte_foncer"/>

    <div class="container items-center flex-grow flex-shrink mx-auto py-10">

      <!-- Video rencentes -->
<!--      <p class="text-center text-2xl text-gray-300 underline py-10">{{ pageData.titre1 }}</p>-->

      <div v-for="video in videos" v-if="!video.archive" class="w-full pb-8">
        <h3 class="text-center">{{ video.Titre }}</h3>
        <p class="text-center text-gray-300 mt-1 mb-3">{{ video.Sous_titre }}</p>

        <vue-video-player v-if="video.fichier_video" :video-data="video" />

<!--        <VideoPlayer v-if="video.fichier_video" :src="video.fichier_video.url"/>-->
        <VideoPlayer v-else :src="video.Lien" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />

      </div>

      <!-- Video archives -->
      <p class="text-center text-2xl text-gray-300 underline py-10">{{ pageData.titre2 }}</p>

      <div v-for="video in videos" v-if="video.archive" class="w-full pb-8">
        <h3 class="text-center">{{ video.Titre }}</h3>
        <p class="text-center text-gray-300 mt-1 mb-3">{{ video.Sous_titre }}</p>

        <vue-video-player v-if="video.fichier_video" :video-data="video" />

        <VideoPlayer v-else :src="video.Lien" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />

      </div>

    </div>

    <PageFooter :page-color="pageMenu.Couleur"/>

  </div>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'

require('nuxt-video-player/src/assets/css/main.css')

export default {
  components: {
    VideoPlayer
  },
  async asyncData({$strapi, route}) {
    // Fetch page data:
    const pageData = await $strapi.find(route.name)
    const pageMenu = pageData.menu
    // Videos:
    const sortAsc = '?_sort=Ordre:ASC'
    const videos = await $strapi.find(`videos${sortAsc}`)

    return {
      pageMenu,
      pageData,
      videos
    }
  },
  data() {
    return {
      route: this.$route.name
    }
  },
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
  }
}
</script>

<style scoped>
.container-lt {
  flex-basis: auto
}

</style>
