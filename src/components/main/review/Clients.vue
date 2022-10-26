<script setup>
import girl from "../../../assets/cute_girl.png";
import insta from "../../../assets/instagram-logo.png";
</script>
<script>
export default {
  props: ["img", "name", "title", "text"],
};
</script>
<template>
  <div
    class="bg-stone-800 border border-stone-700 rounded-xl px-5 py-6 flex flex-col gap-[1.5rem] w-full max-w-[320px] mt-4"
    role="card"
  >
    <div class="flex items-center">
      <div><img class="h-14 w-14" :src="girl" alt="client" /></div>
      <div class="px-4 font-medium">
        <div class="text-lg uppercase">Kathryn Murphy</div>
        <div class="text-stone-400 text-sm uppercase">From USA</div>
      </div>
      <div class="ml-auto">
        <img class="w-8" :src="insta" alt="instagram" />
      </div>
    </div>
    <div class="font-medium text-stone-500 text-lg">"{{ text }}"</div>
  </div>
</template>
