<template>
  <div class="flex flex-col min-h-screen">

    <MenuNav :page-route="route"/>

    <PageHeader :page-title="pageData.Entete" :page-color="pageMenu.Couleur" :text-dark="pageMenu.Texte_foncer"/>

    <div class="container-lt flex-grow flex-shrink mx-auto py-10">

      <h4 class="text-center mx-auto">{{ pageData.Titre_gal1 }}</h4>

      <ul class="flex flex-col items-center">
        <li v-for="image in pageGlr1" class="list-none my-5">
          <img :src="image.url" :alt="image"/>
        </li>
      </ul>

      <!--
            <client-only>
              <lightGallery
                :images="images"
                :index="index"
                :disable-scroll="true"
                @close="index = null"
              />

              <div v-for="(thumb, thumbIndex) in thumbs"
                   :key="thumbIndex"
                   @click="index = thumbIndex"
                   class="inline-block cursor-pointer overflow-hidden rounded w-28 h-28 m-3 border-2 border-gray-400 hover:border-gray-200"
              >
                <img :src="thumb" alt="" class="w-full h-full object-cover"/>
              </div>
            </client-only>
      -->


      <h4 class="text-center mx-auto my-5">{{ pageData.Titre_gal2 }}</h4>

      <ul class="flex flex-col items-center">
        <li v-for="image in pageGlr2" class="list-none my-5">
          <img :src="image.url" :alt="image"/>
        </li>
      </ul>

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
    const pageGlr1 = pageData.atelier_const_imgs
    const pageGlr2 = pageData.atelier_music_imgs

    return {
      pageMenu,
      pageData,
      pageGlr1,
      pageGlr2
    }
  },
  data() {
    return {
      route: this.$route.name,
      index: null,
      images: [
        'https://res.cloudinary.com/lutherie-urbaine-93/image/upload/v1622813991/atel_const_02_6b30124a58.jpg',
        'https://res.cloudinary.com/lutherie-urbaine-93/image/upload/v1622813990/atel_const_01_caf1cbfd31.jpg'
      ],
      thumbs: [
        'https://res.cloudinary.com/lutherie-urbaine-93/image/upload/v1622813991/thumbnail_atel_const_02_6b30124a58.jpg',
        'https://res.cloudinary.com/lutherie-urbaine-93/image/upload/v1622813990/thumbnail_atel_const_01_caf1cbfd31.jpg'
      ]
    }
  },
  computed: {
    imgGlrA() {
      return this.pageGlr1.forEach(e => e.url)
    },
    thumbName() {
      return this.images.forEach(e => {
      })
    }
  },
  head() {
    return {
      title: 'Lutherie Urbaine 9.3 - Pédagogie de la création',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Les activités pédagogiques de création au sein de Lutherie Urbaine 9.3'
        }
      ]
    }
  },
}
</script>

<style scoped>
.container-lt {
  flex-basis: auto
}
</style>
