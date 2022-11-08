<script>
export default {
  data() {
    return { subscribe: false };
  },
  methods: {
    onSubscribe(e) {
      e.preventDefault();

      this.subscribe = true;
    },
  },
};
</script>
<template>
  <form class="py-[3rem] max-w-[360px]" v-on:submit.prevent="onSubscribe">
    <div class="text-lg uppercase" v-if="subscribe">
      Thank you for subscribe
    </div>
    <div
      v-else
      class="relative border-b border-stone-400 flex justify-between items-center py-2"
    >
      <input
        class="bg-transparent text-white w-full py-2 outline-none border-none"
        type="email"
        placeholder="Enter Your Email Address"
        pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
        required
      />
      <button type="submit" class="border-none outline-none">
        <i
          class="fab fa-telegram text-xl hover:text-blue-500"
          aria-hidden="true"
        ></i>
      </button>
    </div>
  </form>
</template>
