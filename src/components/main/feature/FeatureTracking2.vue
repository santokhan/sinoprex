<script setup>
import FeatureTitle from "./FeatureTitle.vue";
import FeatureImg from "./FeatureImg.vue";
import FeatureDes from "./FeatureDes.vue";
</script>
<template>
  <div class="max-w-7xl mx-auto lg:flex items-center py-[3rem] xl:py-[5rem] text-stone-900 px-4">
    <div class="w-full xl:w-1/2 py-8">
      <div class="flex flex-col items-center px-12">
        <img class="w-full" src="../../../assets/feature/laptop.svg" alt="feature" />
      </div>
    </div>
    <div class="w-full xl:w-1/2 py-8 flex flex-col gap-[2rem]">
      <div class="flex flex-col gap-[1.5rem] text-center">
        <div>
          <span class="uppercase text-blue-500 bg-blue-100 px-4 py-1 font-medium rounded-full text-sm">
            FEATURES
          </span>
        </div>
        <FeatureTitle text="Real time server interaction" />
        <FeatureDes
          text="We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents." />
      </div>
      <div class="flex flex-wrap text-center" role="card">
        <div class="w-full xl:w-1/2 py-4 px-4">
          <div class="flex flex-col gap-3">
            <div class="flex justify-center">
              <img class="h-16" src="../../../assets/feature/pie.svg" alt="saas" />
            </div>
            <div class="text-xl font-semibold">Reporting & Analysis</div>
            <div class="text-justify">
              <FeatureDes>
                We provide marketing service to startups businesses to looking for
                a partner digital media.
              </FeatureDes>
            </div>
          </div>
        </div>
        <div class="w-full xl:w-1/2 py-4 px-4">
          <div class="flex flex-col gap-3">
            <div class="flex justify-center">
              <img class="h-16" src="../../../assets/feature/android.svg" alt="data" />
            </div>
            <div class="text-xl font-semibold">Web APP</div>
            <div class="text-justify">
              <FeatureDes>
                Using the most popular framework to make your next web
                application. You can use it on multiple devices
              </FeatureDes>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
