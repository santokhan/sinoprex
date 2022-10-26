<script setup>
import cute_girl from "../../../assets/cute_girl.png";
</script>
<script>
export default {
  props: ["src"],
  data: function () {
    return {
      social:
        "border h-10 w-10 flex items-center justify-center rounded-full hover:bg-sky-100 hover:border-blue-500",
    };
  },
};
</script>
<template>
  <div
    class="bg-white flex flex-col items-center gap-[1.25rem] max-w-[20rem] px-[4rem] py-11 rounded-xl shadow-lg shadow-stone-100 text-center border"
  >
    <div class="flex items-center justify-center m-0 p-0">
      <img
        class="h-[8rem] w-[8rem] rounded-full"
        :src="cute_girl"
        alt="profile"
      />
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="font-medium text-2xl text-stone-800">Angle Annie</div>
      <div class="font-medium text-stone-500">Web Developer</div>
    </div>
    <div class="py-5">
      <a
        class="border font-medium px-8 py-2 rounded-full text-stone-500 hover:bg-blue-500 hover:text-white hover:border-none"
        href="#"
      >
        View Details
      </a>
    </div>
    <div
      class="font-medium flex justify-center gap-2 text-stone-400"
      role="social"
    >
      <div :class="social">
        <i class="fab fa-facebook text-blue-500" aria-hidden="true"></i>
      </div>
      <div :class="social">
        <i class="fab fa-twitter text-sky-400" aria-hidden="true"></i>
      </div>
      <div :class="social">
        <i class="fab fa-linkedin-in text-sky-700"></i>
      </div>
      <div :class="social">
        <i class="fab fa-instagram text-red-600" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>
