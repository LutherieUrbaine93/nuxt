<template>
  <div class="container flex flex-col flex-grow flex-shrink items-center justify-center">

    <MenuIntro :menus="menus"/>
<!--    <HelloAssoWidget/>-->

  </div>
</template>

<script>
export default {
  layout: 'intro',
  async asyncData({$strapi}) {
    const sort = '?_sort=Ordre:ASC'
    const menus = await $strapi.find(`menus${sort}`)
    return {menus}
  },
  data() {
    return {
      menus: []
    }
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
  flex-basis: auto
}
</style>
