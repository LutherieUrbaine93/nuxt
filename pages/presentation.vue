<template>
  <div>
    <MenuNav :pageRoute="route"/>

    <PageHeader :pageTitle="data.Entete" :pageColor="data.Couleur" :textDark="data.Texte_foncer"/>

    <div class="container mx-auto py-10">

      <h4 class="md:w-2/3 text-center mx-auto">{{ data.Introduction }}</h4>

      <p class="md:w-2/3 lg:w-1/2 text-center mx-auto py-14">{{ data.Historique }}</p>

      <div class="wrapper-row items-stretch">

        <div class="cat-box p-1.5 lg:w-1/4">
          <nuxt-link to="/pedagogie-de-la-creation" class="h-full shadow-md">
            <div class="text-center rounded-t p-4" :style="{ backgroundColor: pedagogyData.Couleur }">
              <h4 v-if="pedagogyData.Texte_foncer" class="text-gray-900">{{ data.Titre_cat1 }}</h4>
              <h4 v-else>{{ data.Titre_cat1 }}</h4>
            </div>
            <div class="bg-gray-100 rounded-b border-2 p-4" :style="{ borderColor: pedagogyData.Couleur }">
              <p class="text-gray-900">{{ data.Texte_cat1 }}</p>
            </div>
          </nuxt-link>
        </div>

        <div class="cat-box p-1.5 lg:w-1/4">
          <nuxt-link to="/creations-tous-terrains">
            <div class="text-center rounded-t p-4" :style="{ backgroundColor: creationsData.Couleur }">
              <h4 v-if="creationsData.Texte_foncer" class="text-gray-900">{{ data.Titre_cat2 }}</h4>
              <h4 v-else>{{ data.Titre_cat2 }}</h4>
            </div>
            <div class="bg-gray-100 rounded-b border-2 p-4" :style="{ borderColor: creationsData.Couleur }">
              <p class="text-gray-900">{{ data.Texte_cat2 }}</p>
            </div>
          </nuxt-link>
        </div>

        <div class="cat-box p-1.5 lg:w-1/4">
          <nuxt-link to="/instrumentarium">
            <div class="text-center rounded-t p-4" :style="{ backgroundColor: instrumentData.Couleur }">
              <h4 v-if="instrumentData.Texte_foncer" class="text-gray-900">{{ data.Titre_cat3 }}</h4>
              <h4 v-else>{{ data.Titre_cat3 }}</h4>
            </div>
            <div class="bg-gray-100 rounded-b border-2 p-4" :style="{ borderColor: instrumentData.Couleur }">
              <p class="text-gray-900">{{ data.Texte_cat3 }}</p>
            </div>
          </nuxt-link>
        </div>

      </div>

      <div>
        <!--        <pre>{{ data }}</pre>-->
      </div>
    </div>

    <PageFooter/>
  </div>
</template>

<script>
import AxiosFetchData from "~/services/AxiosFetchData";

export default {
  head() {
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
  data() {
    return {
      route: this.$route.name
    }
  },
  async asyncData({route}) {
    const category = await AxiosFetchData.getByRoute(route.path)
    const data = category.data

    const pedagogy = await AxiosFetchData.getByRoute('pedagogie-de-la-creation')
    const pedagogyData = pedagogy.data

    const creations = await AxiosFetchData.getByRoute('creations-tous-terrains')
    const creationsData = creations.data

    const instrument = await AxiosFetchData.getByRoute('instrumentarium')
    const instrumentData = instrument.data

    return {
      data,
      pedagogyData,
      creationsData,
      instrumentData
    }
  }
}
</script>

<style scoped>
.cat-box {
  margin: 0; /* this for transition */
  transition: margin .1s ease-out;
  -webkit-transition: margin .1s ease-out;
}
.cat-box:hover {
  transition: margin .1s ease-out;
  -webkit-transition: margin .1s ease-out;
}

.cat-box:hover {
  margin: -1em 0 0 0
}
</style>
