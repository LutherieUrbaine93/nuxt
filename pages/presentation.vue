<template>
  <div>
    <MenuNav :page-route="route"/>

    <PageHeader :page-title="pageData.Entete" :page-color="pageMenu.Couleur" :text-dark="pageMenu.Texte_foncer"/>

    <div class="container-lt mx-auto py-10">

      <h4 class="md:w-2/3 text-center mx-auto">{{ pageData.Introduction }}</h4>

      <img class="sm:w-1/3 lg:w-1/4 m-auto mt-8" :src="pageData.Intro_img.url" alt="dans un sourire">

      <p class="text-center mx-auto py-14">{{ pageData.Historique }}</p>

      <div class="flex flex-wrap items-stretch">
        <nuxt-link to="/pedagogie-de-la-creation" class="link p-1.5 lg:w-1/3">
          <div class="box shadow-md">
            <div class="text-center rounded-t p-4" :style="{ backgroundColor: pedaMenu.Couleur }">
              <h4 v-if="pedaMenu.Texte_foncer" class="text-gray-900">{{ pageData.Titre_cat1 }}</h4>
              <h4 v-else>{{ pageData.Titre_cat1 }}</h4>
            </div>
            <div class="bg-gray-100 rounded-b border-2 p-4" :style="{ borderColor: pedaMenu.Couleur }">
              <p class="text-gray-900">{{ pageData.Texte_cat1 }}</p>
            </div>
          </div>
        </nuxt-link>

        <nuxt-link to="/creations-tous-terrains" class="link p-1.5 lg:w-1/3">
          <div class="box shadow-md">
            <div class="text-center rounded-t p-4" :style="{ backgroundColor: creaMenu.Couleur }">
              <h4 v-if="creaMenu.Texte_foncer" class="text-gray-900">{{ pageData.Titre_cat2 }}</h4>
              <h4 v-else>{{ pageData.Titre_cat2 }}</h4>
            </div>
            <div class="bg-gray-100 rounded-b border-2 p-4" :style="{ borderColor: creaMenu.Couleur }">
              <p class="text-gray-900">{{ pageData.Texte_cat2 }}</p>
            </div>
          </div>
        </nuxt-link>

        <nuxt-link to="/instrumentarium" class="link p-1.5 lg:w-1/3">
          <div class="box shadow-md">
            <div class="text-center rounded-t p-4" :style="{ backgroundColor: instMenu.Couleur }">
              <h4 v-if="instMenu.Texte_foncer" class="text-gray-900">{{ pageData.Titre_cat3 }}</h4>
              <h4 v-else>{{ pageData.Titre_cat3 }}</h4>
            </div>
            <div class="bg-gray-100 rounded-b border-2 p-4" :style="{ borderColor: instMenu.Couleur }">
              <p class="text-gray-900">{{ pageData.Texte_cat3 }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>

      <div class="wrapper-row">
        <div class="w-1/3 sm:w-1/6 h-0.5 my-10" :style="{ backgroundColor: pageMenu.Couleur }"></div>
      </div>

      <!-- Les cofondateurs & amis -->
      <h2 class="text-center mx-auto">{{ pageData.Sous_titre1 }}</h2>
      <div class="flex flex-wrap sm:flex-nowrap mt-5">
        <div v-for="collab in collaborateurs" :key="collab.Ordre" class="p-1 w-1/2 sm:w-1/8">
          <img :src="collab.Photo.url" :alt="collab.Prenom" class="rounded-full"/>
          <h5 class="text-center mt-2">{{ collab.Prenom }}</h5>
        </div>
      </div>

      <div class="wrapper-row">
        <div class="w-1/3 sm:w-1/6 h-0.5 my-14" :style="{ backgroundColor: pageMenu.Couleur }"></div>
      </div>

      <!-- Le Bureau d’association 202...
      <h2 class="md:w-2/3 text-center mx-auto">{{ pageData.Sous_titre2 }}</h2>
      <div class="flex flex-col items-center lg:px-24 xl:px-40 mt-5">
        <div v-for="associe in associes" :key="associe.Ordre" class="lg:w-1/4 p-5">
          <h4 class="text-center mt-2">{{ associe.Personne }}</h4>
          <p class="text-center">{{ associe.Fonction }}</p>
        </div>
      </div>

      <div class="wrapper-row">
        <div class="w-1/3 sm:w-1/6 h-0.5 my-14" :style="{ backgroundColor: pageMenu.Couleur }"></div>
      </div>
      -->
      <div class="flex justify-evenly flex-wrap">
        <!-- Structures partenaires -->
        <div class="bg-gray-800 px-2 sm:px-8 py-3 sm:my-14 rounded">
          <h2 class="text-center mx-auto underline">{{ pageData.Sous_titre3 }}</h2>
          <div class="flex flex-col mt-5">
            <p v-for="partenaire in partenaires" :key="partenaire.Ordre" class="p-3">
              <a v-if="partenaire.Lien" :href="partenaire.Lien" target="_blank">
                <span class="font-black underline">{{ partenaire.Nom }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-flex" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
              <span v-else class="font-black">{{ partenaire.Nom }}</span>
              <span v-if="partenaire.Lieu">- {{ partenaire.Lieu }}</span>
            </p>
          </div>
        </div>

        <!-- Copyrights -->
        <div class="bg-gray-800 px-2 sm:px-8 py-3 my-10 sm:my-14 rounded">
          <h2 class="text-center mx-auto underline">{{ pageData.Sous_titre4 }}</h2>
          <div class="flex flex-col mt-5">
            <p class="p-3"><span class="font-black">{{ pageData.Medium1 }}</span> {{ pageData.Med_pers1 }}</p>
            <p class="p-3"><span class="font-black">{{ pageData.Medium2 }}</span> {{ pageData.Med_pers2 }}</p>
            <p class="p-3"><span class="font-black">{{ pageData.Medium3 }}</span> {{ pageData.Med_pers3 }}</p>
          </div>
        </div>

      </div>

      <div class="wrapper-row">
        <div class="w-1/3 sm:w-1/6 h-0.5 my-14" :style="{ backgroundColor: pageMenu.Couleur }"></div>
      </div>

      <!-- Contact Form -->
      <div class="flex justify-center">
        <div class="sm:w-2/3">
          <ContactForm/>
        </div>
      </div>

    </div>

    <PageFooter :page-color="pageMenu.Couleur"/>

  </div>
</template>

<script>
export default {
  async asyncData({$strapi, route}) {
    // Fetch page data:
    const pageData = await $strapi.find(route.name)
    const pageMenu = pageData.menu
    // Categories menu Titles & Colors:
    const pedaData = await $strapi.find('pedagogie-de-la-creation')
    const pedaMenu = pedaData.menu
    const creaData = await $strapi.find('creations-tous-terrains')
    const creaMenu = creaData.menu
    const instData = await $strapi.find('instrumentarium')
    const instMenu = instData.menu
    // Sorted contents: https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/content-api.html#sort
    const sortAsc = '?_sort=Ordre:ASC'
    const collaborateurs = await $strapi.find(`collaborateurs${sortAsc}`)
    const associes = await $strapi.find(`associes${sortAsc}`)
    const partenaires = await $strapi.find(`partenaires${sortAsc}`)

    return {
      pageMenu,
      pageData,
      pedaMenu,
      creaMenu,
      instMenu,
      collaborateurs,
      associes,
      partenaires
    }
  },
  data() {
    return {
      route: this.$route.name,
    }
  },
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
  }
}
</script>

<style scoped>
.box {
  margin: 0; /* this for transition */
  transition: margin .1s ease-out;
  -webkit-transition: margin .1s ease-out;
}

.box:hover {
  margin: -1em 0 1em 0;
  transition: margin .1s ease-out;
  -webkit-transition: margin .1s ease-out;
}

/*
.link:nth-child(1) .box:hover {
  margin: -1em 1em 1em -1em
}
.link:nth-child(2) .box:hover {
  margin: -1em 0 1em 0
}
.link:nth-child(3) .box:hover {
  margin: -1em -1em 1em 1em
}*/
</style>
