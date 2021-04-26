<template>
  <div>
    <h1>Page "Actualités"</h1>
    <pre>{{ catData }}</pre>
  </div>
</template>

<script>

export default {
  head () {
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
  },
  asyncData({ $axios }) {
    // const id = context.params.id
    const id = '607aa0b6aabac016c4ea0200'
    return $axios.get(`https://lutherieurbaine93.herokuapp.com/categories/${id}`).then(response => {
      return {
        catData: response.data
      }
    })
  }
}
</script>
