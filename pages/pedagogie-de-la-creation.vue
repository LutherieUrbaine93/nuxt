<template>
  <div class="flex flex-col min-h-screen">

    <MenuNav :page-route="route"/>

    <PageHeader :page-title="pageData.Entete" :page-color="pageMenu.Couleur" :text-dark="pageMenu.Texte_foncer"/>

    <div class="container-lt flex-grow mx-auto justify-center py-10">

      <h4 class="text-center mx-auto mb-5">{{ pageData.Titre_gal1 }}</h4>

      <image-gallery :gallery="imgsConst"/>

      <div class="wrapper-row">
        <div class="w-1/3 sm:w-1/6 h-0.5 my-14" :style="{ backgroundColor: pageMenu.Couleur }"></div>
      </div>

      <h4 class="text-center mx-auto mb-5">{{ pageData.Titre_gal2 }}</h4>

      <image-gallery :gallery="imgsMusic"/>

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
    const imgsConst = pageData.atelier_const_imgs
    const imgsMusic = pageData.atelier_music_imgs

    return {
      pageMenu,
      pageData,
      imgsConst,
      imgsMusic
    }
  },
  data() {
    return {
      route: this.$route.name,
      index: null,
      imgsConst: [],
      imgsMusic: []
    }
  },
  computed: {
    gallery1() {
      // return this.images.map(({ url }) => url)
      return this.imgsConst.map(a => a.url)
    },
    gallery2() {
      return this.imgsMusic.map(a => a.url)
    },
    thumbs1() {
      let thumbnails = []
      this.gallery1.forEach(e => {
        const urlSgmt = e.slice(0, e.lastIndexOf("/") + 1)
        const imgName = e.split("/").pop()
        const thumbnail = urlSgmt + 'thumbnail_' + imgName
        thumbnails.push(thumbnail)
      })
      return thumbnails
    },
    thumbs2() {
      let thumbnails = []
      this.gallery2.forEach(e => {
        const urlSgmt = e.slice(0, e.lastIndexOf("/") + 1)
        const imgName = e.split("/").pop()
        const thumbnail = urlSgmt + 'thumbnail_' + imgName
        thumbnails.push(thumbnail)
      })
      return thumbnails
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
