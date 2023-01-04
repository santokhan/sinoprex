<script setup>
defineProps({href:String})
</script>

<template>
    <a :href="href" class="w-full max-w-sm bg-white rounded-[1.25rem] shadow-xl flex flex-col p-5 card">
        <slot></slot>
    </a>
</template>

<style scoped>
.card {
    box-shadow: 2px 3px 20px 8px #00000008;
}
</style>