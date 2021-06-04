<template>
  <div class="flex flex-col min-h-screen">

    <MenuNav :page-route="route"/>

    <PageHeader :page-title="pageData.Entete" :page-color="pageMenu.Couleur" :text-dark="pageMenu.Texte_foncer"/>

    <div class="container-lt flex-grow flex-shrink mx-auto py-10">

      <h4 class="text-center mx-auto">{{ pageData.Titre_gal1 }}</h4>

      <ul class="flex flex-col items-center">
        <li v-for="image in pageData.atelier_const_imgs" class="list-none my-5">
          <img :src="image.url" :alt="image"/>
        </li>
      </ul>

<!--      <image-gallery/>-->

<!--
      <image-gallery :imgs="[
          {
            src: 'https://res.cloudinary.com/lutherie-urbaine-93/image/upload/v1622813991/atel_const_02_6b30124a58.jpg',
            thumbnail: 'https://res.cloudinary.com/lutherie-urbaine-93/image/upload/v1622813991/thumbnail_atel_const_02_6b30124a58.jpg',
            w: 200, h: 300,
            alt: 'atel_const_02',
            title: 'Atelier construction'
          },
          {
            src: 'https://picsum.photos/200/300',
            thumbnail: 'https://picsum.photos/200/300',
            w: 200, h: 300,
            alt: 'random picture from picsum.photos to demonstrate the vue-picture-swipe component',
            title: 'Some Picture'
          }
          ]"/>
-->

      <h4 class="text-center mx-auto my-5">{{ pageData.Titre_gal2 }}</h4>

      <ul class="flex flex-col items-center">
        <li v-for="image in pageData.atelier_music_imgs" class="list-none my-5">
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

    return {
      pageMenu,
      pageData
    }
  },
  data() {
    return {
      route: this.$route.name
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
  }
}
</script>

<style scoped>
.container-lt {
  flex-basis: auto
}
</style>
