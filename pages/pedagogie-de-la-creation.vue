<template>
  <div class="flex flex-col min-h-screen">

    <MenuNav :page-route="route"/>

    <PageHeader :page-title="pageData.Entete" :page-color="pageMenu.Couleur" :text-dark="pageMenu.Texte_foncer"/>

    <div class="container-lt flex-grow mx-auto justify-center py-10">

      <h4 class="text-center mx-auto mb-5">{{ pageData.Titre_gal1 }}</h4>

      <div class="flex flex-wrap justify-center">
        <client-only>
          <lightGallery :images="gallery1" :index="index" :disable-scroll="true" @close="index = null"/>
          <div v-for="(thumb, thumbIndex) in thumbs1"
               :key="thumb"
               @click="index = thumbIndex"
               class="inline-block cursor-pointer overflow-hidden rounded w-28 h-28 m-3 border-2 border-gray-400 hover:border-gray-200"
          >
            <img :src="thumb" alt="" class="w-full h-full object-cover"/>
          </div>
        </client-only>
      </div>

      <div class="wrapper-row">
        <div class="w-1/3 sm:w-1/6 h-0.5 my-14" :style="{ backgroundColor: pageMenu.Couleur }"></div>
      </div>

      <h4 class="text-center mx-auto mb-5">{{ pageData.Titre_gal2 }}</h4>

      <div class="flex flex-wrap justify-center">
        <client-only>
          <lightGallery :images="gallery2" :index="index" :disable-scroll="true" @close="index = null"/>
          <div v-for="(thumb, thumbIndex) in thumbs2"
               :key="thumb"
               @click="index = thumbIndex"
               class="inline-block cursor-pointer overflow-hidden rounded w-28 h-28 m-3 border-2 border-gray-400 hover:border-gray-200"
          >
            <img :src="thumb" alt="" class="w-full h-full object-cover"/>
          </div>
        </client-only>
      </div>

      <!--      <ul class="flex flex-col items-center">
              <li v-for="image in imgsMusic" class="list-none my-5">
                <img :src="image.url" :alt="image"/>
              </li>
            </ul>-->

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
      imgsMusic: [],
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
