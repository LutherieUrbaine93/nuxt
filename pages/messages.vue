<template>

  <div class="flex flex-col min-h-screen">

    <MenuNav/>

    <header class="flex-grow-0 flex-shrink bg-gray-800 py-3">
      <h2 class="page-title text-center my-0">Messages envoyés :</h2>
    </header>

    <div class="container-lt flex-grow flex-shrink mx-auto py-10">

      <div>
        <div v-for="msg in messages" class="mb-5">
          <p>Envoyé le : {{ msg.createdAt }}</p>
          <h5>Message de : {{ msg.name }}</h5>
          <h5>Email : {{ msg.email }}</h5>
          <h5 v-if="msg.phone">Tél : {{ msg.phone }}</h5>
          <p>{{ msg.message }}</p>
        </div>
        <!--    <pre>{{messages}}</pre>-->
      </div>

    </div>

    <PageFooter/>

  </div>


</template>

<script>
export default {
  async asyncData({$strapi}) {
    // Sorted contents: https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/content-api.html#sort
    const sort = '?_sort=Ordre:ASC'
    const messages = await $strapi.find(`messages${sort}`)

    return {
      messages
    }
  },
}
</script>

<style scoped>

</style>
