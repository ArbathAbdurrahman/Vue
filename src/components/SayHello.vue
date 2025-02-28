<script setup>
import { computed, reactive } from 'vue';
// reactive digunakan khusus untuk tipe data object, array, dan collection 
const person = reactive({
    firstname: '',
    lastname: ''
})
// gunakan compute untuk menghindari pemanggilan ulang function
const fullname = computed((oldName)=> {
    console.log("fullname dipanggil");
    console.log(`Old name ${oldName}`);
    return `${person.firstname} ${person.lastname}`
})

function sayHello(){
    person.firstname = document.getElementById("firstName").value;
    person.lastname = document.getElementById("lastName").value;
}
</script>

<template>
    <div>
        <input placeholder="First Name" type="text" id="firstName">
        <br>
        <input placeholder="Last Name" type="text" id="lastName">
        <br>
        <button @click="sayHello()">Say Hello</button>
    </div>
    <h1> Hello {{ fullname }}</h1>
</template>