<template>
  <div class="container">
    <div>
      <h1 class="title">Lutherie Urbaine 9.3</h1>
    </div>

    <MenuIntro :categories="categories" />

  </div>
</template>

<script>

export default {
  layout: 'intro',
  head () {
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
  asyncData({ $axios }) {
    return $axios.get('https://lutherieurbaine93.herokuapp.com/categories').then(response => {
      return {
        categories: response.data
      }
    })
  }
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS*/
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
  flex-direction: column;
}

</style>
