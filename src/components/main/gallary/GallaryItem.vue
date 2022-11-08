<script>
export default {
  data() {
    return { r: 0, reviewArr: [1, 2, 3, 4, 5] };
  },
  props: ["src", "title", "price", "review", "link"],
};
</script>
<template>
  <div className="w-full max-w-sm bg-white rounded-lg shadow-md">
    <a href="#">
      <img
        className="p-8 rounded-t-lg w-full h-60 object-contain"
        :src="src"
        alt="product image"
      />
    </a>
    <div className="px-5 pb-5">
      <a :href="link">
        <h5 className="text-xl font-semibold tracking-tight">
          {{ title }}
        </h5>
      </a>
      <div className="flex items-center mt-2.5 mb-5">
        <i
          v-for="item in reviewArr"
          v-if="r < review"
          class="fa fa-star text-yellow-400"
          aria-hidden="true"
        ></i>
        <span
          className="bg-blue-100 text-blue-800 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded"
        >
          {{ review }}.0
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold text-gray-900"> ${{ price }} </span>
        <a
          :href="link"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >Add to cart</a
        >
      </div>
    </div>
  </div>
</template>
