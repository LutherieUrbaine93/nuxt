<template>
  <div>
    <h1>Page "Pédagogie de la création"</h1>
    <pre>{{ catData }}</pre>
  </div>
</template>

<script>

export default {
  head () {
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
  asyncData({ $axios }) {
    // const id = context.params.id
    const id = '607a9fe2aabac016c4ea01fe'
    return $axios.get(`https://lutherieurbaine93.herokuapp.com/categories/${id}`).then(response => {
      return {
        catData: response.data
      }
    })
  }
}
</script>
