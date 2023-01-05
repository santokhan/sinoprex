<script setup>
import { useVideoStore } from "@/store/HandleVideo";
import playSVG from "../../assets/play.svg";

const {playVideo} = defineProps({playVideo: Function})

const store = useVideoStore();

function handleVideo() {
  playVideo();
  store.playPause();
}

function playPosition() {
  let position = document.querySelector("#headerMain").clientHeight / 2;
  console.log(`top-[${position}px]`);
  const playBtn = document.querySelector(".play-btn");
  let playHeight = playBtn.clientHeight / 2;
  return "top" + `${position - playHeight}px`;
  }
</script>


<template>
  <!-- top-[36vh] lg:top-[40vh] xl:top-[44vh] -->
  <div class="hidden xl:block absolute h-20 xl:h-40 w-20 xl:w-40 xl:right-[19.5vw] play-btn" @click="handleVideo">
    <img class="w-full" :src="playSVG" alt="play" />
  </div>
</template>

<style scoped>
@keyframes play {
  0% {
    outline: 0 solid rgba(105, 212, 255, 0.25);
  }

  75% {
    outline: 0.5rem solid rgba(105, 212, 255, 0.25);
  }

  0% {
    outline: 0.5rem solid rgba(105, 212, 255, 0.25);
  }
}

.play-btn:hover {
  outline: 0 solid rgba(105, 212, 255, 0.25);
  border-radius: 100%;
  animation: play 1s ease-in-out alternate-reverse;
}

@media (min-width: 1200px) {
  .play-btn {
    top: 32vw;
    right: 6vw;
  }
}

@media (min-width: 1400px) {
  .play-btn {
    top: 30vw;
    right: 10vw;
  }
}

@media (min-width: 1600px) {
  .play-btn {
    top: 27vw;
    right: 16vw;
  }
}

@media (min-width: 1800px) {
  .play-btn {
    top: 23vw;
    right: 19.5vw;
  }
}
</style>
