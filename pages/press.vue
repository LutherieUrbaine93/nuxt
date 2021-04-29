<template>
  <div>
    <h1>Page "Presse"</h1>
<!--    <pre>{{ pressArticles }}</pre>-->
  </div>
</template>

<script>
import AxiosFetchData from '~/services/AxiosFetchData.js'

export default {
  head() {
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
  data() {
    return {
      pressArticles: []
    }
  },
  async asyncData({route}) {
    const response = await AxiosFetchData.getByRoute(route.name)
    const pressArticles = response.data
    console.log(route)

    return {
      pressArticles
    }
  }
}
</script>
