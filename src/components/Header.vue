<script setup>
import { ref } from 'vue'
import Button from './ButtonUI.vue'
import Movies from './Movies.vue';

function test1 (v) {
    uwu.value = v
}

const uwu = ref(true)
</script>
<template>
    <header>
        <h1>
        Random Movies
        </h1>
        <Button :test1="test1"/>
        <Movies v-if="uwu"/>
    </header>
</template>
<style>
header{
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    transition: all .2s ease;
    background-color: #0505057c;
}
h1{
    margin-bottom: 4rem;
}
button:hover ~ header{
    background-color: #0000001c;
}
</style>