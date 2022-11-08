<script setup>
import TopBar from "./TopBar.vue";
import Social from "./Social.vue";
import Banner from "./Banner.vue";
import reel from "../../assets/reel.mp4";
import BackgroundImage from "./BackgroundImage.vue";
import Play from "./Play.vue";
import PlayMobile from "./PlayMobile.vue";
import VideoMobile from "./VideoMobile.vue";
</script>
<script>
export default {
  data() {
    return {
      play: false,
      playOnMobile: false,
      background: true,
    };
  },
  methods: {
    playVideo() {
      this.background = this.background ? false : true;
      const backgroundVideo = document.getElementById("backgroundVideo");
      if (this.play) {
        this.play = false;
        backgroundVideo.pause();
      } else {
        backgroundVideo.play();
        this.play = true;
      }
      console.log({ bg: this.background, p: this.play });
    },
    playVideoMobile() {
      if (this.playOnMobile === false) {
        this.playOnMobile = true;
        document.getElementById("backgroundVideoMobile").play();
      } else {
        this.playOnMobile = false;
      }
      console.log({ p: this.playOnMobile });
    },
  },
  components: { PlayMobile, VideoMobile },
};
</script>
<template>
  <VideoMobile v-if="playOnMobile"></VideoMobile>
  <header class="bg-[rgba(0, 0, 0, 0.4)] relative w-full" id="headerMain">
    <BackgroundImage :background="background" />
    <video
      class="absolute left-0 top-0 w-full"
      controls
      id="backgroundVideo"
      @play="play"
    >
      <source src="../../assets/reel.mp4" />
      Error Message
    </video>
    <Play :playVideo="playVideo" :play="play" />
    <TopBar />
    <Banner :playOnMobile="playOnMobile" :playVideoMobile="playVideoMobile" />
    <Social />
  </header>
</template>
<style scoped>
.bg-header {
  background-image: url("../../assets/bg-header-2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: -20;
}
.bg-header::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  mix-blend-mode: screen;
  z-index: -10;
}
.play {
  animation: play 2s ease-in-out;
}
@keyframes play {
  0% {
    box-shadow: 0 0 0;
  }
  100% {
    box-shadow: 12px 12px 0 solid rgb(red, green, blue);
  }
}

#backgroundVideo {
  z-index: -100;
}
</style>
