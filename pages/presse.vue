<template>
  <div>
    <h1>Page "Presse"</h1>
    <pre>{{ catData }}</pre>
  </div>
</template>

<script>

export default {
  head () {
    return {
      title: 'Lutherie Urbaine 9.3 - La presse en parle',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Extraits d'articles parus sur l'association Lutherie Urbaine 9.3"
        }
      ]
    }
  },
  asyncData() {
    // const id = context.params.id
    // const id = '607aa1d0aabac016c4ea0203'
    return CatService.getCats()
      .then(response => {
      // const catData = response.data
      // const thisCat = catData.find(o => o.Lien_page === 'presse')?.id
      return {
        catData: response.data
      }
      // return {
      //   catData: response.data
      // }
    })
/*    .then(response => {
      return {
        thisCatId: catData.find(o => o.name === 'creations')?.id
      }
    })*/
  }
}
</script>
