<script>
export default {
  props: ["heading", "des"],
  data() {
    return { isHidden: false };
  },
  methods: {
    toggle() {
      this.isHidden = this.isHidden ? false : true;
    },
    arrow() {
      if (this.isHidden) {
        return "rotate-180";
      } else {
        return "rotate-0";
      }
    },
  },
};
</script>
<template>
  <h2 id="accordion-open-heading-1" @click="toggle">
    <button
      type="button"
      class="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
      data-accordion-target="#accordion-open-body-1"
      aria-expanded="true"
      aria-controls="accordion-open-body-1"
    >
      <span class="flex items-center">
        <svg
          class="w-5 h-5 mr-2 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          ></path>
        </svg>
        {{ heading }}
      </span>
      <svg
        :class="arrow()"
        data-accordion-icon=""
        class="w-6 h-6 rotate-180 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </h2>
  <div
    v-if="isHidden"
    id="accordion-open-body-1"
    class=""
    aria-labelledby="accordion-open-heading-1"
  >
    <div class="p-5 font-light border border-b-0 border-gray-200">
      <p v-for="key of des" class="mb-2 text-gray-500">
        {{ key }}
      </p>
    </div>
  </div>
</template>
