<script setup>
import achivement from "./achivement.png";
import { RouterLink } from "vue-router";
</script>
<template>
  <section
    class="bg-blue-100 py-[32px] xl:py-[5rem] text-stone-900"
    role="service"
  >
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-wrap px-2">
        <div class="w-full xl:w-1/3 my-8 px-2">
          <div class="flex flex-col items-center xl:items-start gap-3">
            <RouterLink to="services">
              <span
                class="uppercase text-blue-500 bg-blue-200 px-4 py-1 font-semibold rounded-full text-sm"
              >
                Our Achivements
              </span>
            </RouterLink>
            <div class="text-3xl xl:text-5xl font-semibold py-2">
              Some Number of our achivement
            </div>
            <div>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-2 xl:py-3 mr-2 mb-2 text-center uppercase tracking-wide xl:tracking-widest"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
        <div
          class="w-full xl:w-2/3 flex flex-col items-center gap-3 border-l my-3 md:my-5 lg:my-7 xl:my-10 px-8 pb-4"
        >
          <img :src="achivement" alt="achivement" />
        </div>
      </div>
    </div>
  </section>
</template>
