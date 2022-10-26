<script setup>
import FAQItem from "./FAQItem.vue";
import FAQItemFirst from "./FAQItemFirst.vue";
</script>
<script>
export default {
  methods: {
    toggler(targetID) {
      const b = document.getElementById(targetID);
      for (let i = 0; i < h.length; i++) {
        h[i].addEventListener("click", () => {
          b[i].style.display = "block";
        });
      }
      h.addEventListener("click", () => {
        const element = document.getElementById(target);
        element.style.display = "block";
      });
    },
  },
  components: { FAQItemFirst },
};
</script>
<template>
  <div class="max-w-4xl mx-auto py-[8rem]">
    <div id="accordion-open" data-accordion="open" class="border">
      <FAQItemFirst
        heading="Why Sinoprex?"
        :des="[
          'We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents.',
        ]"
      />
      <FAQItem
        heading="What Service Sinoprex provide?"
        :des="[
          'We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents.',
        ]"
      />
      <FAQItem
        heading="What is IoT in Sinoprex?"
        :des="[
          'We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents.',
        ]"
      />
    </div>
  </div>
</template>
