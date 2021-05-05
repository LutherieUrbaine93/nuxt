<template>
  <div class="container flex items-center">
    <div>
      <h1 class="title">Lutherie Urbaine 9.3</h1>
    </div>

    <MenuIntro :categories="menus"/>
<!--<pre>{{categories}}</pre>-->
  </div>
</template>

<script>
import AxiosFetchData from '~/services/AxiosFetchData.js'

export default {
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
  },
  asyncData() {
    return AxiosFetchData.getMenus().then(response => {
      return {
        menus: response.data
      }
    })
  }
}
</script>

<style scoped>
.container {
  @apply min-h-screen justify-center;
  flex-direction: column;
}
</style>
