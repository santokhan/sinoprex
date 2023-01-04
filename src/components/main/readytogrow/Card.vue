<script setup>
defineProps({src:String})
</script>

<template>
  <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center gap-[1.5rem] py-6">
    <div><img class="h-20" :src="src" alt="card" /></div>
    <div class="font-semibold text-lg uppercase font-stone-900 text-center">
      <slot></slot>
    </div>
  </div>
</template>
