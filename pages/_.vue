<template>

</template>

<script>
export default {
  middleware: [
    function({ redirect }) {
      return redirect(301, '/el?e=rnf')
    }
  ],
}
</script>

<style scoped>

</style>
