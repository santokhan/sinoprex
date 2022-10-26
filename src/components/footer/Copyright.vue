<script setup></script>
<script>
export default {
  data() {
    return { date: new Date().getFullYear() };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<template>
  <div class="max-w-7xl mx-auto">
    <hr class="border-stone-600" />
    <div
      class="flex flex-wrap sm:gap-[3rem] justify-center sm:justify-between items-center py-[2rem] text-stone-500"
    >
      <div>
        Copyright <i class="fa fa-copyright" aria-hidden="true"></i
        ><span>{{ date }}</span>
        Sinoprex. All Rights Reserved.
      </div>
      <div>
        <button
          class="flex gap-2 justify-end items-center border-none outline-none"
          @click="scrollToTop"
        >
          <i class="fa fa-angle-up" aria-hidden="true"></i>
          <span>Go On Top</span>
        </button>
      </div>
    </div>
  </div>
</template>
