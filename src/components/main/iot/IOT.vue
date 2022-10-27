<script setup>
import IOTTitle from "./IOTTitle.vue";
import IOTImg from "./IOTImg.vue";
import IOTDes from "./IOTDes.vue";
</script>
<template>
  <div
    class="max-w-7xl mx-auto lg:flex items-center py-[3rem] xl:py-[5rem] text-stone-900 px-4"
  >
    <div class="w-full xl:w-1/2 py-8 flex flex-col gap-[2rem]">
      <div class="flex flex-col gap-[1.5rem] text-center">
        <div>
          <span
            class="uppercase text-blue-500 bg-blue-100 px-4 py-1 font-medium rounded-full text-sm"
          >
            IoT
          </span>
        </div>

        <IOTTitle text="Power of cloud connectivity for coming market" />
        <IOTDes
          text="The Internet of Things (IoT) is an interconnected network of objects which range from simple sensors to smartphones and tablets; it is a relatively novel paradigm that has been rapidly gaining ground in the scenario of modern wireless telecommunications with an expected growth of 25 to 50 billion"
        />
      </div>
      <div class="flex flex-wrap text-center" role="card">
        <div class="w-full xl:w-1/2 py-4 px-4">
          <div class="flex flex-col gap-3">
            <div class="flex justify-center">
              <img
                class="h-20"
                src="../../../assets/image/iot/laptop.svg"
                alt="data"
              />
            </div>
            <div class="text-xl font-semibold">Smart Device</div>
            <div class="font-semibold text-stone-500 text-justify">
              The developed concept for defining smart device is based on three
              main features, namely context-awareness, autonomy and device
              connectivity.
            </div>
          </div>
        </div>
        <div class="w-full xl:w-1/2 py-4 px-4">
          <div class="flex flex-col gap-3">
            <div class="flex justify-center">
              <img
                class="h-20"
                src="../../../assets/image/iot/cloud.svg"
                alt="saas"
              />
            </div>
            <div class="text-xl font-semibold">Cloud Platform</div>
            <div class="font-semibold text-stone-500 text-justify">
              Need some plugin for your next project. We will do all this for
              you. Where you just need to provide us the business insights , how
              it should run and we will make it for you
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full xl:w-1/2 py-8">
      <div class="flex flex-col items-center px-12">
        <img
          class="w-full"
          src="../../../assets/image/iot/home.png"
          alt="IOT"
        />
      </div>
    </div>
  </div>
</template>
