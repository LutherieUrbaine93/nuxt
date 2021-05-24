<template>
    <div id="board">

      <nuxt-link class="box-link"
                 v-for="menu in menus"
                 :key="menu.id"
                 :to="menu.pageLink">
        <div :id="menu.pageLink" class="box rounded shadow-md" :style="{ backgroundColor: menu.Couleur }">
          <!--img src="" class="img-bg" alt=""-->
          <h4 v-if="menu.Texte_foncer" style="color:#212121">{{ menu.Nom }}</h4>
          <h4 v-else>{{ menu.Nom }}</h4>
        </div>
      </nuxt-link>

    </div>
</template>

<script>
export default {
  props: {
    menus: Array
  }
}
</script>

<style scoped>
#board {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: .5em;
  grid-auto-rows: 150px;
  overflow: auto;
}

#board a {
  position: relative;
  display: block;
}

#board .box {
  height: 100%;
  padding: 1em;
}

#board .box {
  white-space: pre-wrap;
}

#board .box h1 {
  font-size: 1.5em;
  overflow-wrap: break-word;
}

@media only screen and (min-width: 640px) {
  #board {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    grid-auto-rows: 140px;
    width: 100%;
    padding: 1em; /* to give space for boxes margin transitions */
  }

  #board a:nth-child(1) {
    grid-column: 3/4;
  }

  #board a:nth-child(2) {
    grid-column: 1/3;
    grid-row: 1/3;
  }

  #board a:nth-child(3) {
    grid-column: 3/5;
    grid-row: 2/4;
  }

  #board a:nth-child(6) {
    grid-column: 4/6;
    grid-row: 1/2;
  }

  #board .box-link:nth-child(1):hover .box {
    margin: -1em 0 0 0
  }

  #board .box-link:nth-child(2):hover .box {
    margin: -1em 0 0 -1em
  }

  #board .box-link:nth-child(3):hover .box {
    margin: 1em 0 0 0
  }

  #board .box-link:nth-child(4):hover .box {
    margin: 0 0 0 1em
  }

  #board .box-link:nth-child(5):hover .box {
    margin: 1em 0 0 -1em
  }

  #board .box-link:nth-child(6):hover .box {
    margin: -1em 0 0 1em
  }

  #board .box-link:nth-child(7):hover .box {
    margin: 1em 0 0 0
  }

  #board .box-link:nth-child(8):hover .box {
    margin: 1em 0 0 1em
  }
}

@media only screen and (min-width: 768px) {
  #board {
    width: 100%;
  }

  #board .box h1 {
    font-size: 1.65em;
  }
}

@media only screen and (min-width: 1024px) {
  #board {
    grid-auto-rows: 180px;
    width: 945px;
  }

  #board .box h1 {
    font-size: 1.8em;
  }
}

@media only screen and (min-width: 1280px) {
  #board {
    grid-auto-rows: 200px;
    width: 1050px;
  }
}

@media only screen and (min-width: 1536px) {
}

/*=== Main-Menu Animation ===*/
#board .box {
  height: 100%;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0;
  transition: margin .1s ease-out;
  -webkit-transition: margin .1s ease-out;
}

#board .box:hover {
  transition: margin .1s ease-out;
  -webkit-transition: margin .1s ease-out;
}

/*
#board .box:hover img {
  transform: scale(1.15);
  transition: transform .1s ease-out;
  -webkit-transition: transform .1s ease-out;
}

#table {
  position: relative;
  top: 22.5vh; !*bak: calc(50vh - 375px)*!
}
#table .flex-cont {
  width: 100%;
  height: 20vh; !*bak: 250px*!
  align-items: flex-start;
}
#table [class^="flex-item-"] {
  position: relative;
  display: block;
  flex-basis: 20%;
  height: 100%;
}
#table .flex-item-0 { z-index: 50 }
#table .flex-item-3 { display: none }
#table .flex-item-4 { z-index: 50 }
#table .flex-item-8 { display: none }
#table .flex-item-9 { flex-grow: .33 }

@media only screen and  (min-width: 950px) {
  #table .flex-item-0 { height: 200% }
  #table .flex-item-1 { flex-grow: 0 }
  #table .flex-item-3 { display: flex }
  #table .flex-item-5 { flex-grow: 0 }
  #table .flex-item-4 { height: 200% }
  #table .flex-item-8 { display: flex }
  #table .flex-item-9 { flex-grow: 0 }
}
!*
#table .flex-item-mb {
	width: 200px;
}*!

#table .box-audio {
  height: 100%;
  width:100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0; !* this for transition *!
  -webkit-transition: margin .1s ease-out;
}
.img-bg {
  position: absolute;
}
#table [class^="flex-item-"] img {
  transform: scale(1);
  transition: transform .1s ease-out;
  -webkit-transition: transform .1s ease-out;
  opacity: 0;
  animation: menu-thumb ease-out 3s;
  animation-fill-mode: forwards;
}
@keyframes menu-thumb { 0% { opacity:0 } 100% { opacity:1 } }

#table [class^="flex-item-"] h1 {
  width:80%;
  z-index: 99;
}
*/
</style>
