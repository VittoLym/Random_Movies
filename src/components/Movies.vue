<script setup>
import {  onMounted } from 'vue';
import ButtonOptionUI from './ButtonOptionUI.vue';
import MovieItem from './MovieItem.vue';

onMounted(() => {
    const section = document.getElementById('Section');
    section.scrollIntoView({ behavior: 'smooth' });
})
const title1 = 'Other Movie',
    title2 = 'Show all Movies'

</script>
<template>
    <section id="Section">
        <div class="container-movie">
            <MovieItem />
        </div><!-- 
        <article class="Buttons">
            <ButtonOptionUI :title="title1" @click="searchMovie" />
            <ButtonOptionUI :title="title2" />
        </article> -->
    </section>
</template>
<style scoped>
section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: -1;
}

h1 {
    padding-top: 2rem;
}

.container-movie {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.Buttons {
    display: flex;
    width: 60vw;
    padding-top: 2rem;
    justify-content: space-around;
}
.up{
    z-index: 50;
}
</style>