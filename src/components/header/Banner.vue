<script setup>
import PlayMobile from "./PlayMobile.vue";
</script>
<script>
export default { props: ["playVideoMobile"] };
</script>
<template>
  <div
    class="max-w-7xl mx-auto px-4 py-[80px] md:py-[80px] lg:py-[100px] xl:py-[120px] xl:text-xl text-gray-200 banner"
  >
    <div class="max-w-2xl flex flex-col gap-[32px]">
      <div class="flex justify-center">
        <PlayMobile :playVideoMobile="playVideoMobile"></PlayMobile>
      </div>
      <div
        class="font-[600] text-[3rem] xl:text-[4.5rem] leading-[4rem] xl:leading-[80px] text-sky-400"
      >
        Drive More Customers Through Digitalization.
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
      <div class="py-3 xl:py-6">
        <button
          type="button"
          class="text-white uppercase tracking-wide xl:tracking-widest bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 xl:px-12 py-3 xl:py-5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>
