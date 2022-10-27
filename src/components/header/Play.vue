<script setup>
import play from "../../assets/play.svg";
</script>
<script>
export default {
  props: ["play", "playVideo"],
};
</script>
<template>
  <!-- top-[36vh] lg:top-[40vh] xl:top-[44vh] -->
  <div
    class="hidden xl:block absolute h-20 xl:h-40 w-20 xl:w-40 xl:right-[19.5vw] play-btn"
    @click="playVideo()"
  >
    <img class="w-full" :src="play" alt="play" />
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
    right: 6vw;
  }
}
@media (min-width: 1400px) {
  .play-btn {
    right: 10vw;
  }
}
@media (min-width: 1600px) {
  .play-btn {
    right: 16vw;
  }
}
@media (min-width: 1800px) {
  .play-btn {
    right: 19.5vw;
  }
}
</style>
