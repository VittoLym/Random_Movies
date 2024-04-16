<script setup>
import ButtonOptionUI from './ButtonOptionUI.vue';
import MovieItem from './MovieItem.vue';
const leslis = [1]
const title1 = 'Other Movie'
const title2 = 'Show all Movies'
</script>
<template>
<section id="Section">
    <div class="container-movie">
        <MovieItem v-for="i in leslis" />
    </div>
    <article class="Buttons">
        <ButtonOptionUI :title="title1"/>
        <ButtonOptionUI :title="title2"/>
    </article>
</section>
</template>
<style scoped>
section{
    height: max-content;
    background-image: url('./src/assets/bg6.jpg');
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
    padding-top: 2rem;
}
.Buttons{
    display: flex;
    width: 60vw;
    padding-top: 2rem;
    justify-content: space-around;
}
</style>