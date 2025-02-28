<script setup>
console.info("Hello Vue");

const hello = "<b>Hello dari Vue</b>"
const classHello = "hello"
const id = "hello";
const buttonOff = true;
const data = {
    id: "hello",
    class: "hello"
};

function halo(){
    return "Fungsi Hello!";
}
</script>

<template>
    <h1 class="hello">Hello Vue</h1>
    <!-- {{}} bisa memanggil apapun kode javascript -->
    <h1>{{ hello.toUpperCase() }}</h1>
    <h1>{{ 80 * 80 }}</h1>
    <h1>{{ halo() }}</h1>
    <h1 class="hello">{{ hello }}</h1>
    <div v-html="hello"></div>
    <!-- v-bind -->
    <div :id :class="classHello" v-html="hello"></div>
    <!-- render objek data directive bindding-->
    <div v-bind="data" v-html="hello"></div>
    <div :class="data.class" v-html="hello"></div>
    <!-- boolean -->
    <button :disabled="buttonOff">Ini Button</button>
</template>

<style>
.hello {
    color: green;
}
</style>