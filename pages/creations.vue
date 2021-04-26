<template>
  <div>
    <h1>Page "Créations tous terrains"</h1>
    <pre>{{ catData }}</pre>
  </div>
</template>

<script>

export default {
  head () {
    return {
      title: 'Lutherie Urbaine 9.3 - Créations tous terrains',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'La variété des créations artistiques que Lutherie Urbaine 9.3 vous réserve cette saison'
        }
      ]
    }
  },
  asyncData({ $axios }) {
    // const id = context.params.id
    const id = '607aa037aabac016c4ea01ff'
    return $axios.get(`https://lutherieurbaine93.herokuapp.com/categories/${id}`).then(response => {
      return {
        catData: response.data
      }
    })
  }
}
</script>
