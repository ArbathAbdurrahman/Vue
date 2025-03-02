<script setup>
import { ref } from 'vue';

const array = ['red','bold'];
const red = ref(false);
const bold = ref(false);

function togleRed(){
    red.value = !red.value;
}
function togleBold() {
    bold.value = !bold.value;
}
</script>

<template>
    <h1 :class="{red:red, bold:bold}">Style</h1>
    <h1 :class="array">Style</h1>
    <button @click="togleRed">Red</button>
    <button @click="togleBold">Bold</button>
</template>

<!-- gunakan scoped agar style hanya digunakan pada komponen ini  -->
<style scoped>
.red {
    color: red;
}

.bold {
    text-transform: uppercase;
    font-weight: bold;
}
</style>