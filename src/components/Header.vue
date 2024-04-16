<script setup>
import Button from './ButtonUI.vue'
</script>
<template>
    <header>
        <h1>
        Random Movies
        </h1>
        <Button />
    </header>
</template>
<style>
header{
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