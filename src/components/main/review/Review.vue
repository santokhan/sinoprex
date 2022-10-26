<script setup>
import girl from "../../../assets/cute_girl.png";
import Clients from "./Clients.vue";
import Clients1 from "./Clients1.vue";
import Clients2 from "./Clients2.vue";
</script>
<template>
  <div
    class="bg-stone-900 py-[4rem] md:py-[5rem] lg:py-[6rem] xl:py-[8rem] text-white flex flex-col gap-[2rem] md:gap-[3rem] lg:gap-[4rem] xl:gap-[5rem] px-12"
  >
    <div class="flex flex-col items-center gap-3">
      <div>
        <a
          class="bg-[#162830] text-xs xl:text-base font-semibold mb-2 rounded-full px-5 py-1 text-white uppercase"
          href="#"
        >
          Client's Review
        </a>
      </div>
      <div class="font-semibold text-3xl xl:text-5xl uppercase">
        What our clients says
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-[2rem] items-baseline">
      <Clients
        class="hidden md:block"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt
      necessitatibus est quis numquam modi officiis? Nihil dolor eveniet optio
      perferendis, impedit veritatis totam incidunt ut atque deserunt libero
      asperiores."
      ></Clients>
      <Clients
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt
      necessitatibus est quis numquam modi officiis? Nihil dolor eveniet optio
      perferendis, impedit veritatis totam incidunt ut atque deserunt libero
      asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Nihil aspernatur dolore placeat voluptatem iure, atque necessitatibus"
      ></Clients>
      <Clients
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt
      necessitatibus est quis numquam modi officiis? Nihil dolor eveniet optio
      perferendis, impedit veritatis totam incidunt ut atque deserunt libero
      asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Nihil aspernatur dolore placeat voluptatem iure, atque necessitatibus
      impedit velit rerum maiores optio exercitationem dignissimos. Porro odio
      sunt corporis, omnis molestias voluptatem?"
      ></Clients>
      <Clients
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt
      necessitatibus est quis numquam modi officiis? Nihil dolor eveniet optio
      perferendis, impedit veritatis totam incidunt ut atque deserunt libero
      asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Nihil aspernatur dolore placeat voluptatem iure, atque necessitatibus"
      ></Clients>
      <Clients
        class="hidden md:block"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt
      necessitatibus est quis numquam modi officiis? Nihil dolor eveniet optio
      perferendis, impedit veritatis totam incidunt ut atque deserunt libero
      asperiores."
      ></Clients>
    </div>
  </div>
</template>
