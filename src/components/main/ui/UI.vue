<script setup>
import UIDes from "../ui/UIDes.vue";
import UITitle from "../ui/UITitle.vue";
</script>
<template>
  <div
    class="max-w-7xl mx-auto lg:flex items-center py-[3rem] md:py-[5rem] xl:py-[8rem] text-stone-900 px-4"
  >
    <div class="w-full xl:w-4/12 py-4 flex justify-center">
      <img class="" src="../../../assets/image/ui/ui1.png" alt="IOT" />
    </div>
    <div class="w-full py-8 px-4 xl:px-8 flex flex-col gap-[2rem] items-center">
      <div class="flex flex-col gap-[1.5rem] text-center">
        <div>
          <span
            class="uppercase text-blue-500 bg-blue-100 px-4 py-1 font-medium rounded-full text-sm"
          >
            SINOPEX MAKES YOUR LIFE EASY
          </span>
        </div>

        <UITitle text="Clean & Beautiful UI Rich Interface For Easier Use." />
        <UIDes
          text="      We prioritize our clients need and their business demand. While making an
      online platform, it is important to focus on the user experience . We can
      help to build a platform , that can be user friendly."
        />
      </div>
    </div>
    <div class="w-full xl:w-4/12 py-4 flex justify-center">
      <img class="" src="../../../assets/image/ui/ui2.png" alt="IOT" />
    </div>
  </div>
</template>
