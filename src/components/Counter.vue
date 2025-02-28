<script setup>
import { nextTick, ref } from 'vue';
// ref bisa memanggil tipe data apapun di javascript
let count = ref(0);

function tambah() {
    // count++;
    // document.getElementById("count").innerText = `Counter : ${count}`; tidak direkomendasikan
    count.value++;
}

let counter = ref({
    count: 0,
    name : "Arbath",
});
async function ObTambah() {
    // counter.value.count += 1;
    counter.value = {
        name: counter.value.name,
        count: counter.value.count + 1
    };
    // await nextTick();
    // counter.value.count++;
    // console.log("ditambah setelah nextTick")
}
</script>

<template>
    <div>
        <h1 id="count"> Counter: {{ count }}</h1>
        <button @click="tambah">tambah</button>
    </div>

    <div>
        <h1 id="count"> {{ counter.name }}: {{ counter.count }}</h1>
        <button @click="ObTambah">tambah</button>
    </div>
</template>