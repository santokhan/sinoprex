<script setup>
import FeatureTitle from "./FeatureTitle.vue";
import FeatureImg from "./FeatureImg.vue";
import FeatureDes from "./FeatureDes.vue";
</script>
<template>
  <div class="max-w-7xl mx-auto lg:flex items-center py-[3rem] xl:py-[5rem] text-stone-900 px-4">
    <div class="w-full xl:w-1/2 py-8">
      <div class="flex flex-col items-center px-12">
        <img class="w-full" src="../../../assets/feature/tracking.svg" alt="feature" />
      </div>
    </div>
    <div class="w-full xl:w-1/2 py-8 flex flex-col gap-[2rem]">
      <div class="flex flex-col gap-[1.5rem] text-center">
        <div>
          <span class="uppercase text-blue-500 bg-blue-100 px-4 py-1 font-medium rounded-full text-sm">
            FEATURES
          </span>
        </div>
        <FeatureTitle text="Track Productivity & Keep Your Projects On The Budget" />
        <FeatureDes
          text="We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents." />
      </div>
      <div class="flex flex-wrap text-center" role="card">
        <div class="w-full xl:w-1/2 py-4 px-4">
          <div class="flex flex-col gap-3">
            <div class="flex justify-center">
              <img class="h-16" src="../../../assets/feature/cloud-download.svg" alt="saas" />
            </div>
            <div class="text-xl font-semibold">RESTful API & PlugIn</div>
            <div class="text-justify">
              <FeatureDes>If your projects requires real time solution which requires APIs
                or PlugIns we can do it for you.</FeatureDes>
            </div>
          </div>
        </div>
        <div class="w-full xl:w-1/2 py-4 px-4">
          <div class="flex flex-col gap-3">
            <div class="flex justify-center">
              <img class="h-16" src="../../../assets/feature/database-indigo.svg" alt="data" />
            </div>
            <div class="text-xl font-semibold">Data Storage</div>
            <div class="text-justify">
              <FeatureDes>We provide database solutions for online store , where you can
                store and use the data for later use.</FeatureDes>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
