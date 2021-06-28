<template>

  <div class="flex flex-col min-h-screen">

    <MenuNav/>

    <header class="flex-grow-0 flex-shrink bg-gray-800 py-3">
      <h2 class="page-title text-center my-0">Bienvenue {{ $strapi.user.username }}</h2>
    </header>

    <div class="container-lt flex-grow flex-shrink mx-auto w-full py-10">

      <h3 class="text-center mb-5">Accéder à :</h3>

      <div class="sm:flex justify-center">

        <nuxt-link to="/messages"
                   class="bg-transparent hover:bg-gray-800 text-gray-400 font-semibold hover:text-gray-200 h-full px-4 border border-gray-500 hover:border-gray-400 rounded block sm:w-1/3 text-center p-10 m-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 m-auto" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"/>
          </svg>
          Messages reçus
        </nuxt-link>

        <a href="https://lutherieurbaine93.herokuapp.com/admin/"
           class="bg-transparent hover:bg-gray-800 text-gray-400 font-semibold hover:text-gray-200 h-full px-4 border border-gray-500 hover:border-gray-400 rounded block sm:w-1/3 text-center p-10 m-5"
           target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 m-auto" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
          Géstionnaire de Contenu
        </a>

      </div>

    </div>

    <PageFooter/>

  </div>


</template>

<script>
export default {}
</script>

<style scoped>

</style>
