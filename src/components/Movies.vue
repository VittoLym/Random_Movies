<script setup>
import { ref } from 'vue';
import ButtonOptionUI from './ButtonOptionUI.vue';
import left from '../assets/left.svg'
import right from '../assets/right.svg'
import MovieItem from './MovieItem.vue';

function searchMovie() {
    name.value = 'El resplandor'
    fecha.value = '25/12/1980'
}
function rememberMovie(){
    console.log('remembering movie...')
}
const leslis = [1]
const title1 = 'Other Movie'
const title2 = 'Show all Movies'
const name = ref()
const fecha = ref()
</script>
<template>
<section id="Section">
    <div class="container-movie">
        <img :src="left" alt="anterior" @click="rememberMovie">
        <MovieItem :name="name" :fecha="fecha" v-for="i in leslis" />
        <img :src="right" alt="proxima" @click="searchMovie">
    </div>
    <article class="Buttons">
        <ButtonOptionUI :title="title1" @click="searchMovie"/>
        <ButtonOptionUI :title="title2"/>
    </article>
</section>
</template>
<style scoped>
section{
    height: max-content;
    background-image: url('/src/assets/bg6.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1{
    padding-top: 2rem;
}
.container-movie{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
}
img{
    cursor: pointer;
    transition: all .2s ease;
    height: max-content;
    border-radius: 35px;
    padding: 0 .5rem;
}
img:hover{
    scale: 1.3;
    background-color: #00000059;
}
.Buttons{
    display: flex;
    width: 60vw;
    padding-top: 2rem;
    justify-content: space-around;
}
</style>