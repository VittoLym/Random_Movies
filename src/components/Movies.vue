<script setup>
import { ref, onBeforeMount } from 'vue';
import ButtonOptionUI from './ButtonOptionUI.vue';
import left from '../assets/left.svg'
import right from '../assets/right.svg'
import MovieItem from './MovieItem.vue';

function isMovieRepeated(m, mList) {
    return mList.some(movie => JSON.stringify(movie.name) === JSON.stringify(m.name));
}

function addMovieWithId(movie, moviesList) {
    const id = moviesList.length + 1;
    return [...moviesList, { ...movie, id }];
}
async function handleFetchResponse(response) {
    if (!response.ok) {
        throw new Error('Error getting movie data.');
    }
    const { rMovie, allMovies } = await response.json();
    return { rMovie, allMovies };
}

async function moviesInit() {
    const dataFetch = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: 'enviando mensaje',
    };
    try {

        const response = await fetch('http://localhost:3000/movies', dataFetch)
        const { rMovie, allMovies } = await handleFetchResponse(response);

        if (isMovieRepeated(rMovie, movies.value) && movies.value.length < allMovies.length) {
            moviesInit()
        }

        else if (movies.value.length >= allMovies.length) {
            return
        }

        else {
            movie.value = rMovie
            movies.value = addMovieWithId(rMovie, movies.value)
            console.log(movies.value)
        }

    }
    catch (e) {
        console.log('had an error', e)
    }
}

function searchMovie() {
    moviesInit()
}

function rememberMovie() {
    console.log(movies.value)
    console.log(movies.value[0])
    /* 
    id.value = movies.value.findIndex( i => i.name == movie.value.name)
    if(id.value > 0){
        id.value = id.value -1
        movie.value = {
            name: movies.value[id.value].name,
            fecha: movies.value[id.value].fecha,
            thumbnail: movies.value[id.value].img,
            wiki: movies.value[id.value].wiki
        }
    }
    else{        
        id.value = movies.value.length -1
        movie.value = {
            name: movies.value[id.value].name,
            fecha: movies.value[id.value].fecha,
            thumbnail: movies.value[id.value].img,
            wiki: movies.value[id.value].wiki
        }
    } */
}

onBeforeMount(() => {
    moviesInit()
})
const title1 = 'Other Movie',
    title2 = 'Show all Movies'
const movies = ref([])
const movie = ref('')
const id = ref(0)
</script>
<template>
    <section id="Section">
        <div class="container-movie">
            <img :src="left" alt="anterior" @click="rememberMovie">
            <MovieItem :movie="movie" :movies="movies" />
            <img :src="right" alt="proxima" @click="searchMovie">
        </div>
        <article class="Buttons">
            <ButtonOptionUI :title="title1" @click="searchMovie" />
            <ButtonOptionUI :title="title2" />
        </article>
    </section>
</template>
<style scoped>
section {
    height: max-content;
    background-image: url('/src/assets/bg6.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    padding-top: 2rem;
}

img {
    cursor: pointer;
    transition: all .2s ease;
    height: max-content;
    border-radius: 35px;
    padding: 0 .5rem;
}

img:hover {
    scale: 1.3;
    background-color: #00000059;
}

.Buttons {
    display: flex;
    width: 60vw;
    padding-top: 2rem;
    justify-content: space-around;
}
</style>