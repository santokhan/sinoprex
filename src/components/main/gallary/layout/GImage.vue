<script setup>
    defineProps({src: String});
</script>


<template>
    <img class="p-8 rounded-t-lg w-full h-60 object-contain" :src="src" alt="product image" />
</template>