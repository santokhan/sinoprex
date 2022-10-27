<script setup>
import NavItem from "./NavItem.vue";
</script>

<template>
  <div class="hidden xl:block text-white tracking-wide uppercase">
    <nav class="flex items-center py-2">
      <NavItem name="home" path="home"></NavItem>
      <NavItem name="service" path="service"></NavItem>
      <NavItem name="project" path="project"></NavItem>
      <NavItem name="contact" path="contact"></NavItem>
      <NavItem name="faq" path="faq"></NavItem>
    </nav>
  </div>
</template>
