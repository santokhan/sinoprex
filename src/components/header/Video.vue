<script setup>
import reel from "../../assets/reel.mp4";
</script>
<template>
  <video width="w-[100%]" controls>
    <source :src="reel" />
    Error Message
  </video>
</template>
