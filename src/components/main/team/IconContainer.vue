<script>
export default { props: ["icon"] };
</script>
<template>
  <div
    class="border h-10 w-10 flex items-center justify-center rounded-full hover:bg-blue-400 hover:text-white hover:border-none"
  >
    {{ icon }}
  </div>
</template>
