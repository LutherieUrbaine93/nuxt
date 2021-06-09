<template>
  <div id="overlay">

    <div id="nav-trigger" class="nav-trigger" :class="{burger: isClosed}" @click="menu">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>

    <nav :class="{in: onScreen}">
      <nuxt-link v-for="menu in sortedMenus"
                 :key="menu.id"
                 :to="menu.pageLink"
                 class="nav-label group"
                 :style="{ backgroundColor: menu.Couleur }">
        <h1 v-if="menu.pageLink === pageRoute && menu.Texte_foncer" class="text-gray-800 line-through">{{ menu.Nom }}</h1>

        <h1 v-else-if="menu.Texte_foncer" class="text-gray-800 group-hover:underline transition duration-200 ease-in-out">{{ menu.Nom }}</h1>

        <h1 v-else-if="menu.pageLink === pageRoute" class="line-through">{{ menu.Nom }}</h1>

        <h1 v-else class="group-hover:underline">{{ menu.Nom }}</h1>
      </nuxt-link>
    </nav>

    <div :class="{in: onScreen}">
      <nuxt-link class="nav-label-home flex justify-center items-center group" to="/">
        <div
          class="back-line absolute w-28 h-1 bg-gray-100 bg-opacity-0 group-hover:bg-white group-hover:bg-opacity-100"></div>
        <div class="absolute bg-gray-900 px-2">
          <HomeIcon class="fill-current h-12"/>
        </div>
      </nuxt-link>
    </div>

  </div>
</template>

<script>
import HomeIcon from "~/assets/svg/home.svg?inline"

export default {
  components: {HomeIcon},
  props: {
    pageRoute: {
      type: String,
      default: ''
    }
  },
  async fetch() {
    this.menus = await this.$strapi.find('menus')
  },
  data() {
    return {
      isClosed: false,
      onScreen: false,
      menus: []
    }
  },
  computed: {
    sortedMenus() {
      return this.menus.sort((a, b) => a.Ordre - b.Ordre)
    }
  },
  methods: {
    menu() {
      this.isClosed = !this.isClosed
      this.onScreen = !this.onScreen
    }
  }
}
</script>

<style scoped>
.nav-label-home {
  position: fixed;
  background-color: var(--bgColor1);
  width: 66px; /* same as #nav-trigger */
  height: 60px;
  border-bottom: 1px solid white;
  right: 0;
  z-index: 100;
  opacity: 0;
  transition: width .5s ease-out .35s, opacity .5s ease-out .35s;
}

.in .nav-label-home {
  width: 100%;
  opacity: 1;
  transition: width .5s ease-out, opacity .5s ease-out;
}

.back-line,
.nav-label-home svg {
  opacity: 0;
  visibility: hidden;
  transition: all .45s ease-out;
  transition-property: opacity, visibility;
}

.in .back-line,
.in .nav-label-home svg {
  opacity: 1;
  visibility: visible;
  transition: all .5s ease-out .5s;
  transition-property: opacity, visibility;
}

nav {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  pointer-events: none;
  z-index: 100;
  padding-top: 59px;
  /*background: var(--bgColor2);*/
}

nav.in {
  pointer-events: auto;
}

.nav-label {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 150;
}

/*.menu-link { order: 0; }*/
.nav-label:nth-child(1) {
  order: 1;
}

.nav-label:nth-child(2) {
  order: 2;
}

.nav-label:nth-child(3) {
  order: 4;
}

.nav-label:nth-child(4) {
  order: 3;
}

.nav-label:nth-child(5) {
  order: 5;
}

.nav-label:nth-child(6) {
  order: 6;
}

.nav-label:nth-child(7) {
  order: 8;
}

.nav-label:nth-child(8) {
  order: 7;
}

/******** Nav-labels transitions OUT ********/
nav .nav-label:nth-child(8n + 1) {
  transition: transform 0.5s ease-out calc(0.05s * (8 - 1)), opacity 0.5s linear calc(0.05s * (8 - 1));
}

nav .nav-label:nth-child(8n + 2) {
  transition: transform 0.5s ease-out calc(0.05s * (8 - 2)), opacity 0.5s linear calc(0.05s * (8 - 2));
}

nav .nav-label:nth-child(8n + 3) {
  transition: transform 0.5s ease-out calc(0.05s * (8 - 4)), opacity 0.5s linear calc(0.05s * (8 - 4));
}

nav .nav-label:nth-child(8n + 4) {
  transition: transform 0.5s ease-out calc(0.05s * (8 - 3)), opacity 0.5s linear calc(0.05s * (8 - 3));
}

nav .nav-label:nth-child(8n + 5) {
  transition: transform 0.5s ease-out calc(0.05s * (8 - 5)), opacity 0.5s linear calc(0.05s * (8 - 5));
}

nav .nav-label:nth-child(8n + 6) {
  transition: transform 0.5s ease-out calc(0.05s * (8 - 6)), opacity 0.5s linear calc(0.05s * (8 - 6));
}

nav .nav-label:nth-child(8n + 7) {
  transition: transform 0.5s ease-out calc(0.05s * (8 - 8)), opacity 0.5s linear calc(0.05s * (8 - 8));
}

nav .nav-label:nth-child(8n + 8) {
  transition: transform 0.5s ease-out calc(0.05s * (8 - 7)), opacity 0.5s linear calc(0.05s * (8 - 7));
}

nav .nav-label {
  transform: translateY(300%);
  opacity: 0;
}

/******** Nav-labels transitions IN ********/
nav.in .nav-label:nth-child(8n + 1) {
  transition: transform 0.5s ease-out calc(0.1s * 1), opacity 0.5s linear calc(0.1s * 1);
}

nav.in .nav-label:nth-child(8n + 2) {
  transition: transform 0.5s ease-out calc(0.1s * 2), opacity 0.5s linear calc(0.1s * 2);
}

nav.in .nav-label:nth-child(8n + 3) {
  transition: transform 0.5s ease-out calc(0.1s * 4), opacity 0.5s linear calc(0.1s * 4);
}

nav.in .nav-label:nth-child(8n + 4) {
  transition: transform 0.5s ease-out calc(0.1s * 3), opacity 0.5s linear calc(0.1s * 3);
}

nav.in .nav-label:nth-child(8n + 5) {
  transition: transform 0.5s ease-out calc(0.1s * 5), opacity 0.5s linear calc(0.1s * 5);
}

nav.in .nav-label:nth-child(8n + 6) {
  transition: transform 0.5s ease-out calc(0.1s * 6), opacity 0.5s linear calc(0.1s * 6);
}

nav.in .nav-label:nth-child(8n + 7) {
  transition: transform 0.5s ease-out calc(0.1s * 8), opacity 0.5s linear calc(0.1s * 8);
}

nav.in .nav-label:nth-child(8n + 8) {
  transition: transform 0.5s ease-out calc(0.1s * 7), opacity 0.5s linear calc(0.1s * 7);
}

nav.in .nav-label {
  transform: translateY(0);
  opacity: 1;
  transition: opacity .2s ease;
}

/**** Nav Button ****/
.nav-trigger {
  background: var(--bgColor2);
  position: fixed;
  width: 110px;
  height: 98px;
  right: 0;
  top: 0;
  cursor: pointer;
  z-index: 200;
  transform-origin: 110px 0;
  transform: scale(0.6);
  transition: background 0.3s linear;
}

.line {
  display: block;
  position: absolute;
  width: 80px;
  height: 8px;
  background: white;
  left: 15px;
  transform-origin: 0 4px;
  transition: opacity 0.3s ease-in-out 0s, transform 0.24s ease-in-out 0s;
  pointer-events: none
}

.line:nth-child(3n + 1) {
  top: 16px;
}

.line:nth-child(3n + 2) {
  top: calc(16px + 28px);
}

.line:nth-child(3n + 3) {
  top: calc(16px + (28px * 2));
}

.burger .line:nth-child(1) {
  transform: translateX(11px) rotate(45deg);
}

.burger .line:nth-child(2) {
  opacity: 0;
}

.burger .line:nth-child(3) {
  transform: translateX(11px) rotate(-45deg);
}

</style>
