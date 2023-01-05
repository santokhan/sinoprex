<script setup>
import { useVideoStore } from "@/store/HandleVideo";
import PlayMobile from "./PlayMobile.vue";

const video = useVideoStore();
</script>

<script>
export default { props: ["playVideoMobile"] };
</script>


<template>
  <div class="max-w-7xl mx-auto px-4 h-screen flex flex-col xl:text-xl text-gray-200 banner">
    <PlayMobile :playVideoMobile="playVideoMobile"></PlayMobile>
    <div v-if="!video.status" class="max-w-2xl flex flex-col gap-6 h-full py-8 lg:py-12">
      <div class="text-4xl xl:text-[4.125rem] lg:leading-[4rem] xl:leading-[90px] text-sky-400 hero-text uppercase lg:whitespace-nowrap">
        Drive More <br> Customers Through <br> Digitalization.
      </div>
      <div class="max-w-2xl py-2 pr-8 text-sky-100">
        We provide data analysis, cloud service, mobile development, SAAS
        service for your business. If you want make a online store or need
        mobile APPs for your customer you have come to the right place.
      </div>
      <div class="text-sky-100">
        <div class="py-1">
          <i class="fas fa-check text-sky-400" aria-hidden="true"></i>
          <span class="px-2">Over 100+ payments getway support</span>
        </div>
        <div class="py-1">
          <i class="fas fa-check text-sky-400" aria-hidden="true"></i>
          <span class="px-2">AI Machine & deep learning</span>
        </div>
        <div class="py-1">
          <i class="fas fa-check text-sky-400" aria-hidden="true"></i>
          <span class="px-2">Dadicated support 24/7</span>
        </div>
      </div>
      <div class="py-3 xl:py-4">
        <button type="button"
          class="text-white uppercase bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 xl:px-10 py-3 xl:py-4 text-center mr-2 mb-2">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>
