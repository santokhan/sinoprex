<script setup>
import Item from "./Item.vue";
</script>
<template>
  <section class="bg-white" role="Portfolio">
    <div
      class="bg-white py-[8rem] flex flex-col gap-[5rem] items-center max-w-7xl mx-auto px-4"
      role="Portfolio"
    >
      <div class="text-center flex flex-col gap-3">
        <div>
          <a
            class="bg-blue-100 text-sm xl:text-base font-semibold rounded-full px-4 py-1 text-blue-500 uppercase"
            href="#"
          >
            Blog
          </a>
        </div>
        <div
          class="font-medium uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-stone-900"
        >
          Read our latest tips & tricks
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center gap-[2rem]">
        <Item></Item>
        <Item></Item>
      </div>
    </div>
  </section>
</template>
