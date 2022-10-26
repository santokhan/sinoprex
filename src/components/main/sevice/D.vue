<script setup></script>
<script>
export default {
  props: ["text"],
};
</script>
<template>
  <div class="font-semibold text-stone-700">
    {{ text }}
  </div>
</template>
