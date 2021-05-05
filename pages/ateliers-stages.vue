<template>
  <div>
    <MenuNav/>

    <header>
      <h4 class="text-center text-gray-400">Lutherie Urbaine 9.3</h4>
      <h2 class="page-title text-center my-0">Ateliers & Stages</h2>
    </header>

    <div class="wrapper container-lt" v-for="atelier in ateliers">
      <div class="frame">
        <!--      <h1 class="text-center text-gray-400"></h1>-->
        <div class="title">
          <h1 class="text-center my-px">{{ atelier.Titre }}</h1>
        </div>
        <p>{{ atelier.Description }}</p>
      </div>
    </div>

    <PageFooter/>
  </div>

</template>

<script>
import AxiosFetchData from '~/services/AxiosFetchData.js'

export default {
  head() {
    return {
      title: 'Lutherie Urbaine 9.3 - Ateliers & Stages',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Les ateliers et stages d'expression artistique de Lutherie Urbaine 9.3"
        }
      ]
    }
  },
  async asyncData({route}) {
    const response = await AxiosFetchData.getByRoute(route.path)
    const ateliers = response.data

    return {ateliers}
  }
}
</script>

<style scoped>
header {
  padding: 3em 0 1em;
}

.wrapper {
  background-color: var(--bgColor2);
  margin: 2em 2em 0;
  padding: 1.5em;
}

.frame {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.title {
  background-color: var(--bgColor2);
  padding: 0 0 1.5em;
}

.title h1 {
  font-size: large;
}

@media only screen and (min-width: 640px) {
  .wrapper {
    margin: 2em auto 0;
    padding: 3em;
  }
  .frame {
    border: 1px solid var(--whitesmoke);
    padding: 2.5em 2em;
    flex-direction: row;

  }
  .title {
    position: absolute;
    top: -1.3em;
    padding: 0 .5em;
  }

  .title h1 {
    font-size: x-large;
  }
}

@media only screen and (min-width: 768px) {
  .title {
    top: -1.65em;
  }

  .title h1 {
    font-size: xx-large;
  }
}
</style>
