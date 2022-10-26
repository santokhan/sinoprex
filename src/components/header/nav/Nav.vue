<script setup>
import NavItem from "./NavItem.vue";
</script>

<template>
  <div class="hidden xl:block text-white tracking-wide uppercase">
    <nav class="flex items-center py-2">
      <NavItem name="Home" path="home"></NavItem>
      <NavItem name="Service" path="service"></NavItem>
      <NavItem name="Project" path="project"></NavItem>
      <NavItem name="Blog" path="blog"></NavItem>
      <NavItem name="Chat Bot" path="chat"></NavItem>
      <NavItem name="FAQ" path="faq"></NavItem>
    </nav>
  </div>
</template>
