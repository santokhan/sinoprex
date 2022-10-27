<script setup>
import NavItem from "../../nav/NavItem.vue";
</script>

<template>
  <div class="hidden xl:block text-white tracking-wide uppercase">
    <nav class="flex items-center py-2">
      <NavItem name="home" path="home" />
      <NavItem name="service" path="service" />
      <NavItem name="project" path="project" />
      <NavItem name="contact" path="contact" />
      <NavItem name="faq" path="faq" />
    </nav>
  </div>
</template>
