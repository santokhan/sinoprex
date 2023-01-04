<script setup>
import play from "../../assets/play.svg";
</script>
<script>
export default { props: ["playVideoMobile"] };
</script>
<template>
  <!-- top-[36vh] lg:top-[40vh] xl:top-[44vh] -->
  <button type="button" class="block xl:hidden h-20 w-20 play-btn" @click="playVideoMobile()">
    <img class="w-full" :src="play" alt="play" />
  </button>
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

.play-btn {
  position: absolute;
  right: calc(50vw - 35px);
  object-fit: contain;
}

.play-btn:hover {
  outline: 0 solid rgba(105, 212, 255, 0.25);
  border-radius: 100%;
  animation: play 1s ease-in-out alternate-reverse;
}

@media (width > 1200px) {
  .play-btn {
    right: calc(50vw - 50px);
    height: 110px;
    width: 110px;
    object-fit: contain;
  }
}

@media (width > 1400px) {
  .play-btn {
    right: 10vw;
  }
}

@media (width > 1600px) {
  .play-btn {
    right: 16vw;
  }
}

@media (width > 1800px) {
  .play-btn {
    right: 19.5vw;
  }
}
</style>
