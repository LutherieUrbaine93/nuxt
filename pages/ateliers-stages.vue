<template>
  <div>
    <MenuNav/>

    <header>
      <h4 class="text-center text-gray-400">Lutherie Urbaine 9.3</h4>
      <h2 class="page-title text-center my-0">Ateliers & Stages</h2>
    </header>

    <div class="wrapper container-lt" v-for="(atelier, index) in ateliers">
      <div class="frame">
        <!--      <h1 class="text-center text-gray-400"></h1>-->
        <div class="title">
          <h1 class="text-center my-px">{{ atelier.Titre }}</h1>
          <p class="text-center text-sm">{{ convertDate[index] }}</p>
        </div>
        <div v-html="$md.render(atelier.Description)"></div>
      </div>
    </div>
    <PageFooter/>
  </div>

</template>

<script>
export default {
  computed: {
    convertDate: function () {
      return this.ateliers.map((atel) => {
        const rawDate = atel.Date
        const dayDate = rawDate.substr(0, rawDate.indexOf('T'))
        const sptDate = dayDate.split("-")
        return `${sptDate[2]}/${sptDate[1]}/${sptDate[0]}`
      })
    }
  },
  async asyncData({$strapi, route}) {
    const page = route.path.substring(route.path.lastIndexOf('/') + 1) // removing slash at the begining of route.path
    const sort = '?_sort=Date:ASC'
    const ateliers = await $strapi.find(page + sort)

    console.log(ateliers)

    return {ateliers}
  },
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
