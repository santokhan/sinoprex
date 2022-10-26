<script setup>
import { RouterLink } from "vue-router";
</script>
<script>
export default {
  data() {
    return {
      pathname: window.location.pathname,
    };
  },
  props: ["name", "path"],
  methods: {
    active(path) {
      if (this.pathname.includes(path)) {
        return "active";
      } else if (this.pathname === "/" && path === "home") {
        return "active";
      } else {
        return "";
      }
    },
  },
};
</script>
<template>
  <div class="font-medium px-8">
    <RouterLink :to="path">
      <div class="nav-link flex flex-col items-center" :class="active(path)">
        <span>{{ name }} </span>
        <div class="bg-white h-[2px] rounded w-0 line"></div>
      </div>
    </RouterLink>
  </div>
</template>
<style scoped>
@keyframes underline {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
.nav-link:hover > .line {
  animation: underline 300ms ease-in;
  animation-fill-mode: forwards;
}
.active > .line {
  width: 100%;
}
</style>
