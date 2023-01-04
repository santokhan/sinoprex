<script setup>
import FeatureTitle from "./FeatureTitle.vue";
import FeatureImg from "./FeatureImg.vue";
import FeatureDes from "./FeatureDes.vue";
</script>
<template>
  <div class="max-w-7xl mx-auto lg:flex items-center py-[3rem] xl:py-[5rem] text-stone-900 px-4">
    <div class="w-full xl:w-1/2 py-8 flex flex-col gap-[2rem]">
      <div class="flex flex-col gap-[1.5rem] text-center">
        <div>
          <span class="uppercase text-blue-500 bg-blue-100 px-4 py-1 font-medium rounded-full text-sm">
            FEATURES
          </span>
        </div>

        <FeatureTitle text="Revolutionize Your Online Business Today" />
        <FeatureDes>Thinking about opening a online platform to sell goods OR planning to
          have an APPs for your users & for a social platform. We can offer this
          services at ease and manage your service development</FeatureDes>
      </div>
      <div class="flex flex-wrap text-center" role="card">
        <div class="w-full xl:w-1/2 py-4 px-4">
          <div class="flex flex-col">
            <div class="flex justify-center">
              <img class="h-16" src="../../../assets/feature/database.svg" alt="data" />
            </div>
            <div class="text-xl font-semibold mt-3 mb-1">Data Management</div>
            <div class="text-justify">
              <FeatureDes>
                Your business stores, platforms or APPs generates huge data. We
                can help to analyze these data and it will also help you to manage
                them. This analysis can help you make proper decision your next
                business plan and can help you know direction of your growth going
              </FeatureDes>
            </div>
          </div>
        </div>
        <div class="w-full xl:w-1/2 py-4 px-4">
          <div class="flex flex-col">
            <div class="flex justify-center">
              <img class="h-16" src="../../../assets/feature/saas.svg" alt="saas" />
            </div>
            <div class="text-xl font-semibold mt-3 mb-1">SAAS Automation</div>
            <div class="text-justify">
              <FeatureDes>
                Need to get customer orders quickly, has huge inventory, need
                virtual assistant for your website. Need some plugin for your next
                project. We will do all this for you. Where you just need to
                provide us the business insights , how it should run and we will
                make it for you
              </FeatureDes>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full xl:w-1/2 py-8">
      <div class="flex flex-col items-center px-12">
        <img class="w-full" src="../../../assets/feature/feature.svg" alt="feature" />
      </div>
    </div>
  </div>
</template>
