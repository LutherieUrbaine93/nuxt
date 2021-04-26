<template>
  <div>
    <h1>Page de Presentation</h1>
    <pre>{{ catData }}</pre>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Lutherie Urbaine 9.3 - Présentation',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Présentation de l'association Lutherie Urbaine 9.3"
        }
      ]
    }
  },
  asyncData({ $axios }) {
    // const id = context.params.id
    const id = '607a9f6faabac016c4ea01fd'
    return $axios.get(`https://lutherieurbaine93.herokuapp.com/categories/${id}`).then(response => {
      return {
        catData: response.data
      }
    })
  }
}
</script>
