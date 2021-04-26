<template>
  <div class="container mx-auto py-10">
    <h2 class="text-center text-gray-400">Expositions d’instruments de musique</h2>
    <h1 class="text-center my-px">{{ activData.Theme }}</h1>

    <div id="activites">

      <div class="moon">
        <div class="circle-text text-center">
          <h3>{{ activData.Description1 }}</h3>
        </div>
        <div class="circle-overlay">
          <h1>{{ activData.Mot_cle1 }}</h1>
        </div>
      </div>

      <div class="moon">
        <div class="circle-text text-center">
          <h3>{{ activData.Description2 }}</h3>
        </div>
        <div class="circle-overlay">
          <h1>{{ activData.Mot_cle2 }}</h1>
        </div>
      </div>

      <div class="moon">
        <div class="circle-text text-center">
          <h3>{{ activData.Description3 }}</h3>
        </div>
        <div class="circle-overlay">
          <h1>{{ activData.Mot_cle3 }}</h1>
        </div>
      </div>

      <div class="moon">
        <div class="circle-text text-center">
          <h3>{{ activData.Description4 }}</h3>
          <nuxt-link
            class="button px-4 py-2 text-xs font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            to="/activites/ateliers_stages">
            Ateliers & Stages
          </nuxt-link>

        </div>
        <div class="circle-overlay">
          <h1>{{ activData.Mot_cle4 }}</h1>
        </div>
      </div>

    </div>
    <div class="text text-center">
      <h2>{{ activData.Texte }}</h2>
    </div>

    <!--     <pre>{{ activDataObjMots }}</pre>
        <pre>{{ activDataObjDesc }}</pre>
        <pre>{{ MotsDescObj }}</pre>
           <div v-for="activity in activities">
            </div>-->
  </div>
</template>

<script>
// import CatService from '@/services/CatService.js'
import axios from 'axios'

export default {
  head () {
    return {
      title: 'Lutherie Urbaine 9.3 - Nous proposons',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Activités d'expression et de création, proposées par l'association Lutherie Urbaine 9.3"
        }
      ],
      script: [
        {
          type: 'module',
          src: 'js/AnimatedCircles.js'
        }
      ]
    }
  },
  async asyncData({ route }) {
    const api = `https://lutherieurbaine93.herokuapp.com/${ route.name }`
    const response = await axios.get(api)
    const activData = response.data

/*    const activDataArray = Object.entries(activData)
    // Object for "Mot_cles":
    const activDataArrayMots = activDataArray.filter(([key, value]) => key.startsWith('Mot_cle'))
    const activDataObjMots = Object.fromEntries(activDataArrayMots)
    // Object for "Mot_cles":
    const activDataArrayDesc = activDataArray.filter(([key, value]) => key.startsWith('Description'))
    const activDataObjDesc = Object.fromEntries(activDataArrayDesc)
    const MotsDescObj = {...activDataObjMots, ...activDataObjDesc}*/

    return {
      activData,
/*      activDataArray,
      activDataObjMots,
      activDataObjDesc,
      MotsDescObj*/
    }
  }

}
</script>

<style scoped>
#activites {
  display: flex;
  flex-wrap: wrap;
  /*flex-flow: column wrap;*/
  justify-content: center; /* space-around */
  align-items: center;
}
.moon {
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
.moon:hover .circle-overlay {
  opacity: 0;
  visibility: hidden;
  transition: all .35s ease-in-out, ;
  transition-property: opacity, visibility;
}
.circle-overlay h1 {
  color: #212121;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
  transition: opacity .55s ease-in-out;
}
.moon:hover .circle-overlay h1 {
  opacity: 0;
  transition: opacity .15s ease-in-out;
}

.text {
  margin: 10vh auto;
  padding: 0 1em;
  white-space: pre-line;
}
</style>
