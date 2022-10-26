<script setup>
import DropdownItem from "./DropdownItem.vue";
</script>

<template>
  <div
    class="absolute right-0 top-20 border border-stone-900 bg-stone-800 w-48 text-white tracking-wide uppercase rounded-2xl py-4 dropdown-menu-1"
  >
    <nav class="flex flex-col items-center gap-3 py-2">
      <DropdownItem name="Home" path="home"></DropdownItem>
      <DropdownItem name="Service" path="service"></DropdownItem>
      <DropdownItem name="Project" path="project"></DropdownItem>
      <DropdownItem name="Blog" path="blog"></DropdownItem>
      <DropdownItem name="Chat Bot" path="chat"></DropdownItem>
      <DropdownItem name="FAQ" path="faq"></DropdownItem>
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
