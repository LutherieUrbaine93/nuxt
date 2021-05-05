<template>
  <div>
    <MenuNav :pageRoute="route"/>

    <PageHeader :pageTitle="data.Entete" :pageColor="data.Couleur" :textDark="data.Texte_foncer"/>

    <div class="container mx-auto py-10">
      <h1>Page "Presse"</h1>
      <pre>{{ data }}</pre>
    </div>

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
      route: this.$route.name,
      data: []
    }
  },
  async asyncData({route}) {
    const response = await AxiosFetchData.getByRoute(route.name)
    const data = response.data
    return {
      data
    }
  }
}
</script>
