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
      title: 'Lutherie Urbaine 9.3 - Écouter Voir',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Les diffusions audios et vidéos de Lutherie Urbaine 9.3'
        }
      ]
    }
  },
  asyncData({ $axios }) {
    // const id = context.params.id
    const id = '607aa22eaabac016c4ea0204'
    return $axios.get(`https://lutherieurbaine93.herokuapp.com/categories/${id}`).then(response => {
      return {
        catData: response.data
      }
    })
  }
}
</script>
