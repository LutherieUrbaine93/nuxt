<template>
  <div class="container flex items-center">
    <div>

      <h1 class="title"><LogoC class="fill-current h-12"/>Lutherie Urbaine 9.3</h1>
    </div>

    <MenuIntro :menus="menus"/>

    <IntroFooter/>

    <HelloAssoWidget/>

  </div>
</template>

<script>
import LogoC from "~/assets/svg/logoc.svg?inline"

export default {
  components: {LogoC},
  data() {
    return {
      menus: []
    }
  },
  async asyncData({$strapi}) {
    const sort = '?_sort=Ordre:ASC'
    const menus = await $strapi.find(`menus${sort}`)
    return {menus}
  },
  head() {
    return {
      title: 'Lutherie Urbaine 9.3',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'La fabrique des instruments à partir de matériaux récupérés'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  @apply min-h-screen justify-center;
  flex-direction: column;
}
</style>
