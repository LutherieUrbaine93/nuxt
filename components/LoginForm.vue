<template>
  <div class="w-4/5 mx-auto text-center m-5">
    <div v-show="error !== ''" class="p-3 border">
      <p>{{ error }}</p>
    </div>
    <h2 class="m-3">Login</h2>
    <form @submit="loginUser">
      <div>
        <input
          v-model="identifier"
          class="text-gray-800 w-full p-3 my-5 border"
          type="email"
          placeholder="email"
        />
      </div>
      <div>
        <input
          v-model="password"
          class="text-gray-800 w-full p-3 my-5 border"
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <button
          :disabled="identifier === '' || password === ''"
          class="button bg-transparent hover:bg-gray-700 px-5 py-2 rounded border border-gray-500"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      identifier: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async loginUser(e) {
      e.preventDefault()
      try {
        const user = await this.$strapi.login({
          identifier: this.identifier,
          password: this.password,
        })
        if (user !== null) {
          this.error = ''
          this.$nuxt.$router.push('/users')
        }
      } catch (error) {
        this.error = 'Error in login credentials'
      }
    },
  },
  middleware: 'authenticated',
}
</script>

<style scoped>

</style>
