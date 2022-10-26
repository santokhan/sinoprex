<script setup>
import mobile from "../../../assets/mobile (4).jpg";
</script>
<template>
  <div class="w-full md:w-1/2 border rounded-xl">
    <div class="py-5 px-8 flex flex-col gap-3">
      <div class="text-2xl font-medium text-gray-900">
        What is the Holding Back the It Solution Industry?
      </div>
      <div class="flex justify-between font-medium">
        <a class="text-blue-500 flex gap-3 items-center font-medium" href="">
          <span class="font-medium">Read more</span>
          <i class="fa fa-arrow-right text-sm" aria-hidden="true"></i>
        </a>
        <div class="flex gap-2 items-center font-medium">
          <i class="fas fa-heart text-gray-500"></i>
          <span>50</span>
        </div>
      </div>
    </div>
    <div><img class="w-full rounded-xl" :src="mobile" alt="card" /></div>
  </div>
</template>
