<template>
  <div>
    <MenuNav :pageRoute="route"/>

    <PageHeader :pageTitle="data.Entete" :pageColor="data.Couleur" :textDark="data.Texte_foncer"/>

    <div class="container mx-auto py-10">

      <h4 class="md:w-2/3 text-center mx-auto">{{ data.Introduction }}</h4>

      <h3 class="md:w-2/3 lg:w-1/2 text-center mx-auto py-14">{{ data.Periode }}</h3>

      <div class="wrapper-row items-stretch">

        <div v-for="crea in creas" class="p-1.5 lg:w-1/4">
          <a v-if="crea.Lien && crea.Lien.startsWith('http')" :href="crea.Lien">
            <div class="rounded-t p-4 border-2" :style="{ borderColor: data.Couleur }">
              <h4 class="text-center">{{ crea.Titre }}</h4>
              <p class="whitespace-pre-line mt-5">{{ crea.Texte }}</p>
            </div>
            <div class="rounded-b p-1 border-2" :style="{ borderColor: data.Couleur, backgroundColor: data.Couleur }">
              <p v-if="data.Texte_foncer" class="text-center text-gray-800 opacity-80">{{ data.Cliquable }}</p>
              <p v-else class="text-center opacity-80">{{ data.Cliquable }}</p>
            </div>
          </a>
          <nuxt-link v-else-if="crea.Lien" :to="crea.Lien">
            <div class="rounded-t p-4 border-2" :style="{ borderColor: data.Couleur }">
              <h4 class="text-center">{{ crea.Titre }}</h4>
              <p class="whitespace-pre-line mt-5">{{ crea.Texte }}</p>
            </div>
            <div class="rounded-b p-1 border-2" :style="{ borderColor: data.Couleur, backgroundColor: data.Couleur }">
              <p v-if="data.Texte_foncer" class="text-center text-gray-800 opacity-80">{{ data.Cliquable }}</p>
              <p v-else class="text-center opacity-80">{{ data.Cliquable }}</p>
            </div>
          </nuxt-link>
          <div v-else class="rounded p-4 border-2" :style="{ borderColor: data.Couleur }">
            <h4 class="text-center">{{ crea.Titre }}</h4>
            <p class="whitespace-pre-line mt-5">{{ crea.Texte }}</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import AxiosFetchData from "~/services/AxiosFetchData";

export default {
  head() {
    return {
      title: 'Lutherie Urbaine 9.3 - Créations tous terrains',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'La variété des créations artistiques que Lutherie Urbaine 9.3 vous réserve cette saison'
        }
      ]
    }
  },
  data() {
    return {
      route: this.$route.name
    }
  },
  async asyncData({route}) {
    const response = await AxiosFetchData.getByRoute(route.name)
    const data = response.data

    const creations = await AxiosFetchData.getByRoute('creations')
    const creas = creations.data

    return {
      data,
      creas
    }
  }
}
</script>
