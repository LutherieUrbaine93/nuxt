<template>
  <div>
    <MenuNav :pageRoute="route"/>

    <PageHeader :pageTitle="data.Entete" :pageColor="data.Couleur" :textDark="data.Texte_foncer"/>

    <div class="container mx-auto py-10">
      <h1>Page "Actualités"</h1>
      <pre>{{ data }}</pre>
    </div>

  </div>
</template>

<script>
import AxiosFetchData from "~/services/AxiosFetchData";

export default {
  head() {
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
  data () {
    return {
      route: this.$route.name
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
