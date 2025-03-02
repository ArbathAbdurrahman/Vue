<script setup>
import { computed, reactive, ref } from 'vue';
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

// ada dua metode event handler dengan argument atau tidak 
function cfirstname(event){
    person.firstname = event.target.value;
}
function clastname(){
    person.lastname = document.getElementById("lastName").value;
}

const counter = ref(0);
</script>

<template>
    <div>
        <form>
            <input placeholder="First Name" type="text" id="firstName" @input="cfirstname">
            <br>
            <input placeholder="Last Name" type="text" id="lastName" @input="clastname">
            <br>
            <!-- event modifier -->
            <button @click.prevent="sayHello()">Say Hello</button>
        </form>
    </div>
    <h1> Hello {{ fullname }}</h1>
    <!-- inline statment -->
     <button @click="counter++">{{ counter }}</button>
</template>