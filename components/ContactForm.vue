<template>
  <div class="sm:w-1/3">
    <h2 class="text-center mx-auto pb-10">Envoyez-nous un message :</h2>
    <!-- This shows a success message if the form was submitted correctly. -->
    <div v-if="success" class="rounded bg-indigo-500 text-white text-lg p-4">
      <p>Merci ! Votre message a bien été envoyé, nous nous efforçons d'y répondre rapidement.</p>
    </div>
    <form
      v-else
      v-on:submit.prevent="sendMessage"
      class="grid grid-cols-1 gap-y-6 text-gray-900"
    >
      <!-- Here an error is displayed if something goes wrong -->
      <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
        Mince, quelque chose ne va pas. Avez-vous bien remplis toutes les parties ?
      </div>
      <div>
        <label for="full_name" class="sr-only">Vôtre nom*</label> <!-- Full name -->
        <div class="relative rounded-md shadow-sm">
          <input
            v-model="name"
            required
            name="name"
            id="full_name"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Vôtre nom*"
          />
        </div>
      </div>
      <div>
        <label for="email" class="sr-only">E-mail*</label> <!-- Email -->
        <div class="relative rounded-md shadow-sm">
          <input
            required
            v-model="email"
            name="email"
            id="email"
            type="email"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="E-mail*"
          />
        </div>
      </div>
      <div>
        <label for="phone" class="sr-only">Téléphone</label> <!-- Phone -->
        <div class="relative rounded-md shadow-sm">
          <input
            v-model="phone"
            name="phone"
            id="phone"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Téléphone"
          />
        </div>
      </div>
      <div>
        <label for="message" class="sr-only">Message</label>
        <div class="relative rounded-md shadow-sm">
          <textarea
            required
            v-model="message"
            name="message"
            id="message"
            rows="4"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Message*"
          ></textarea>
        </div>
      </div>
      <div class="">
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="submit"
            class="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            {{ loading ? "Message envoyé..." : "Envoyer" }}
          </button>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      name: "",
      email: "",
      phone: "",
      message: "",
      error: ''
    }
  },
  methods: {
    async sendMessage() {
      this.loading = true
      try {
        const newMessage = await this.$strapi.create('messages',{
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        })
        console.log(newMessage)
        if (newMessage !== null) {
          this.success = true
          this.errored = false
        }
      } catch (error) {
        this.error = error.message
      }
      this.loading = false
    },
   /* async sendMessage(e) {
      e.preventDefault()
      try {
        const newMessage = await this.$strapi.create('messages',{
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        })
        console.log(newMessage)
        if (newMessage !== null) {
          this.error = ''
        }
      } catch (error) {
        this.error = error.message
      }
    },*/
  }
/*  methods: {
    sendMessage() {
      this.loading = true;
      this.$axios
        .post("/messages", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
        }).then(response => {
        this.success = true
        this.errored = false
      })
        .catch(error => {
          this.errored = true
        })
        .finally(() => {
          this.loading = false
        });
    }
  }*/
}
</script>

<style scoped>

</style>
