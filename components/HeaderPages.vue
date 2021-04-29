<template>
  <header :style="{ backgroundColor: pageColor }">
<!--    <h1 classe="page-title" v-if="$fetchState.pending" style="color:#212121">Lutherie Urbaine 9.3</h1>-->
    <h1 classe="page-title" v-if="textDark" style="color:#212121">{{ pageTitle }}</h1>
    <h1 classe="page-title" v-else>{{ pageTitle }}</h1>

  </header>

</template>

<script>
// import CatService from "~/services/CatService";

export default {
  name: 'Header',
  props: {
    pageTitle: '',
    pageColor: '',
    textDark: false
  }
}
</script>

<style>
</style>
