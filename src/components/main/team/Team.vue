<script setup>
import Card from "./Card.vue";
import cute_girl from "../../../assets/cute_girl.png";
</script>
<template>
  <section
    class="bg-white flex flex-col gap-[2rem] xl:gap-[5rem] py-[4rem] xl:py-[8rem] text-stone-900"
    role="team"
  >
    <div class="flex flex-col items-center gap-3">
      <div>
        <a
          class="bg-blue-100 font-semibold px-4 py-1 rounded-full text-sm xl:text-base text-blue-500 uppercase"
          href="#"
        >
          Our Team
        </a>
      </div>
      <div class="font-semibold text-3xl xl:text-4xl uppercase text-stone-900">
        Our Dedicated Team
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-[2.5rem] px-[2rem]">
      <Card class="hidden md:block" src="member-1.jpg"></Card>
      <Card src="member-1.jpg"></Card>
      <Card src="member-1.jpg"></Card>
      <Card src="member-1.jpg"></Card>
      <Card class="hidden md:block" src="member-1.jpg"></Card>
    </div>
  </section>
</template>
