<template>
  <div>
    <MenuNav :pageRoute="route"/>

    <PageHeader :pageTitle="data.Entete" :pageColor="data.Couleur" :textDark="data.Texte_foncer"/>

    <div class="container mx-auto py-10">
      <h4 class="md:w-2/3 text-center mx-auto">{{ data.Introduction }}</h4>
    </div>

  </div>
</template>

<script>
import AxiosFetchData from "~/services/AxiosFetchData";

export default {
  head() {
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
