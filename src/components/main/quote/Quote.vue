<script setup>
import Item from "./Item.vue";
</script>
<template>
  <section class="bg-white" role="Portfolio">
    <div
      class="bg-white py-[8rem] flex flex-col gap-[5rem] items-center max-w-7xl mx-auto px-4"
      role="Portfolio"
    >
      <div class="text-center">
        <div
          class="font-medium uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
        >
          GET FREE QUOTE
        </div>
        <div class="font-medium text-gray-500 text-xl">
          JUST HAVE A QUICK ANY QUESTIONS
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center gap-[2rem]">
        <Item></Item>
        <Item></Item>
      </div>
    </div>
  </section>
</template>
