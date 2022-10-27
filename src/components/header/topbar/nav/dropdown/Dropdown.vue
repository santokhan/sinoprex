<script setup>
import NavItem from "../../../nav/NavItem.vue";
</script>

<template>
  <div
    class="absolute right-0 top-20 border border-stone-900 bg-stone-800 w-48 text-white tracking-wide uppercase rounded-2xl py-4 dropdown-menu-1"
  >
    <nav class="flex flex-col items-center gap-3 py-2">
      <NavItem name="Home" path="home" />
      <NavItem name="Service" path="service" />
      <NavItem name="project" path="project" />
      <NavItem name="Contact" path="contact" />
      <NavItem name="FAQ" path="faq" />
    </nav>
  </div>
</template>

<style scoped>
.dropdown-menu-1::before {
  content: "";
  position: absolute;
  right: 14px;
  top: -7px;
  border-top: 7px solid #27272a;
  border-right: 7px solid#27272a;
  /* border-top: 7px solid #1c1917; */
  border-left: 7px solid transparent;
  border-bottom: 7px solid transparent;
  transform: rotate(-45deg);
}
</style>
