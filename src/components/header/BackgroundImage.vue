<script setup>
import play from "../../assets/play.svg";
</script>
<script>
export default {
  props: ["background"],
};
</script>
<template>
  <div
    v-if="background"
    class="bg-stone-900 absolute left-0 top-0 w-full h-full bg-header"
  ></div>
</template>
