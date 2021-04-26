<template>
  <div>
    <h1>Page "Instrumentarium"</h1>
    <pre>{{ catData }}</pre>
  </div>
</template>

<script>

export default {
  head () {
    return {
      title: 'Lutherie Urbaine 9.3 - Instrumentarium',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Les instruments insolites exclusivements fabriqués par Lutherie Urbaine 9.3'
        }
      ]
    }
  },
  asyncData({ $axios }) {
    // const id = context.params.id
    const id = '607aa1b0aabac016c4ea0202'
    return $axios.get(`https://lutherieurbaine93.herokuapp.com/categories/${id}`).then(response => {
      return {
        catData: response.data
      }
    })
  }
}
</script>
