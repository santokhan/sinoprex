<script setup>
import T from "./T.vue";
import D from "./D.vue";
import Serial from './Serial.vue';
</script>
<template>
  <section class="bg-gray-50 py-[32px] xl:py-[80px]" role="service">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-wrap items-start">
        <div class="w-full lg:w-1/2 xl:w-1/3 my-8 px-2">
          <div class="flex flex-col gap-3 px-4 pt-16">
            <RouterLink to="service">
              <span class="uppercase text-blue-500 bg-blue-100 px-4 py-1 font-medium rounded-full text-sm">
                Our Services
              </span>
            </RouterLink>
            <div class="text-3xl xl:text-5xl text-stone-800 font-bold py-2">
              Services what we provide
            </div>
            <RouterLink to="service">
              <div class="flex gap-3 items-center text-blue-500 font-medium">
                <span>Our All Services</span>
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="w-1/2 xl:w-1/3 px-4 xl:px-10 py-4 xl:py-10">
          <div class="flex flex-col gap-[20px] xl:gap-[32px] border-l-2 border-stone-200 px-4 xl:px-8 pb-4">
            <Serial>01</Serial>
            <div class="h-20 w-20 bg-blue-500 rounded-xl flex justify-center items-center text-white text-4xl">
              <img class="w-12" src="../../../assets/analytics.svg" alt="service" />
            </div>
            <T>Data <br>Analytics</T>
            <D>We provide marketing service to startups businesses to looking for
              a partner digital media.</D>
          </div>
        </div>
        <div class="w-1/2 xl:w-1/3 px-4 xl:px-10 py-4 xl:py-10">
          <div class="flex flex-col gap-[20px] xl:gap-[32px] border-l-2 border-stone-200 px-4 xl:px-8 pb-4">
            <Serial>02</Serial>
            <div class="h-20 w-20 bg-orange-500 rounded-xl flex justify-center items-center text-white text-4xl">
              <img class="w-12" src="../../../assets/saas.svg" alt="service" />
            </div>
            <T>SaaS <br>Development</T>
            <D>We can deliver any kind e-commerce related solutions for your online business Payment , CMS , CRM , Inventory Management</D>
          </div>
        </div>
        <div class="w-1/2 xl:w-1/3 px-4 xl:px-10 py-4 xl:py-10">
          <div class="flex flex-col gap-[20px] xl:gap-[32px] border-l-2 border-stone-200 px-4 xl:px-8 pb-4">
            <Serial>03</Serial>
            <div class="h-20 w-20 bg-purple-500 rounded-xl flex justify-center items-center text-white text-4xl">
              <img class="w-12" src="../../../assets/android.svg" alt="service" />
            </div>
            <T>Mobile <br>Development</T>
            <D>Creating APPs for different kinds of OS and provide after sales update and bug solving</D>
          </div>
        </div>
        <div class="w-1/2 xl:w-1/3 px-4 xl:px-10 py-4 xl:py-10">
          <div class="flex flex-col gap-[20px] xl:gap-[32px] border-l-2 border-stone-200 px-4 xl:px-8 pb-4">
            <Serial>04</Serial>
            <div class="h-20 w-20 bg-rose-500 rounded-xl flex justify-center items-center text-white text-4xl">
              <img class="w-12" src="../../../assets/bullhorn.svg" alt="service" />
            </div>
            <T>Digital <br>Marketing</T>
            <D>We provide marketing service to startups businesses to looking for a partner digital media. Generate more revenue by getting more user views, great SEO and reach targeted market</D>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
