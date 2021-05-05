<template>
  <div>
    <MenuNav :pageRoute="route"/>

    <PageHeader :pageTitle="data.Entete" :pageColor="data.Couleur" :textDark="data.Texte_foncer"/>

    <div class="container mx-auto py-10 flex flex-col items-center">

      <div v-for="parution in parusData"
           class="lg:w-1/2 mb-14">
        <h4 class="mb-2">{{ parution.Titre }}</h4>
        <p>{{ parution.Texte }}</p>
        <p class="text-right"><span class="font-bold">{{ parution.Magazine }}</span> – {{ parution.Auteur }}</p>
      </div>
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

    const parutions = await AxiosFetchData.getByRoute('parutions')
    const parusData = parutions.data

    return {
      data,
      parusData
    }
  }
}
</script>
