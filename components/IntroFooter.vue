<template>

  <footer class="flex-grow-0 flex-shrink bg-gray-900">
    <div class="container flex flex-col items-center">

      <div class="social-medias pt-5">
        <ul class="list-none">

          <li class="float-left text-gray-400 hover:text-gray-200 pr-5">
            <a href="https://www.facebook.com/lutherie.urbaine" target="_blank">
            <span class="bg-gray-400 rounded block float-left px-2 pt-1 pb-.5 mx-2 mt-1">
              <FaceIcon class="text-gray-900 fill-current h-3"/>
            </span>
              Facebook
            </a>
          </li>

          <li class="float-left text-gray-400 hover:text-gray-200 cursor-pointer">
            <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
              <button class="modal__close" @click="showModal = false">
                <ClosIcon class="text-gray-100 fill-current h-16"/>
              </button>
              <span class="modal__title">
                <ContactForm/>
              </span>
            </vue-final-modal>
            <button @click="showModal = true">
              <MailIcon class="text-gray-400 fill-current h-6 float-left mx-1"/>
              Contact
            </button>
          </li>

        </ul>
      </div>

      <p class="text-center text-gray-400 py-4">{{ copyrights }}</p>

    </div>
  </footer>

</template>

<script>
import FaceIcon from "~/assets/svg/facebook.svg?inline"
import MailIcon from "~/assets/svg/mail.svg?inline"
import ClosIcon from "~/assets/svg/close.svg?inline"

export default {
  components: {
    FaceIcon,
    MailIcon,
    ClosIcon
  },
  data() {
    return {
      copyrights: '© 2020 Lutherie Urbaine 9.3 tous droits réservés',
      showModal: false
    }
  },
  // inheritAttrs: false
}
</script>

<style scoped>
footer {
  flex-basis: auto
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
  padding: 1rem;
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
