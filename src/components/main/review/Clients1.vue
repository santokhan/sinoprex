<script setup>
import girl from "../../../assets/cute_girl.png";
</script>
<template>
  <div
    class="bg-stone-800 border border-stone-700 rounded-xl px-5 py-6 flex flex-col gap-[1.5rem] max-w-sm w-full"
    role="card"
  >
    <div class="flex items-center">
      <div><img class="h-14 w-14" :src="girl" alt="client" /></div>
      <div class="px-4 font-medium">
        <div class="text-lg uppercase">Kathryn Murphy</div>
        <div class="text-stone-400 text-sm uppercase">From USA</div>
      </div>
      <div class="ml-auto">
        <i class="fab fa-instagram text-xl text-red-300" aria-hidden="true"></i>
      </div>
    </div>
    <div class="font-medium text-stone-500 text-lg">
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt
      necessitatibus est quis numquam modi officiis? Nihil dolor eveniet optio
      perferendis, impedit veritatis totam incidunt ut atque deserunt libero
      asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Nihil aspernatur dolore placeat voluptatem iure, atque necessitatibus"
    </div>
  </div>
</template>
