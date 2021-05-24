<template>

  <div id="widget"
       class="fixed top-0 right-0
       w-36 h-36
       md:w-52 md:h-52
       lg:w-60 lg:h-60
       xl:w-72 xl:h-72
       2xl:w-96 2xl:h-96">
    <a :href="helloAsso" target="_blank">
      <div @mouseover="hover = true"
           @mouseleave="hover = false"
           class="circle absolute w-full h-full rounded-full shadow-md
           -top-16 -right-16
           md:-top-20 md:-right-20
           lg:-top-24 lg:-right-24
           xl:-top-28 xl:-right-28
           2xl:-top-40 2xl:-right-40">
      </div>
    </a>

    <div :class="{ show: hover }" class="text absolute top-0 right-0 w-1/2 h-1/2 flex flex-col justify-center items-center">
      <h3>Adhérer</h3>
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 hidden sm:flex" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
      </svg>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      hover: false,
      helloAsso: 'https://www.helloasso.com/associations/lutherie-urbaine-93/adhesions/bulletin-d-adhesion-2021-lutherie-urbaine-9-3'
    }
  }

}
</script>

<style scoped>
#widget {
}

.circle {
  background-color: rgba(112, 194, 74, .66); /* #70c24a */
  border-color: #70c24a;
  border-style: solid;
  border-width: 1px;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1.275);
  transition-duration: 400ms;
  transform: scale(1.1, 1.1) translate3d(0, 0, 0);
  cursor: pointer;
}

.circle:hover {
  border-width: 90px;
  background-color: rgba(112, 194, 74, 1);
  transform: scale(1.2, 1.2) translate3d(0, 0, 0);
}

.text {
  opacity: .8;
  pointer-events: none;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
.text.show {
  opacity: 1;
  text-decoration: underline;
}

.text svg {
  opacity: 0;
  top: 50%;
  transition: all .25s ease-in;
}

.text.show svg {
  opacity: 1;
  top: 60%;
  transition: all .25s ease-out;
}

</style>
