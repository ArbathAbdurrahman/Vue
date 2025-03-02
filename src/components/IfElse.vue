<script setup>
import { ref } from 'vue';

const score = ref(40);
</script>

<template>
    <div>
        <h1>Score</h1>
        <div v-show="score > 50">
            <!-- ini hanya akan mucul ketika kondisi terpenuhi dan akan hidden ketika false -->
            Score is {{ score }}
        </div>
        <div v-if="score >= 90">
            <p>Yeay Score {{ score }}</p>
        </div>
        <div v-else-if="score > 80">
            <p>Bad Score {{ score }}</p>
        </div>
        <div v-else="score > 75">
            <p>Bad Score {{ score }}</p>
        </div>
    </div>
</template>