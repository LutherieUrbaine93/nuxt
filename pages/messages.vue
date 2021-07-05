<template>

  <div class="flex flex-col min-h-screen">

    <MenuNav/>

    <header class="flex-grow-0 flex-shrink bg-gray-800 py-3">
      <h2 class="page-title text-center my-0">Messages reçus :</h2>
    </header>

    <div class="container-lt flex-grow flex-shrink mx-auto py-10">

      <!-- If messages UNSEEN yet:-->
      <div v-if="msg.viewed === false"
           v-for="(msg, index) in messages"
           class="border border-gray-500 hover:border-blue-300 rounded cursor-pointer p-5 mb-8"
           @click="view(msg, msg.id)">

        <p class="bg-gray-200 text-gray-900 inline-block px-1.5 mb-1">
          Reçu le <span class="font-bold">{{ convertDate[index] }}</span> à <span class="font-bold">{{ convertHour[index] }}</span>
        </p>
        <h5>Message de : {{ msg.name }}</h5>
        <h5>Email : {{ msg.email }}</h5>
        <h5 v-if="msg.phone">Tél : {{ msg.phone }}</h5>
        <p>{{ msg.message }}</p>
      </div>

      <h3 class="page-title text-center my-5">Déjà lus :</h3>

      <!-- If messages SEEN:-->
      <div v-if="msg.viewed" v-for="(msg, index) in messages" class="mb-8">
        <p class="bg-gray-200 text-gray-900 inline-block px-1.5 mb-1">
          Reçu le <span class="font-bold">{{ convertDate[index] }}</span> à <span class="font-bold">{{ convertHour[index] }}</span>
        </p>
        <h5>Message de : {{ msg.name }}</h5>
        <h5>Email : {{ msg.email }}</h5>
        <h5 v-if="msg.phone">Tél : {{ msg.phone }}</h5>
        <p>{{ msg.message }}</p>
      </div>

    </div>

    <PageFooter/>

  </div>


</template>

<script>
export default {
  async asyncData({$strapi}) {
    // Sorted contents: https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/content-api.html#sort
    const sortDesc = '?_sort=createdAt:DESC'
    const messages = await $strapi.find(`messages${sortDesc}`)

    return {
      messages
    }
  },
  computed: {
    convertDate: function () {
      return this.messages.map((msg) => {
        const rawDate = msg.createdAt
        const dayDate = rawDate.substr(0, rawDate.indexOf('T'))
        const sptDate = dayDate.split("-")
        return `${sptDate[2]}/${sptDate[1]}/${sptDate[0]}`
      })
    },
    convertHour: function () {
      return this.messages.map((msg) => {
        const rawDate = msg.createdAt
        return rawDate.substr(rawDate.indexOf('T') + 1, 5)
      })
    }
  },
  methods: {
    async view(msg, id) {
      try {
        await this.$strapi.update('messages', id, {
          viewed: true
        })
      console.log(id)
      } catch (error) {
        this.error = error.message
      }
      // Set in 'viewed' list without having to refresh:
      msg.viewed = true
    }
  }
}
</script>

<style scoped>

</style>
