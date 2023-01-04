<script setup>
import { reactive } from 'vue';

const props = defineProps({text: String});

const printLimit = reactive({value: ""});

function handleTextLimit(){
    printLimit.value = props.text.slice(0, 90) + '...';
}

handleTextLimit();
</script>

<template>
    <div class="text-gray-400 mb-1 transition-all ease-in duration-300" @mouseover="() => { printLimit.value = text }" @mouseleave="handleTextLimit">
        {{ printLimit.value }}
    </div>
</template>