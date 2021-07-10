<template>
  <div class="flex flex-col min-h-screen">

    <MenuNav :page-route="route"/>

    <PageHeader :page-title="pageData.Entete" :page-color="pageMenu.Couleur" :text-dark="pageMenu.Texte_foncer"/>

    <div class="container-lt flex-grow flex-shrink mx-auto py-10">

      <h4 class="text-center text-gray-400">Expositions d’instruments de musique</h4>
      <h1 class="text-center my-px">{{ pageData.Theme }}</h1>

      <div class="flex flex-wrap justify-evenly items-stretch sm:pt-6">

        <div class="relative p-1.5 sm:w-1/3 mt-10">
          <div class="keyword absolute bg-gray-100 py-2 px-3 rounded">
            <h4 class="text-center text-gray-900">{{ pageData.Mot_cle1 }}</h4>
          </div>
          <div class="rounded p-4 pt-8 border-2 text-center" :style="{ borderColor: pageData.Couleur }">
            <p class="whitespace-pre-line">{{ pageData.Description1 }}</p>
            <div v-if="pageData.Document1" class="pt-8 pb-5">
              <a :href="pageData.Document1.url" target="_blank"
                 class="button px-4 py-2 text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
                Voir prospectus
              </a>
            </div>
          </div>
        </div>

        <div class="relative p-1.5 sm:w-1/3 mt-10">
          <div class="keyword absolute bg-gray-100 py-2 px-3 rounded">
            <h4 class="text-center text-gray-900">{{ pageData.Mot_cle2 }}</h4>
          </div>
          <div class="rounded p-4 pt-8 border-2 text-center" :style="{ borderColor: pageData.Couleur }">
            <p class="whitespace-pre-line">{{ pageData.Description2 }}</p>
            <div v-if="pageData.Document2" class="pt-8 pb-5">
              <a :href="pageData.Document2.url" target="_blank"
                 class="button px-4 py-2 text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
                Voir prospectus
              </a>
            </div>
          </div>
        </div>

      </div>


      <div class="flex flex-wrap justify-evenly items-stretch sm:pt-6">

        <div class="relative p-1.5 sm:w-1/3 mt-10">
          <div class="keyword absolute bg-gray-100 py-2 px-3 rounded">
            <h4 class="text-center text-gray-900">{{ pageData.Mot_cle3 }}</h4>
          </div>
          <div class="rounded p-4 pt-8 border-2 text-center" :style="{ borderColor: pageData.Couleur }">
            <p class="whitespace-pre-line">{{ pageData.Description3 }}</p>
            <div v-if="pageData.Document2" class="pt-8 pb-5">
              <a :href="pageData.Document2.url" target="_blank"
                 class="button px-4 py-2 text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
                Voir prospectus
              </a>
            </div>
          </div>
        </div>

        <div class="relative p-1.5 sm:w-1/3 mt-10">
          <div class="keyword absolute bg-gray-100 py-2 px-3 rounded">
            <h4 class="text-center text-gray-900">{{ pageData.Mot_cle4 }}</h4>
          </div>
          <div class="rounded p-4 pt-8 border-2 text-center" :style="{ borderColor: pageData.Couleur }">
            <p class="whitespace-pre-line">{{ pageData.Description4 }}</p>
            <div class="pt-8 pb-5">
              <nuxt-link
                class="button text-center px-4 py-2 text-xs font-semibold tracking-wider border-2 border-gray-300 rounded bg-red-700 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                to="/ateliers-stages">
                Ateliers & Stages
              </nuxt-link>
            </div>
          </div>
        </div>

      </div>

      <div class="flex flex-wrap justify-center sm:pt-8">
        <div class="sm:w-3/4 text-center mt-8">
          <h4>{{ pageData.Texte }}</h4>
        </div>
      </div>

    </div>

    <PageFooter :page-color="pageMenu.Couleur"/>

  </div>
</template>

<script>
export default {
  async asyncData({$strapi, route}) {
    // Fetch page data
    const pageData = await $strapi.find(route.name)
    const pageMenu = pageData.menu

    return {
      pageMenu,
      pageData
    }
  },
  data() {
    return {
      route: this.$route.name,
    }
  },
  head() {
    return {
      title: 'Lutherie Urbaine 9.3 - Nous proposons',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Activités d'expression et de création, proposées par l'association Lutherie Urbaine 9.3"
        }
      ]
    }
  }
}
</script>

<style scoped>
.container-lt {
  flex-basis: auto
}

.keyword {
  top: -1em;
  left: -.5em;
  transform: rotate(-8deg);
}

#activites {
  display: flex;
  flex-wrap: wrap;
  /*flex-flow: column wrap;*/
  justify-content: center; /* space-around */
  align-items: center;
}

.circle-item {
  position: relative;
  background-color: white;
  width: 250px;
  height: 250px;
  margin: 4vh 2vw 0;
  border-radius: 50%;

  transition-property: transform;
  transition-timing-function: ease-in-out;
}

.circle-text {
  position: absolute;
  color: #212121;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-text h3 {
  user-select: none;
}

.circle-text .button {
  position: absolute;
  bottom: 4em;
}

.circle-overlay {
  position: absolute;
  background-color: #cccccc;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  visibility: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity .25s ease-in-out;
  z-index: 1;
}

.circle-item:hover .circle-overlay {
  opacity: 0;
  visibility: hidden;
  transition: all .35s ease-in-out;
  transition-property: opacity, visibility;
}

.circle-overlay h1 {
  color: #212121;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
  transition: opacity .55s ease-in-out;
}

.circle-item:hover .circle-overlay h1 {
  opacity: 0;
  transition: opacity .15s ease-in-out;
}

.text {
  margin: 10vh auto;
  padding: 0 1em;
  white-space: pre-line;
}
</style>
