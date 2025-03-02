<script setup>
// berguna ketika load data json 
const items = [
    {
        "id": 1,
        "text": "kesatu",
        "done" : true 
    },
    {
        "id": 2,
        "text": "kedua",
        "done" : false
    },
    {
        "id": 3,
        "text": "ketiga",
        "done" : true 
    }
]

</script>

<template>
    <div>
        <h1>List</h1>
        <ol>
            <!-- karena kondisi lebih tinggi daripada for makan untuk if kita harus melakukan for dulu di template  -->
            <template v-for="(item) in items">
                <li v-if="item.done" :key="item.id"><!-- menampilkan item yang done -->
                    {{ item.text }} ({{ item.id+2310605000 }})
                </li>
            </template>
        </ol>
    </div>
    <div v-for="n in 10">
        Hello {{ n }}
    </div>
</template>

<style scoped>
.ol {
    list-style-type: decimal;
}

</style>