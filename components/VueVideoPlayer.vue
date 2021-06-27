<template>
  <section class="flex justify-center">
    <div class="video-player-box max-w-full"
         :playsinline="playsinline"
         @play="onPlayerPlay($event)"
         @pause="onPlayerPause($event)"
         @ended="onPlayerEnded($event)"
         @loadeddata="onPlayerLoadeddata($event)"
         @waiting="onPlayerWaiting($event)"
         @playing="onPlayerPlaying($event)"
         @timeupdate="onPlayerTimeupdate($event)"
         @canplay="onPlayerCanplay($event)"
         @canplaythrough="onPlayerCanplaythrough($event)"
         @ready="playerReadied"
         @statechanged="playerStateChanged($event)"
         v-video-player:myVideoPlayer="playerOptions">
    </div>
  </section>
</template>

<script>
export default {
  props: {
    videoData: {
      type: Object,
      default: {}
    }
  },
  computed: {
    playerOptions() {
      // videojs options
      return {
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: this.videoData.fichier_video.url
        }],
        poster: this.videoData.image.url
      }
    }
  },
  data() {
    return {
      // component options
      playsinline: true,
    }
  },
    mounted() {
    console.log('this is current player instance object', this.myVideoPlayer)
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      // console.log('example 01: the player is readied', player)
    }
  }
}
</script>

<style scoped>
::v-deep .video-js {
  width: 100% !important;
  height: auto !important;
}

::v-deep .video-js .vjs-tech {
  position: relative !important;
}

::v-deep .video-js .vjs-big-play-button {
/*  height: 1.5em; width: 3em;*/
  top: calc(50% - .75em) !important;
  left: calc(50% - 1.5em) !important;
}
</style>
