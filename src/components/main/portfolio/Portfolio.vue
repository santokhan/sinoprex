<script setup>
import FeatureDes from "../feature/FeatureDes.vue";
import Item from "./Item.vue";
</script>
<template>
  <section class="bg-white" role="Portfolio">
    <div class="py-[8rem] flex flex-col gap-[5rem] items-center max-w-7xl mx-auto px-4">
      <div class="text-center flex flex-col gap-2">
        <div class="font-semibold uppercase text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-stone-900">
          Clean & Beautiful UI Rich Interface For Easier Use.
        </div>
        <FeatureDes>
          We prioritize our clients need and their business demand. While making
          an online platform, it is important to focus on the user experience .
          We can help to build a platform , that can be user friendly .
        </FeatureDes>
      </div>
      <div class="flex flex-col md:flex-row items-center gap-[2rem]">
        <Item></Item>
        <Item></Item>
      </div>
    </div>
  </section>
</template>
