<script setup>
import achivement from "./achivement.png";
import { RouterLink } from "vue-router";
import Card from "./Card.vue";
import Title from "./Title.vue";
import CardImg from "./CardImg.vue";
import bar from "../../../assets/readytogrow/bar-chart.svg";
import pencil from "../../../assets/readytogrow/pencil.svg";
import project from "../../../assets/readytogrow/project.svg";
import user from "../../../assets/readytogrow/user.svg";
</script>

<template>
  <section
    class="bg-blue-100 py-[3rem] xl:py-[5rem] text-stone-900 px-4"
    role="service"
  >
    <div class="max-w-7xl mx-auto flex flex-col gap-[5rem]">
      <div class="px-2 text-center max-w-4xl mx-auto">
        <div class="flex flex-col gap-3">
          <RouterLink to="services">
            <span
              class="uppercase text-blue-500 bg-blue-200 px-4 py-1 font-semibold rounded-full text-sm"
            >
              READY TO GROW
            </span>
          </RouterLink>
          <div class="text-3xl xl:text-5xl font-semibold py-2">
            The future of online success depends on online presence and quality
            service
          </div>
          <div class="text-xl max-w-3xl mx-auto">
            Sinopex API can help to connect to other Social & eCommerce
            platforms to provide you quick access to visualize and analyze
            financial&statistical data on your small and medium-sized customers
          </div>
        </div>
      </div>
      <div class="flex items-center flex-wrap" role="card">
        <Card title="Check User Interactions" :src="user"></Card>
        <Card title="Check Statistical Data" :src="bar"></Card>
        <Card title="Planing and Testing" :src="pencil"></Card>
        <Card title="Get Project Done" :src="project"></Card>
      </div>
    </div>
  </section>
</template>
