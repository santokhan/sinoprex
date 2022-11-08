<script setup>
import Copyright from "./Copyright.vue";
import Social from "./Social.vue";
import Subscribe from "./Subscribe.vue";
import logo from "../../assets/logo.svg";
import FooterNavItem from "./FooterNavItem.vue";
</script>
<template>
  <footer class="font-medium text-stone-400 px-4 bg-stone-900">
    <div
      class="max-w-7xl mx-auto flex flex-wrap py-12 lg:py-[4rem] xl:py-[5rem]"
    >
      <div class="w-full lg:w-2/4 flex flex-col">
        <div class="max-w-md">
          <div class="font-bold text-stone-300 uppercase mb-2">Company</div>
          <div
            class="flex flex-col lg:flex-row font-medium gap-[32px] uppercase"
          >
            <FooterNavItem name="About Us" path="about" />
            <FooterNavItem name="Service" path="service" />
            <FooterNavItem name="Reviews" path="review" />
            <FooterNavItem name="Contact" path="contact" />
          </div>
          <Subscribe />
        </div>
      </div>
      <div class="w-full lg:w-1/4 flex flex-col gap-[2rem]">
        <div>
          <div class="font-bold text-stone-300 uppercase mb-2">Headquaters</div>
          <div>RM2207, YINZHOU BUSINESS BUILDING,</div>
          <div>257 HUIFENGDONG ROAD,</div>
          <div>YINZHOU DISTRICT, NINGBO CITY</div>
        </div>
        <div>
          <div>
            <a
              class="uppercase border-b-2 border-transparent hover:border-blue-500"
              href="tel:(+123) 456 789 101"
            >
              (+123) 456 789 101
            </a>
          </div>
          <div>
            <a
              class="uppercase border-b-2 border-transparent hover:border-blue-500"
              href="mailto:Hello@SinoPex.com"
            >
              Hello@SinoPex.com
            </a>
          </div>
          <br />
        </div>
      </div>
      <div class="w-full lg:w-1/4 flex flex-col gap-[3rem]">
        <div class="flex justify-start lg:justify-end">
          <img class="w-[130px] xl:w-[160px]" :src="logo" alt="logo" />
        </div>
        <Social />
      </div>
    </div>

    <Copyright />
  </footer>
</template>
