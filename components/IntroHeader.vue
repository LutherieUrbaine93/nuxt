<template xmlns="http://www.w3.org/1999/html">
  <header class="flex-grow-0 flex-shrink bg-gray-900">

    <div class="container flex justify-center">

      <div class="flex flex-row w-full sm:w-11/12 xl:w-4/5 2xl:w-4/6 py-5">

        <div class="flex flex-grow items-center">
          <LogoC class="fill-current float-left h-12 mr-2"/>
          <h3 class="text-gray-300">Lutherie Urbaine 9.3</h3>
        </div>

        <!-- If User is logged -->
        <div v-if="$strapi.user !== null" class="flex flex-grow">
          <div class="flex-grow h-full">
            <p class="text-center">Bienvenue</p>
            <p class="text-center font-bold">{{ $strapi.user.username }}</p>

          </div>

          <button @click="logout"
                  class="bg-transparent hover:bg-gray-800 text-gray-400 font-semibold hover:text-gray-200 h-full px-4 border border-gray-500 hover:border-gray-400 rounded">
            Logout
          </button>
        </div>

        <!-- If User ISN'T logged -->
        <div v-else class="flex flex-grow">
          <div class="flex-grow">
            <button @click="goToAsso"
                    type="button"
                    class="asso relative overflow-hidden border border-gray-400 hover:border-gray-200 w-full h-full rounded sm:font-semibold hover:text-white">
              Adhérer<span class="hidden sm:inline"> - Soutenir</span>
            </button>
          </div>

          <div class="hidden md:block pl-5">
            <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
              <button class="modal__close" @click="showModal = false">
                <ClosIcon class="text-gray-100 fill-current h-16"/>
              </button>
              <span class="modal__title">
                <LoginForm/>
              </span>
            </vue-final-modal>
            <button @click="showModal = true"
                    class="bg-transparent hover:bg-gray-800 text-gray-400 font-semibold hover:text-gray-200 h-full px-4 border border-gray-500 hover:border-gray-400 rounded">
              Login
            </button>
          </div>
        </div>

      </div>
    </div>

  </header>
</template>

<script>
import LogoC from "~/assets/svg/logoc.svg?inline"
import FaceIcon from "~/assets/svg/facebook.svg?inline"
import MailIcon from "~/assets/svg/mail.svg?inline"
import ClosIcon from "~/assets/svg/close.svg?inline"

export default {
  components: {
    LogoC,
    FaceIcon,
    MailIcon,
    ClosIcon
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    goToAsso() {
      window.open('https://www.helloasso.com/associations/lutherie-urbaine-93/adhesions/bulletin-d-adhesion-2021-lutherie-urbaine-9-3', '_blank')
    },
    async logout() {
      await this.$strapi.logout()
      this.$nuxt.$router.push('/')
    }
  }
}
</script>

<style scoped>
header {
  flex-basis: auto
}

button.asso {
  background-color: rgba(112, 194, 74, .66); /* #70c24a */
}

button.asso:after {
  content: "";
  position: absolute;
  top: -350%;
  left: -210%;
  width: 200%;
  height: 800%;
  opacity: 0;
  transform: rotate(20deg);

  background: rgba(255, 255, 255, 0.13);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.13) 0%,
    rgba(255, 255, 255, 0.13) 77%,
    rgba(255, 255, 255, 0.5) 92%,
    rgba(255, 255, 255, 0.0) 100%
  );
}

/* Hover state - trigger effect */
button.asso:hover:after {
  opacity: 1;
  top: -350%;
  left: -30%;
  transition-property: left, top, opacity;
  transition-duration: 0.7s, 0.7s, 0.15s;
  transition-timing-function: ease;
}

::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: .5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  @apply bg-gray-800
}

.modal__close {
  position: absolute;
  top: 0;
  right: 0;
}


</style>
