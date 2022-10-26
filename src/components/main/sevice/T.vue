<script setup></script>
<script>
export default {
  props: ["name"],
};
</script>
<template>
  <div class="text-2xl xl:text-3xl font-bold text-gray-700">
    {{ name }}
  </div>
</template>
