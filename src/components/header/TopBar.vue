<script setup>
import bars from "../../assets/bar/bars.svg";
import cross from "../../assets/bar/cross.svg";
import Nav from "./nav/Nav.vue";
import logo from "../../assets/logo.svg";
import Dropdown from "./nav/dropdown/Dropdown.vue";
import { reactive,ref, onMounted  } from "vue";
// const el = ref()

const position = reactive({value:"flex justify-between items-center xl:h-[140px] px-4 lg:px-10 xl:px-[80px] py-3 sm:py-4 z-[900]"})

onMounted(() => {
  // el.value 
window.onscroll=() => {
  console.log(window.innerHeight);
  if (window.scrollY > window.innerHeight) {
    position.value = "fixed w-full left-0 top-0 bg-stone-900/75 flex justify-between items-center xl:h-[60px] px-4 lg:px-10 xl:px-[80px] py-3 sm:py-4 z-[900] drop-navbar";
  }else{
    position.value="flex justify-between items-center xl:h-[140px] px-4 lg:px-10 xl:px-[80px] py-3 sm:py-4 z-[900]"
  }
}
});
</script>
<script>
export default {
  data() {
    return { dropdown: false };
  },
  methods: {
    toggleDropdown() {
      this.dropdown = this.dropdown ? false : true;
    },
  },
};
</script>
<template>
  <div :class="position.value" role="header">
    <span class="fixed"></span>
    <div class="font-bold text-4xl text-white">
      <img class="w-[130px] xl:w-[160px]" :src="logo" alt="logo" />
    </div>
    <Nav v-if="!dropdown"></Nav>
    <div class="font-medium relative z-[901]" role="dropdown">
      <button type="button" class="text-white bg-sky-400 hover:bg-sky-500x h-10 w-10 xl:h-12 xl:w-12 rounded-full shadow flex justify-center items-center p-3 xl:p-3" @click="toggleDropdown()">
        <img v-if="!dropdown" class="w-full" :src="bars" alt="bars" />
        <img v-else-if="dropdown" class="w-full" :src="cross" alt="cross" />
      </button>
      <Dropdown v-if="dropdown"></Dropdown>
    </div>
  </div>
</template>
<style>
.logo {
  font-family: "Poppins", sans-serif;
}
</style>
