<script>
export default {
  data() {
    return { r: 0, reviewArr: [1, 2, 3, 4, 5] };
  },
  props: ["src", "title", "price", "review", "link"],
};
</script>
<template>
  <div class="w-full max-w-sm bg-white rounded-lg shadow-md">
    <a href="#"><img class="p-8 rounded-t-lg w-full h-60 object-contain" :src="src" alt="product image" /></a>
    <div class="px-5 pb-5">
      <a :href="link">
        <h5 class="text-lg font-medium tracking-tight">
          {{ title }}
        </h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5">
        <i v-for="item in reviewArr" v-if="r < review" class="fa fa-star text-yellow-400" aria-hidden="true"></i>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded">
          {{ review }}
        </span>
      </div>
    </div>
  </div>
</template>
