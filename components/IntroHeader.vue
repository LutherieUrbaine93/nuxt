<template xmlns="http://www.w3.org/1999/html">
  <header class="flex-grow-0 flex-shrink bg-gray-900">

    <div class="container flex justify-center">

      <div class="flex flex-row w-full sm:w-11/12 xl:w-4/5 2xl:w-4/6 py-5">

        <div class="flex flex-grow items-center">
          <LogoC class="fill-current float-left h-12 mr-2"/>
          <h3 class="text-gray-300">Lutherie Urbaine 9.3</h3>
        </div>

        <div class="flex flex-grow">
          <button @click="goToAsso"
                  type="button"
                  class="asso relative overflow-hidden border border-gray-400 hover:border-gray-200 w-full h-full rounded font-semibold hover:text-white">
            Adhérer
          </button>
        </div>

        <div class="hidden md:block pl-5">
          <button class="bg-transparent hover:bg-gray-800 text-gray-400 font-semibold hover:text-gray-200 h-full px-4 border border-gray-500 hover:border-gray-400 rounded">
            Login
          </button>
        </div>

      </div>
    </div>

  </header>
</template>

<script>
import LogoC from "~/assets/svg/logoc.svg?inline"

export default {
  components: {LogoC},
  methods: {
    goToAsso() {
      window.location.href = 'https://www.helloasso.com/associations/lutherie-urbaine-93/adhesions/bulletin-d-adhesion-2021-lutherie-urbaine-9-3'
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

</style>
