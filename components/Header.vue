<template>
  <header :style="{ backgroundColor: pageColor }">
    <h1 v-if="textDark" style="color:#212121">{{ pageTitle }}</h1>
    <h1 v-else>{{ pageTitle }}</h1>

  </header>

</template>

<script>
// import CatService from "~/services/CatService";

export default {
  name: 'TheHeader',
  props: {
    pageTitle: '',
    pageColor: '',
    textDark: false
  }
}
</script>

<style>
</style>
