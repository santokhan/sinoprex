<script>
export default {
  props: ["name", "path"],
};
</script>
<template>
  <div>
    <a class="border-b-2 border-transparent hover:border-blue-500" :href="path">
      {{ name }}
    </a>
  </div>
</template>
