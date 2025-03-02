<script setup>
import { reactive } from 'vue';

// Gunakan reactive untuk tipe objek
const contact = reactive({
    name: '',
    email: '',
    age: 0,
    type: "Regular",
    complain: false,
    message:''
})
</script>

<template>
    <h1>Contact Us</h1>
    <form action="">
        <div>
            <label for="name">
                <input type="text" id="name" v-model="contact.name">
            </label>
        </div>
        <div>
            <label for="email">
                <input type="email" id="email" v-model="contact.email">
            </label>
        </div>
        <div>
            <label for="age">
                <input type="number" id="age" v-model="contact.age">
            </label>
        </div>
        <div>
            <label for="type">
                <select id="type" v-model="contact.type">
                    <option value="Regular">Regular</option>
                    <option value="VIP">VIP</option>
                </select>
            </label>
        </div>
        <div>
            <label for="complain">
                <input type="checkbox" id="complain" v-model="contact.complain">
            </label>
        </div>
        <div>
            <label for="message">
                <textarea id="message" v-model="contact.message"></textarea>
            </label>
        </div>
        <button type="submit">Kirim</button>
    </form>

    <div>
        <h2>Preview</h2>
        <p>Name : {{ contact.name }}</p>
        <p>email : {{ contact.email }}</p>
        <p>age : {{ contact.age }}</p>
        <p>type : {{ contact.type }}</p>
        <p>complain : {{ contact.complain }}</p>
        <p>message : {{ contact.message }}</p>
    </div>
</template>

<style scoped>
</style>